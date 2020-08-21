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
@Table(name ="Book")
public class Book {
    @Id
    @Column(name = "formbookID")
   String formbookID;
    @Column(name = "formAuthor")
   String formAuthor;
    @Column(name = "formbookName")
   String formbookName;
    @Column(name = "formStudentId")
   String formStudentId;
    @Column(name = "formIssuedate")
   String formIssuedate ;
}
