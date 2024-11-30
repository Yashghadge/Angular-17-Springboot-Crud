package com.stcompany.services;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.stcompany.models.Employee;
import com.stcompany.repositories.EmployeeRepository;
import com.stcompany.responsewrappers.EmployeeResponseWrapper;

@Service
public class EmployeeService {
   @Autowired
   EmployeeRepository employeeRepository;
   
   EmployeeResponseWrapper erw = new EmployeeResponseWrapper();
   
   public List<Employee> GetEmployees() {
	return employeeRepository.findAll();
}
   
   
   public ResponseEntity<?> GetAllEmployees() {
	 Iterable<Employee> data = employeeRepository.findAll();
	  Iterator<Employee>  empList =data.iterator();
	  if(empList.hasNext()) {
		  erw.setMessage("ListOf Employees");
		  erw.setData(empList);
		  return new ResponseEntity<>(erw, HttpStatus.FOUND
				  );
	  }else {
		   throw new ResponseStatusException(HttpStatus.NOT_FOUND);
	  }
  }
   
   public ResponseEntity<?> addEmployee(Employee employee) {
	Employee emp = employeeRepository.save(employee);
	if (emp==null) {
		throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
	} else {
		 erw.setMessage("Employee Added");
		  erw.setData(emp);
		  return new ResponseEntity<>(erw, HttpStatus.ACCEPTED);
	}
  }
   
   
	public Employee GetEmployeeById(long id) {
		return employeeRepository.findById(id).orElseThrow(() -> {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No employee found with given  id " + id);
		});
	}
     
   
   
	public void deleteEmpById(long id) {
		employeeRepository.deleteById(id);
	}
	
	public ResponseEntity<?> updateEmpById(long id,Employee employee) {

		Employee getEmp = employeeRepository.findById(id).orElseThrow(
				()->{
					throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No employee found with given  id "+id);
				});
		employee.setId(id);
		Employee updateEmp = employeeRepository.save(employee);
		erw.setMessage("Updated employee successfully with id "+id);
		erw.setData(updateEmp);
		return new ResponseEntity<>(erw, HttpStatus.OK);
	}
   
}
