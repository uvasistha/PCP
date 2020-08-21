package com.college.manager;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class Handler {

    @Autowired
    StudentRepository studentRepository;
    @Autowired
    BookRepository bookRepository;
    @Autowired
    TeacherRepository teacherRepository;

    public Student getUser(String studentId){
        if(studentRepository.existsById(studentId))
        return studentRepository.findById(studentId).get();
        return null;
    }

    public String saveUser(Student student){
        String response ="Success";
        try{
        studentRepository.save(student);}
        catch (Exception e) {
            response="Fail!! Please Try Again";
        }
        return response;
    }

    public String updateUser( String id,  String contact,  String sem){
        String response ="Success";
        try{
            studentRepository.updateUser(id,contact,sem);}
        catch (Exception e) {
            e.printStackTrace();
            response="Fail!! Please Try Again";
        }
        return response;
    }

    public String editUser( String id, String feespaid, String feesdue){
        String response ="Success";
        try{
            studentRepository.editUser(id,feespaid,feesdue);}
        catch (Exception e) {
            response="Fail!! Please Try Again";
        }
        return response;
    }


    public Book getBook(String bookID){
        if(bookRepository.existsById(bookID))
            return bookRepository.findById(bookID).get();
        return null;
    }

    public String saveBook(Book book){
        String response ="Success";
        try{
            bookRepository.save(book);}
        catch (Exception e) {
            response="Fail!! Please Try Again";
        }
        return response;
    }

    public String updateBook( String id,  String student,  String date){
        String response ="Success";
        try{
            bookRepository.updateBook(id,student,date);}
        catch (Exception e) {
            e.printStackTrace();
            response="Fail!! Please Try Again";
        }
        return response;
    }


    public Teacher getTeacher(String teacherID){
        if(teacherRepository.existsById(teacherID))
            return teacherRepository.findById(teacherID).get();
        return null;
    }

    public String saveTeacher(Teacher teacher){
        String response ="Success";
        teacher.setFormSalaryDue("None");
        teacher.setFormSalaryPaid("None");
        try{
            teacherRepository.save(teacher);}
        catch (Exception e) {
            response="Fail!! Please Try Again";
        }
        return response;
    }

    public String updateTeacher( String id,  String salarydue,  String salarypaid){
        String response ="Success";
        try{
            teacherRepository.updateTeacher(id,salarydue,salarypaid);}
        catch (Exception e) {
            e.printStackTrace();
            response="Fail!! Please Try Again";
        }
        return response;
    }
}
