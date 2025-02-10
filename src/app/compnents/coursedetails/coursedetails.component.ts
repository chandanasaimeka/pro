import { Component } from '@angular/core';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent {
  courses=[
    {roll:21,name:"chandana",sec:'A'},
    {roll:22,name:"sai",sec:'A'},
    {roll:23,name:"meka",sec:'b'}
  ]
  redirectedToURL(c)
  {
    console.log(c)
  }
}
