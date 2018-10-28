﻿using System;
using System.Collections.Generic;
using System.Text;
using Repositories;
using Models;
using System.Linq;
using ViewModels;

namespace Services
{
    //Bussines logic
    public class SensorService
    {
        private SensorRepository _sensorRepository;

        public SensorService(SensorRepository sensorRepository )
        {
            _sensorRepository = sensorRepository;
        }

        public Sensor Create(Sensor sensor)
        {
            return _sensorRepository.Post(sensor);
        }

        public Sensor Update(Sensor sensor)
        {
            return _sensorRepository.Put(sensor);
        }

        public bool Delete(int id)
        {
            return _sensorRepository.Delete(id);
        }

        public List<Sensor> GetAll()
        {
            return _sensorRepository.GetAll();
        }

        public Sensor Get(int id)
        {
            return _sensorRepository.Get(id);
        }

        public List<LastSensorValues> GetLastValues(string labfarm, int count)
        {
            if(count == 0)
            {
                count = 999;
            }
            var sensors = _sensorRepository.GetAllIncludingLabfarm();
            var sensors2 = new List<Sensor>();
            foreach(Sensor s in sensors)
            {
                if(s.LabFarm.Name == labfarm)
                {
                    sensors2.Add(s);
                }
            }
            var latestSensors = new List<LastSensorValues>();

            foreach (Sensor s in sensors2)
            {
                s.SensorValues = s.SensorValues.OrderByDescending(x => x.TimeStamp).ToList();
                var d = new LastSensorValues();
                d.Name = s.Name; //TODO mapper?
                d.Data = s.SensorValues.ToList();               
                if(count < d.Data.Count)
                {
                    d.Data.RemoveRange(count, d.Data.Count - count);
                }
                latestSensors.Add(d);
            }

            return latestSensors;
           
        }

    }
}
