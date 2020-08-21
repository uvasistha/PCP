package com.college.manager;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name ="Teacher")
public class Teacher {
    @Id
    @Column(name = "formTeacherID")
    String formTeacherID;

    @Column(name = "formTeacherName")
    String formTeacherName;

    @Column(name = "formTeacherContact")
    String formTeacherContact;

    @Column(name = "formTotalSalary")
    String formTotalSalary;

    @Column(name = "formSalaryDue")
    String formSalaryDue ;

    @Column(name = "formSalaryPaid")
    String formSalaryPaid ;
}
