import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AngularResizedEventModule } from 'angular-resize-event';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaceRecognitionComponent } from './face-recognition/face-recognition.component';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
import { FaceApiService } from './services/face-api.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';
import { FaceDetailModalComponent } from './face-detail-modal/face-detail-modal.component';

@NgModule({
   declarations: [
      AppComponent,
      NavMenuComponent,
      HomeComponent,
      FaceDetailModalComponent,
      FaceRecognitionComponent,
      DragAndDropDirective,
      SpinnerComponent
   ],
   entryComponents: [
      FaceDetailModalComponent
   ],
   imports: [
      AngularResizedEventModule,
      BrowserAnimationsModule,
      BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      DragDropModule,
      HttpClientModule,
      FormsModule,
      ApiAuthorizationModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatListModule,
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
