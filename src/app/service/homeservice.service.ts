import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

 private _url="http://localhost:8080/"
  private lg="http://localhost:8080/check/";// Login
  //seller
  private s_sellerinsert="http://localhost:8080/sellsignUp"//insert data into seller table
  private s_lg="http://localhost:8080/scheck"//login
//seller home data
private homeform="http://localhost:8080/homedata"//innerdata insert
private homegetdata="http://localhost:8080/homeget"//getting houses data
private homedelete="http://localhost:8080/delete/"//delete data of house
private homeupdate="http://localhost:8080/homeupdate"// update home data

  constructor( private _http:HttpClient) { 
  }
  //INSERING THE DATA signup
  public addUser(DATA):Observable<any>
  {
    return this._http.post(`${this._url}signUp`,DATA);
  }
  //for login
  public checkSeller(email,password):Observable<any>
  {
    return this._http.get(`${this._url}checkSeller/${email}/${password}`,{responseType:"text"})
  }
  public checkBuyer(email,password):Observable<any>
  {
    return this._http.get(`${this._url}checkBuyer/${email}/${+password}`,{responseType:"text"})
  }

  public getSellerByEmail(email):Observable<any>{
    return this._http.get(`${this._url}getSellerByEmail/${email}`)
  }

  // Seller methods
//insert method
  public selleraddUser(DATA):Observable<any>
  {
    return this._http.post(this.s_sellerinsert,DATA);
  }
  //for login seller
  public s_check(email,password):Observable<any>
  {
    return this._http.get(this.s_lg+email+"/"+password,{responseType:"text"})
  }

  //home data
    //INSERING THE DATA
    public addhouse(DATA):Observable<any>
    {
      return this._http.post(this.homeform,DATA);
    }
    //getting home data
    public houseGet():Observable<any>
    {
      return this._http.get(this.homegetdata);
   
    }
      //deleting the data in home
  public h_delete(mail):Observable<any>
  {
    return this._http.delete(this.homedelete+mail,{responseType:'text'});
  }
  //update
  public homeupdatedata(data):Observable<any>
  {
    return this._http.put(this.homeupdate,data)
  }
}
