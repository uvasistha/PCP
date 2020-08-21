package com.college.manager;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@org.springframework.stereotype.Repository
public interface TeacherRepository extends CrudRepository<Teacher, String> {
    //Table,column name all should be domain values

    @Modifying
    @Transactional
    @Query("update Teacher u set u.formSalaryDue = :salarydue, u.formSalaryPaid = :salarypaid where u.formTeacherID = :id")
    void updateTeacher( String id,  String salarydue,  String salarypaid);


}
