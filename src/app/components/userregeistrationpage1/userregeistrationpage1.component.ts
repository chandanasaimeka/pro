import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-userregeistrationpage1',
  templateUrl: './userregeistrationpage1.component.html',
  styleUrls: ['./userregeistrationpage1.component.css']
})
export class Userregeistrationpage1Component {
  data: any;
  title;
  constructor(private _userService:ProductsService,private _formBuilder:FormBuilder)
  {

  }
  ngOnInit()
  {
    this._userService.getproducts().subscribe(
    (response)=>{
    console.log(response.products[3].category)
    this.data=response.products[3].category;
    this.registrationForm.patchValue({
    userName:this.data
})
  }
    )
  }
// registrationForm=new FormGroup(
//   {
//     userName :new FormControl('chadana',[Validators.required,]),
//     Password :new FormControl(),
//     cpassword :new FormControl(),
//     city:new FormControl(),
//     state:new FormControl(),
//     pincode:new FormControl(),
//   }
// )
// }
registrationForm=this._formBuilder.group(
  {
    userName:['',[Validators.required,Validators.minLength(5)]],
    Password:['',[Validators.required,Validators.minLength(11)]],
    cpassword:[],
    city:[],
    state:[],
    pincode:[],
  }
)
postData()
{
  console.log(this.registrationForm.value)
  this._userService.addUser(this.registrationForm.value).subscribe(
    (res) => {
      console.log(res);
    }
  )

}
get userName(){
 return  this.registrationForm.get("userName")
}
get Password(){
  return  this.registrationForm.get("Password")
 }
}
