# Measuring plant growth
One of the requirements for out project was keeping track of plant growth. In this document we will go over the thought process regarding this matter. Image analysis or more specifically, keeping track of growing things, was something completely new to us so we had to do some research first. And after a while of trying different things we came to the conclusion that it isn't an easy matter, in fact we didn't get it to work at all. We lacked 2 big factors, time and knowledge mainly because there isn't much documentation or tutorials available online. So this document will be more like a little paper. First we will discuss the methods we tried with it's failure points and flaws and then we'll look into how we could implement image growth analysis in the future.

## Tried software and methods
The first thing we got set up for this part of the project was to be able to take pictures with a PiCam and store them in the database. This was relatively easy and didn't take alot of time. After that we had to think of ways to process these images to somehow know the amount a plant has grown. This really was the tricky part. We knew that growth analysis and computer vision or AI go hand in hand so we thought of excisting services or software that could help us instead of having to write our own AI. So we googled, tried alot of things and even read a paper and here are the things we tried:

#### Idea #1:
Our first idea was to use an API that would handle all the analysing. We could easily send the pictures taken with our Pi over an **API call**. We already had them stored in an Azure database as a **BASE 64** string which we could easily translate back to an image file. We even looked in to **BLOB** storage in the azure cloud to store images a little more efficiently, however this is more optimalization and that wasn't our priority so we let that aside. 
Now the next logical thing to do is to find an API that could do all this. Azure actually has a service which provides Computer Vision. Since all the other services we use are all on the Azure cloud platform we thought this would be easy to implement since it can also make use of the **BLOB** storage containers.

After some testing and playing around with the API we found out the service provided can do alot of things but not growth analysis. It's functions are more like scanning online content for bad things, picking out certain images that stand out from others and so on. We looked in to some other alternatives like Google's computer Vision API and Clarifai but they all didn't give have that kind of image analysis.

#### Idea #2:
After realising that popular Computer vision API solutions don't give us what we needed we had to dig deeper. We found a tool called [PlantCV](https://plantcv.danforthcenter.org/) which builds upon [OpenCV](https://opencv.org/). From the site "PlantCV is an imaging processing package specific for plants that is built upon open-source software platforms OpenCV, NumPy, and MatPlotLib". 

![img](https://github.com/AP-Elektronica-ICT/iot18-LF1/blob/master/doc/img/PlantCV1.JPG)

One possible issue here was the following: "The initial releases of PlantCV have been designed for processing images from visible spectrum cameras **('VIS')**, near-infrared cameras **('NIR')**, and excitation imaging fluorometers". However we did not own any of these and we would be taking the pictures with a normal PiCam as discussed above. With some more reading we found out it wouldn't be that big of an issue for the things we wanted to do with it, so we continued and tried installing it.
Now the installation process is where the second problem occured. PlantCV isn't an API like Azure's Computer Vision API so the software has to run somewhere else. In our project we use 2 Raspberry Pi's, one as a central controller for our entire 'Leave-It', and the other one for taking pictures with the PiCam. Our idea was to let the software run on the Raspberry Pi used for taking pictures since it didn't do anything other than that. This would be a great idea since the Pi's processing power wasn't used anyways. But after hours and hours of trying to find compatible versions for each of the software libraries used we just didn't manage to get through all of the build errors.
So we decided to stop investing any more time into it because we had still plenty of other things to do. 
In conclusion I wouldn't reccomend trying this out unless you are very experienced in system management on a Raspberry Pi or it's your main goal and you are ready to invest alot of time in it.

#### Idea #3
The last thing we tried was writing our own Python script using OpenCV.

![img](https://github.com/AP-Elektronica-ICT/iot18-LF1/blob/master/doc/img/OpenCV1.JPG)

Although the script above doesn't directly measure the growth of a plant, it does analyse **colors**. Our idea here was to measure a plant's growth with the amount of color inside an image. We made a solid white background for our plants with the PiCam set up in a way it would only see the plant and the background. The script will filter out a range of colors. Obviously we let it filter out the white. 
But the process only succeeded with very abstract colors only and it never processed any of the pictures taken with our own PiCam.


## Conclusion
After struggling with plant growth analysis for quite some time now we did get a clearer view on how we **COULD** and **WOULD** make this work. A big problem is that all available software for this kind of image processing is poorly documented and it has a very steep learning curve. We think that our last idea was actually not that bad and if we had more time we could make something out of it. Only then it should be a project on it's own.
