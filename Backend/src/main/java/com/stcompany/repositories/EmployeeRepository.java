package com.stcompany.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stcompany.models.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
