import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wazimo';

  columnDefs = [
    {headerName : "Make", field : "make", sortable : true, filter : true},
    {headerName : "Model", field : "model", sortable : true, filter : true},
    {headerName : "Price", field : "price", sortable : true, filter : true}
  ]

  rowData : any;

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.rowData = this.rowData = this.http.get("https://api.myjson.com/bins/15psn9")
  }
  
}
