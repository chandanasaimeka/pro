import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeserviceService } from 'src/app/service/homeservice.service';
@Component({
  selector: 'app-innerpage',
  templateUrl: './innerpage.component.html',
  styleUrls: ['./innerpage.component.css']
})
export class InnerpageComponent {
  get: any;
  email
  seller
  constructor(private _route:ActivatedRoute, private _formBuilder:FormBuilder,private _service:HomeserviceService,private _router:Router)
  {
    _route.paramMap.subscribe(params=>{
      this.email=params.get('email')
    })
  }
  homeData= this._formBuilder.group({
    "url":[],
    "mail":[],
     "type":[],
    "description":[],
     "sqft":[],
    "sqftprice":[],
     "gst":[],
   "price":[],
    "emi":[]
  
  })
  ngOnInit()
{
  this._service.getSellerByEmail(this.email).subscribe(res=>
   { this.seller=res
    console.log(this.seller)}
  )
  this._service.houseGet().subscribe(
    (data)=>{
      this.get=data;
    }
  )
 
}

homeDelete(mail)
{
console.log(mail);
this._service.h_delete(mail).subscribe(
  (res)=>
  {
    if(res){
      alert("Deleted   successfull")
      this.ngOnInit()
    }else{
      alert("Deleted  failed")
    }
  
})
}
update()
{
this._service.homeupdatedata(this.homeData.value).subscribe(
  (res)=>
  {
      console.log(res);
      if(res)
      {
        alert("Successfully Updated")
      this.ngOnInit()
      }
      else{
        alert("Not Successfully Updated")
      }
  }
)
}
passData(row) {
    console.log(row)
    this.homeData.patchValue({
      'url':row.url,
      'mail':row.mail,
      'type':row.type,
      'description':row.description,
      'sqft':row.sqft,
      'sqftprice':row.sqftprice,
      'gst':row.gst,
      'price':row.price,
      'emi':row.emi

    })
   
  }

}