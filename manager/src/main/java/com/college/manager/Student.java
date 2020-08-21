package com.college.manager;

import com.fasterxml.jackson.annotation.JsonInclude;
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
@JsonInclude(JsonInclude.Include.NON_NULL)
@Entity
@Table(name ="Student")
public class Student {
    @Id
    @Column(name = "formRoll")
    String formRoll ;

    @Column(name = "formName")
    String formName ;

    @Column(name = "formClass")
    String formClass ;

    @Column(name = "formCourse")
    String formCourse;

    @Column(name = "formSemest")
    String formSemest;

    @Column(name = "formContact")
    String formContact;

    @Column(name = "formAddress")
    String formAddress;

    @Column(name = "formFeesTotal")
    String formFeesTotal;

    @Column(name = "formFeesPaid")
    String formFeesPaid;

    @Column(name = "formFeesDue")
    String formFeesDue;
}
