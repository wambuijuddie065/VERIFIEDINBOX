import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  menuVisible:boolean=false

  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu(){
    this.menuVisible=!this.toggleMenu
  }

}
