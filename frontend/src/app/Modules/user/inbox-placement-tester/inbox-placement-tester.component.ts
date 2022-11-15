import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox-placement-tester',
  templateUrl: './inbox-placement-tester.component.html',
  styleUrls: ['./inbox-placement-tester.component.css']
})
export class InboxPlacementTesterComponent implements OnInit {
  toggled:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  showSteps(){
    this.toggled=!this.toggled
  }

}
