import { Component, OnInit, Input } from '@angular/core';
import { LabFarm } from 'src/models/LabFarm';
import { LabfarmService } from 'src/providers/labfarm/labfarm.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/providers/authentication/authentication.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    private serverError: boolean = false;
    private userLabFarms: LabFarm[];

    constructor(private labfarmService: LabfarmService) { 
        this.labfarmService.getUserLabFarms().subscribe(data => {
            this.userLabFarms = data;
        }, error => {
            this.serverError = true;
            console.log(error);
        });

    }



    ngOnInit() {
    }

}
