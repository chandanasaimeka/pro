import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { MainComponent } from './components/main/main.component';
import { CourseComponent } from './compnents/course/course.component';
import { CoursedetailsComponent } from './compnents/coursedetails/coursedetails.component';
import { SelectedCourseDetailsComponent } from './compnents/selected-course-details/selected-course-details.component';
import { ProductsComponent } from './components/products/products.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StringinterpolationComponent } from './components/stringinterpolation/stringinterpolation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/modules/angular-material/angular-material.module';
import { Userregeistrationpage1Component } from './components/userregeistrationpage1/userregeistrationpage1.component';
import { Userregeistrationpage2Component } from './components/userregeistrationpage2/userregeistrationpage2.component';
import { DatabindingComponent } from './component/databinding/databinding.component';
import { PipesComponent } from './component/pipes/pipes.component';
import { SquarePipe } from './pipe/square.pipe';
import { ChangeInterceptor } from './interceptors/change.interceptor';
import { FormComponent } from './project/form/form.component';
import { HomeapplicationComponent } from './project/homeapplication/homeapplication.component';
import { MainhomepageComponent } from './project/mainhomepage/mainhomepage.component';
import { InnerpageComponent } from './project/innerpage/innerpage.component';
import { UserdataComponent } from './project/userdata/userdata.component';
import { UpdateformComponent } from './project/updateform/updateform.component';
import { Main1Component } from './project/main1/main1.component';
import { JoshnaComponent } from './chandana/joshna/joshna.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    CourseComponent,
    CoursedetailsComponent,
    SelectedCourseDetailsComponent,
    ProductsComponent,
    StringinterpolationComponent,
    Userregeistrationpage1Component,
    Userregeistrationpage2Component,
    DatabindingComponent,
    PipesComponent,
    SquarePipe,
    FormComponent,
    HomeapplicationComponent,
    MainhomepageComponent,
    InnerpageComponent,
    UserdataComponent,
    UpdateformComponent,
    Main1Component,
    JoshnaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,AngularMaterialModule,
    ReactiveFormsModule 
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:ChangeInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
