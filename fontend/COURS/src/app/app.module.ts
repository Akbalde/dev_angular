import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }  from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStustentsComponent } from './student/add-stustents/add-stustents.component';
import { EditStustentsComponent } from './student/edit-stustents/edit-stustents.component';
import { DetailStustentsComponent } from './student/detail-stustents/detail-stustents.component';
import { StustentsListComponent } from './student/stustents-list/stustents-list.component';
import { RouterModule } from '@angular/router';
import {routes} from './app-routing.module';
import { StudentService } from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    AddStustentsComponent,
    EditStustentsComponent,
    DetailStustentsComponent,
    StustentsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
