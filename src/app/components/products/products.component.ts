import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title="chandana"
product: any;
un_sub=subscribeOn
  res: any;
constructor(private _productService:ProductsService)
{}
ngOnInit()
{
  this._productService.getproducts().subscribe((res)=>{   //using subscribe
      console.log(res);
      this.product=res.products;
      console.log(this.product);
    }
  )
//   this._productService.getproductsusingpromise().then((res)=>{ //using promise
//     console.log(res);
//     this.product=res.products;
//     console.log(this.product);
//   }
// )
}
public deleteProduct(pid)
{
  console.log(pid)
  this._productService.deleteProduct(pid).subscribe(
    (res)=>{
       console.log(res);
      this.res = res;
  // this.product=res.products;
  // console.log(this.product);
}
)
}
 }

 