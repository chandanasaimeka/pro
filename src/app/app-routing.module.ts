import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './component/home/home.component';
import { CourseComponent } from './compnents/course/course.component';
import { CoursedetailsComponent } from './compnents/coursedetails/coursedetails.component';
import { SelectedCourseDetailsComponent } from './compnents/selected-course-details/selected-course-details.component';
import { ProductsComponent } from './components/products/products.component';
import { StringinterpolationComponent } from './components/stringinterpolation/stringinterpolation.component';
import { Userregeistrationpage1Component } from './components/userregeistrationpage1/userregeistrationpage1.component';
import { Userregeistrationpage2Component } from './components/userregeistrationpage2/userregeistrationpage2.component';
import { PipesComponent } from './component/pipes/pipes.component';
import { FormComponent } from './project/form/form.component';
import { HomeapplicationComponent } from './project/homeapplication/homeapplication.component';
import { MainhomepageComponent } from './project/mainhomepage/mainhomepage.component';
import { InnerpageComponent } from './project/innerpage/innerpage.component';
import { UserdataComponent } from './project/userdata/userdata.component';
import { UpdateformComponent } from './project/updateform/updateform.component';
import { Main1Component } from './project/main1/main1.component';
import { JoshnaComponent } from './chandana/joshna/joshna.component';

const routes: Routes = [
  {path:'', redirectTo:'/homemain',pathMatch:'full'},
  {path:' ',component:JoshnaComponent},
  {path:'main', component:MainComponent},
  {path:'home', component:HomeComponent},
  {path:'course',component:CourseComponent},
  {path:'course1',component:CoursedetailsComponent},
  {path:'product',component:ProductsComponent},
  {path:'course1/:roll',component:SelectedCourseDetailsComponent},
  {path:'registrationpage1',component:Userregeistrationpage1Component},
  {path:'registrationpage2',component:Userregeistrationpage2Component},
  {path:'pipes',component:PipesComponent},
  {path:'string',component:StringinterpolationComponent},
  {path:'homeweb',component:FormComponent},
  {path:'web',component:HomeapplicationComponent},
  {path:'homemain',component:MainhomepageComponent},
  {path:'seller/:email',component:InnerpageComponent},
  {path:'userdata',component:UserdataComponent},
  {path:'buyer/:email',component:UpdateformComponent},
  {path:'main1',component:Main1Component},
  {path:'jyo',component:JoshnaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
