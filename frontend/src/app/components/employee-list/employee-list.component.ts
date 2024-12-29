import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatGridListModule,MatButtonModule,MatCardModule,RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[]=[]
  notfoundUrl:string="assets/noData.jpg"
  constructor(private employeeService:EmployeeService,private router:Router,private toastr:ToastrService){}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
   this.employeeService.getEmployees().subscribe(
    (result)=>{this.employees=result;
      console.log(result);

    }
   )
  }

  updateEmployee(id:number){
    this.router.navigate([`update-employee`,id]);
   }

  deleteEmployee(id:number){
    console.log(id);
    this.employeeService.deleteEmployee(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.getAllEmployees();
        this.toastr.success("Employee with id "+id+" deleted successfully!")

      },
      error:(error:HttpErrorResponse)=>{
        console.log(error);
        this.toastr.error("Error try again later!")
      }
    });
  }

}
