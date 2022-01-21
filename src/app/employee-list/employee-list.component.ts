import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees : Employee[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.employees=[
      {"id":1,
        "firstname":"boubekri",
        "lastname":"oussama",
        "emailId":"oboubekri@abb.ma"

      },{
        "id":2,
        "firstname":"rifi",
        "lastname":"adil",
        "emailId":"rifinio@diclick.com"

      }

    ];
  }

}
