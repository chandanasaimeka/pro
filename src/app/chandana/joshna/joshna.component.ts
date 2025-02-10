import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { HomeserviceService } from 'src/app/service/homeservice.service';

@Component({
  selector: 'app-joshna',
  templateUrl: './joshna.component.html',
  styleUrls: ['./joshna.component.css']
})
export class JoshnaComponent 
{
  constructor(_home:HomeserviceService,_jo:JoshnaComponent)
  {
 
  }

}
