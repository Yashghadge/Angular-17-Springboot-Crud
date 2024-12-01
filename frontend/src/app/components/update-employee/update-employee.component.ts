import { Employee } from './../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Route, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [MatDividerModule,MatFormFieldModule,MatInputModule,FormsModule,MatButtonModule,MatIconModule,RouterLink,ReactiveFormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.scss'
})
export class UpdateEmployeeComponent implements OnInit {
  employeeForm!:FormGroup
 employeeID!:number;

  ngOnInit(): void {
    this.employeeID=this.route.snapshot.params['id'];
    this.loadDetails(this.employeeID);
  }

  loadDetails(id:number){
    this.employeeService.getEmpById(id).subscribe({
      next: (employee) => {
        this.employeeForm.patchValue(employee); // Pre-fill the form
      },
      error: (error) => {
        console.error('Error fetching employee data:', error);
      }
    });
  }

  constructor(private employeeService:EmployeeService,private router:Router,private route :ActivatedRoute, private fb:FormBuilder,private toastr:ToastrService){
    this.employeeForm = fb.group({
      employeeName:['',Validators.required],
      contactNumber:['',Validators.required],
      address:['',Validators.required]


  })
  }

  onVaildpdate(){
    if (this.employeeForm.valid) {
      this.employeeService.updateEmployee(this.employeeID,this.employeeForm.value).subscribe({
        next: (data) => {
          console.log('Employee updated successfully:', data);
          this.router.navigate(['employee-list']);
          this.toastr.success('Employee updated successfully', 'Success');
        },
        error: (error) => {
          console.error('Error updating employee:', error);
          this.toastr.error('Error updating employee');
        }
      });
    } else {
      console.log('Form is invalid');
      this.toastr.error('Form is invalid');
    }
  }


}
