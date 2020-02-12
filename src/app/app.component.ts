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
    {headerName : "Id", field : "id",sortable : true, filter : true},
    {headerName : "First Name", field : "first_name",sortable : true, filter : true},
    {headerName : "Last Name", field : "last_name",sortable : true, filter : true},
    {headerName : "Email", field : "email",sortable : true, filter : true},
    {headerName : "Gender", field : "gender",sortable : true, filter : true},
    {headerName : "Ip address", field : "ip_address",sortable : true, filter : true}
  ]

  rowData : any;

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.rowData = this.http.get("https://storage.googleapis.com/static.aoni.io/demo/user.json")
  }
  
}
