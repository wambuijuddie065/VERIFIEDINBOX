import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  __URL:string = ""

  constructor(private router: Router) { 
  
   
  }

  ngOnInit(): void {
 
  }
 

}
