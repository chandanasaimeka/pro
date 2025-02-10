import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeserviceService } from 'src/app/service/homeservice.service';

@Component({
  selector: 'app-homeapplication',
  templateUrl: './homeapplication.component.html',
  styleUrls: ['./homeapplication.component.css']
})
export class HomeapplicationComponent {
selectoption='';
  constructor(private _formBuilder:FormBuilder,private userService:HomeserviceService, private _router:Router)
{

}
onSelected(value:string):void
{
  this.selectoption=value;
  console.log(this.selectoption);
}

sellerDetails =this._formBuilder.group({
  "email":[],
  "password":[],
  
})

buyerDetails =this._formBuilder.group({
  "email":[],
  "password":[]
})
checkSeller()
{
  console.log(this.sellerDetails.value)
  this.userService.checkSeller(this.sellerDetails.value.email,this.sellerDetails.value.password).subscribe(
  (res)=>
  {
    if(res==1)
    {
      alert("Logined Successfully")
      this._router.navigateByUrl('/seller/'+this.sellerDetails.value.email)
    }
    else
    {
      alert("Enter correct email and password")
    }
  }
  )

}

checkBuyer()
{
  this.userService.checkBuyer(this.buyerDetails.value.email,this.buyerDetails.value.password).subscribe(
    (res)=>
    {
      console.log(this.buyerDetails.value.email+this.buyerDetails.value.password);
      if(res==1)
      {
        alert("Logined Successfully")
        this._router.navigateByUrl('/buyer/'+this.buyerDetails.value.email)
      }
      else
      {
       
        alert("Enter correct email and password")
      }
    }
    )
}

}
