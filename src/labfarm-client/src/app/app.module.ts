/* MODULES */
import { MatButtonModule, MatCheckboxModule, MatSliderModule, MatDialogModule } from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerticalTimelineModule } from 'angular-vertical-timeline';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxGalleryModule } from 'ngx-gallery';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

/* 3RD PARTY LIBRARIES */
import { UiSwitchModule } from 'ngx-toggle-switch';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import 'hammerjs';

/* SERVICES */
import { AuthenticationService } from 'src/providers/authentication/authentication.service';
import { NotificationsService } from 'src/providers/notifications/notifications.service';
import { LabfarmConfigService } from 'src/providers/labfarm-config/labfarm-config.service';
import { InterceptorService } from 'src/providers/interceptor/interceptor.service';
import { LabfarmService } from 'src/providers/labfarm/labfarm.service';

/* COMPONENTS */
import { EditLabfarmComponent, DeleteDialog } from '../pages//edit-labfarm/edit-labfarm.component';
import { PictureThumbnailComponent } from '../components/picture-thumbnail/picture-thumbnail.component';
import { LabFarmOverviewComponent } from '../components/lab-farm-overview/lab-farm-overview.component';
import { PictureTimelineComponent } from '../components/picture-timeline/picture-timeline.component';
import { PicturePreviewComponent } from '../components/picture-preview/picture-preview.component';
import { PictureGalleryComponent } from '../components/picture-gallery/picture-gallery.component';
import { NotificationComponent } from '../components/notification/notification.component';
import { SensorGraphComponent } from '../components/sensor-graph/sensor-graph.component';
import { LfNavbarComponent } from '../components/lf-navbar/lf-navbar.component';
import { LoadingComponent } from '../components/loading/loading.component';
import { ErrorComponent } from '../components/error/error.component';

/* PAGES */
import { PictureviewerComponent } from '../pages/pictureviewer/pictureviewer.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { NewLabfarmComponent } from '../pages/new-labfarm/new-labfarm.component';
import { CallbackComponent } from '../pages/callback/callback.component';
import { OptionsComponent } from '../pages/options/options.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { HomeComponent } from '../pages/home/home.component';
import { FarmComponent } from '../pages/farm/farm.component';









@NgModule({
    declarations: [
        AppComponent,
        LfNavbarComponent,
        HomeComponent,
        FarmComponent,
        OptionsComponent,
        PageNotFoundComponent,
        LabFarmOverviewComponent,
        SensorGraphComponent,
        ErrorComponent,
        LoadingComponent,
        NewLabfarmComponent,
        EditLabfarmComponent,
        DeleteDialog,
        PictureviewerComponent,
        PictureGalleryComponent,
        PictureTimelineComponent,
        CallbackComponent,
        PictureThumbnailComponent,
        PicturePreviewComponent,
        ProfileComponent,
        NotificationComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'farm/:id', component: FarmComponent },
            { path: 'farm/:id/edit', component: EditLabfarmComponent },
            { path: 'options', component: OptionsComponent },
            { path: 'pictureviewer', component: PictureviewerComponent },
            { path: 'callback', component: CallbackComponent },
            { path: 'new', component: NewLabfarmComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'test', component: PictureTimelineComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: "**", component: PageNotFoundComponent }
        ], { useHash: false }),
        BrowserModule,
        UiSwitchModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSliderModule,
        HttpClientModule,
        NgbModule,
        MatDialogModule,
        NgxGalleryModule,
        VerticalTimelineModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        AngularDateTimePickerModule,
        ToastrModule.forRoot() // ToastrModule added
    ],
    providers: [
        LabfarmService,
        CookieService,
        AuthenticationService,
        NotificationsService,
        InterceptorService,
        LabfarmConfigService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
        }
    ],
    entryComponents: [
        DeleteDialog
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
