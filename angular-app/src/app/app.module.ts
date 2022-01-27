import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './components/test1/test1.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { RequestIntercetionFilterService } from './services/request-intercetion-filter.service'

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    LoginComponent,
    LogoutComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:RequestIntercetionFilterService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
