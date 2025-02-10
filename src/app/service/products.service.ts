import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _url="https://dummyjson.com/products/"
  save_url=""//server url

  constructor(private _http:HttpClient) { }
  public getproducts():Observable<any>
 {
   return this._http.get(this._url);

 }
 public deleteProduct(pid):Observable<any>
{
  return this._http.delete(this._url+pid);
}
public addUser(formData):Observable<any>
{
  return this._http.post(this.save_url,formData);
}
public getproductsusingpromise():Promise<any>
{
 // return this._http.get(this._url).toPromise();
 return firstValueFrom(this._http.get(this._url));
}
}
