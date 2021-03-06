package com.college.manager;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@org.springframework.stereotype.Repository
public interface StudentRepository extends CrudRepository<Student, String> {
    //Table,column name all should be domain values

    @Modifying
    @Transactional
    @Query("update Student u set u.formContact = :contact, u.formSemest = :sem where u.formRoll = :id")
     void updateUser( String id,  String contact,  String sem);

    @Modifying
    @Transactional
    @Query("update Student u set u.formFeesPaid = :feespaid, u.formFeesDue = :feesdue where u.formRoll = :id")
     void editUser( String id, String feespaid, String feesdue);

//    @Modifying
//    @Query("update User u set u.stock_list = :stock_list, u.balance = :balance, u.profit = :profit, u.no_of_stock = :no_of_stock where u.id = :id")
//    void updateUser(String id, String stock_list, String balance, String profit, String no_of_stock);
//
//    @Modifying
//    @Query("update User u set u.email= :email, u.mobile= :mobile, u.name= :name, u.premium_customer= :premium_customer, u.password= :password where u.id = :id")
//    void editUser(String id, String email, String mobile, String name, String premium_customer, String password);

}
