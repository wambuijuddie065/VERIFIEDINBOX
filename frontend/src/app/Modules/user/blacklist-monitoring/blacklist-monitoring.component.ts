import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blacklist-monitoring',
  templateUrl: './blacklist-monitoring.component.html',
  styleUrls: ['./blacklist-monitoring.component.css']
})
export class BlacklistMonitoringComponent implements OnInit {
   toggled:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  showSteps(){
    this.toggled=!this.toggled
  }

}
