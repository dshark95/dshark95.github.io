import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = true;

  constructor(private router:Router){

  }

  // navigate(){
  //   this.router.navigate(['../tools/calculator']);
  // }
}
