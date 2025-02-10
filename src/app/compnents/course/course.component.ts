import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
course=[
  {roll:21,name:"chandana",sec:'A'},
  {roll:22,name:"sai",sec:'A'},
  {roll:23,name:"meka",sec:'b'}
]
}
