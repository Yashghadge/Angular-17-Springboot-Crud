package com.stcompany.models;

import java.util.Collection;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.AssertFalse.List;
import lombok.Data;

@Data
@Entity

public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String employeeName;
    @Column
    private String contactNumber;
    @Column
    private String address;
    
//   @Enumerated(EnumType.STRING)
//   private Gender employeeGender;
//   
//   @Column
//   private String employeeDepartment;
//   
//   @ElementCollection
//   private java.util.List<String> employeeSkills;
//    
//    public enum Gender{
//    	male,female;
//    }
    
//    public Collection<skills> name() {
//	  java
//	}
    
}

