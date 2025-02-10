import { Component } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent {
  n="chandana"
  getMyName()
  {
    this.n="sai"
  }
}
