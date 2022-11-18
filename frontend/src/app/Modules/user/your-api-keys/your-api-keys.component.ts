import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-api-keys',
  templateUrl: './your-api-keys.component.html',
  styleUrls: ['./your-api-keys.component.css']
})
export class YourApiKeysComponent implements OnInit {
  dynamicArray=[];
  newDynamic:any;

  constructor() { }

  ngOnInit(): void {
  }
  // addRow(){
  //   this.dynamicArray.push({name:'',teamMember:'',apiKey:'',active:'',dateUpdated:'',lastUsed:'',generateNewKey:''})
  // }

}
