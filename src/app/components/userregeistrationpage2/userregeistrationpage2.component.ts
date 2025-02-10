import { Component } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-userregeistrationpage2',
  templateUrl: './userregeistrationpage2.component.html',
  styleUrls: ['./userregeistrationpage2.component.css']
})
export class Userregeistrationpage2Component {
  title: any;
  constructor(private _userService:ProductsService)
  {

  }
ngOnInit()
  {
  this._userService.getproducts().subscribe(
    (res)=>
    {
       console.log(res.products[0].title);
      this.title=res.products[0].title
    }
  )
  }
  dataSubmit(formData)
  {
    console.log(formData.value);
    this._userService.addUser(formData.value).subscribe(
      (res)=>{
        console.log(res);
      }
    )
  }
}
