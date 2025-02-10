import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeserviceService } from 'src/app/service/homeservice.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent {
  get: any;
  email;
  fname: string;
  mobile: string;
  c: any;
  constructor(_route:ActivatedRoute,private _formBuilder:FormBuilder,private _service:HomeserviceService,private _router:Router)
  {
  }
  ngOnInit()
{
  this._service.houseGet().subscribe(
    (data)=>{
      this.get=data;
      console.log(this.get)
    }
  )
 
}
contactowner(email)
{
  this.email=email
}
}
