package com.stcompany.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PutExchange;

import com.stcompany.models.Employee;
import com.stcompany.services.EmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api/employees")

public class EmployeeController {
  
	@Autowired
	EmployeeService employeeService;
	
	@GetMapping("")
	public List<Employee> GetEmployees(){
		return employeeService.GetEmployees();
	}
	
	@PostMapping("/add")
	 public ResponseEntity<?> addEmployee(@RequestBody Employee employee){
		 return employeeService.addEmployee(employee);
	 }
	
	@DeleteMapping("/{id}")
	 public void deleteEmpById( @PathVariable long id) {
		 employeeService.deleteEmpById(id);
	}
	
	@GetMapping("/{id}")
	public Employee GetEmployeeById(@PathVariable long id) {
		return employeeService.GetEmployeeById(id);
	}
	
	@PutExchange("/{id}")
	public ResponseEntity<?> updateEmpById(@PathVariable long id,@RequestBody Employee employee) {
		return employeeService.updateEmpById(id, employee);
	}
}
