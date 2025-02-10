import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeserviceService } from 'src/app/service/homeservice.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  selectoption=''
  constructor(private _formBuilder:FormBuilder,private userService:HomeserviceService, private _router:Router)
   
  {
    
  }
  onSelected(value:string):void
{
  this.selectoption=value;
  console.log(this.selectoption);
}

  registrationFrom= this._formBuilder.group({
    "fname":['', [Validators.required]],
    "lname":[],
    "email":[],
    "mobile":[],
    "username":[],
    "password":[] 

  })
  
  sellerFrom= this._formBuilder.group({
    "s_Fname":['', [Validators.required]],
    "s_LName":[],
    "s_Email":[],
    "s_Mobile":[],
    "s_Username":[],
    "s_Password":[] 

  })


  signUp()
  {
    this.userService.addUser(this.registrationFrom.value).subscribe(
      (res) => {
      console.log(res);
      alert("Successfully completed signup")
      this._router.navigate(['/web']);
     }
  )
  }
  
  sellersignUp()
  {
    console.log(this.sellerFrom.value);
    this.userService.selleraddUser(this.sellerFrom.value).subscribe(
      (res) => {
      console.log(res);
      alert("Successfully completed signup")
      this._router.navigate(['/web']);
     }
  )

    
  }

}
