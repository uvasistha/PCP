package com.college.manager;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@org.springframework.stereotype.Repository
public interface BookRepository extends CrudRepository<Book, String> {
    //Table,column name all should be domain values

    @Modifying
    @Transactional
    @Query("update Book u set u.formStudentId = :student, u.formIssuedate = :date where u.formbookID = :id")
    void updateBook( String id,  String student,  String date);


}
