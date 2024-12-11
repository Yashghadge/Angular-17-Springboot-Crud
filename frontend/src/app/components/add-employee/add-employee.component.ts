import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import { Employee } from '../../models/employee.model';
import {MatDividerModule} from '@angular/material/divider'
import { Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [MatDividerModule,MatFormFieldModule,MatInputModule,FormsModule,MatButtonModule,MatIconModule,RouterLink,ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {
  employee:Employee={
    id:0,
    employeeName:'',
    contactNumber:'',
    address:'',

    employeeGender:'',
    employeeDepartment:'',
    employeeSkills:''
  }
   employeeForm!:FormGroup;
  constructor(private employeeService:EmployeeService,private router:Router,private fb:FormBuilder,private toastr:ToastrService){
    this.employeeForm = fb.group({
      employeeName:['',Validators.required],
      contactNumber:['',Validators.required],
      address:['',Validators.required]


  })
  }

  // onVaildInputSave(){
  //   if (this.employeeForm.valid) {
  //     this.employeeService.addEmployee(this.employeeForm.value).subscribe(
  //       (data)=>{
  //         console.log(data);
  //         this.router.navigate(['/employee-list']);
  //       }
  //     )
  //   }
  //   }

  onVaildInputSave(): void {
    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employeeForm.value).subscribe({
        next: (data) => {
          console.log('Employee added successfully:', data);

          this.router.navigate(['/employee-list']);
          this.toastr.success('Employee added successfully', 'Success');
        },
        error: (error) => {
          console.error('Error adding employee:', error);
          this.toastr.error('Error adding employee:', error);
        }
      });
    } else {
      console.log('Form is invalid');
      this.toastr.error('Form is invalid');
    }
  }



  addEmployee(){
    this.employeeService.addEmployee(this.employee).subscribe(
      (result)=> {
        this.employee=result;
        this.router.navigate(['/employee-list']);
      }
    )
  }

}
