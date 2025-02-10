import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  a = "chandana"
  c = "prabhas"
  ngOnInit(){
//     let  p = new Promise((resolve,reject) =>
//   {
//       console.log("This is promise");
//       resolve("this is success response");
//       resolve("this is success response1");
//       resolve("this is success response2");
//       reject("This is  failure response");
//   })
// p.then(
//   (s) => {
//     console.log("success");
//     console.log(s)
//   },
//   (f) => {
//     console.log("failure")
//     console.log(f);
//   }
// )
let o=new Observable((response)=>
{
  console.log("this is observable")
  response.next("Thhis is observable responsce 1")
  response.next("Thhis is observable responsce 2")
  response.next("Thhis is observable responsce 3")
 
  response.next("Thhis is observable responsce 4")
  response.next("Thhis is observable responsce 5")
  response.next("Thhis is observable responsce 6")
  response.complete();
  response.error("this is error")
  response.next("Thhis is observable responsce 7")
});
o.subscribe(
  (s)=>
  {
    console.log(1);
    console.log(s);
  },
  (f)=>
  {
    console.log(2);
    console.log(f);
  },
  ()=>
  {
    console.log("complete")
  }
);
  
}

}
