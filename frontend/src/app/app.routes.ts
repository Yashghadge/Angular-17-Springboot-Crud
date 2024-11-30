import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

export const routes: Routes = [
  {path:'',redirectTo:'employee-list',pathMatch:'full'},

  {path:'employee-list',component:EmployeeListComponent},
  {path:'add-employee',component:AddEmployeeComponent},
  {path:'update-employee/:id',component:UpdateEmployeeComponent}
];
