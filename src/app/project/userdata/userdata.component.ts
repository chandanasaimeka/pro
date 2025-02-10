import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeserviceService } from 'src/app/service/homeservice.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent {
 
constructor(private _formBuilder:FormBuilder,private _service:HomeserviceService,private _router:Router)
{
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


submit1()
{
  console.log(this.homeData.value);
    this._service.addhouse(this.homeData.value).subscribe(
      (res)=>
      {
        console.log(res);
        alert("Successfully inserted")
        this._router.navigateByUrl("['/seller/:']");
      }
    )
}






//for table
// ngOnInit()
// {
//   this._service.getHomeData().subscribe(
//     (data)=>{
//       this.get=data;
//       console.log(this.get)
//     }
//   )


//   this._service.sgetHomeData().subscribe(
//     (data)=>{
//       this.sget=data;
//       console.log(this.sget)
//     }
//   )
// }
// deleteDt(email)
// {
// console.log(email);
// this._service.deleteData(email).subscribe(
//   (res)=>
//   {
//     if(res){
//       alert("Deleted   successfull")
//       this.ngOnInit()
//     }else{
//       alert("Deleted  failed")
//     }
    

    
//   }
// )
// }

// //UPDATE METHOD
// update()
// {
// this._service.updatedata(this.registrationFrom.value).subscribe(
//   (res)=>
//   {
//       console.log(res);
//       if(res)
//       {
//         alert("Successfully Updated")
//       this.ngOnInit()
//       }
//       else{
//         alert("Not Successfully Updated")
//       }
//   }
// )
// }

// //to get data form table to form
// passData(row) {
//   console.log(row);
//   this.registrationFrom.patchValue({
//     'fname': row.fname,
//     'lname':row.lname,
//     'email':row.email,
//     'mobile':row.mobile,
//     'username':row.username,
//     'password':row.password
//   })
 
// }
}
