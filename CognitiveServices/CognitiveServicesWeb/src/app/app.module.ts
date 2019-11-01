import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AngularResizedEventModule } from 'angular-resize-event';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaceRecognitionComponent } from './face-recognition/face-recognition.component';
import { MatButtonModule } from '@angular/material/button';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
import { FaceApiService } from './services/face-api.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';

@NgModule({
   declarations: [
      AppComponent,
      NavMenuComponent,
      HomeComponent,
      FaceRecognitionComponent,
      DragAndDropDirective,
      SpinnerComponent
   ],
   imports: [
      AngularResizedEventModule,
      BrowserAnimationsModule,
      BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      HttpClientModule,
      FormsModule,
      ApiAuthorizationModule,
      MatButtonModule,
      MatIconModule,
      RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'face', component: FaceRecognitionComponent, pathMatch: 'full', canActivate: [AuthorizeGuard] }
    ])
  ],
  providers: [
    FaceApiService,
    SpinnerService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
