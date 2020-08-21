package com.college.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/managerapp")
public class Controller {

    @Autowired
    Handler handler;

    @Autowired
    ObjectToJson objectToJson;

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(method = RequestMethod.GET, path = "/get/user/{id}")
    public HttpEntity<String> getUser(@PathVariable String id){
        return new HttpEntity<String>(objectToJson.convert(handler.getUser(id)));
    }

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(method = RequestMethod.PUT, path = "/save/user")
    public HttpEntity<String> saveUser(@RequestBody Student user){
        return new HttpEntity<String>(objectToJson.convert(handler.saveUser(user)));
    }

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(method = RequestMethod.PUT, path = "/update/user/{id}/{contact}/{sem}")
    public HttpEntity<String> updateUser(@PathVariable String id,@PathVariable String contact,@PathVariable String sem){
        return new HttpEntity<String>(objectToJson.convert(handler.updateUser(id,contact,sem)));
    }

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(method = RequestMethod.PUT, path = "/update/finance/{id}/{feespaid}/{feesdue}")
    public HttpEntity<String> editUser(@PathVariable String id,@PathVariable String feespaid,@PathVariable String feesdue){
        return new HttpEntity<String>(objectToJson.convert(handler.editUser(id,feespaid,feesdue)));
    }


    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(method = RequestMethod.GET, path = "/get/book/{id}")
    public HttpEntity<String> getBook(@PathVariable String id){
        return new HttpEntity<String>(objectToJson.convert(handler.getBook(id)));
    }

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(method = RequestMethod.PUT, path = "/save/book")
    public HttpEntity<String> saveBook(@RequestBody Book user){
        return new HttpEntity<String>(objectToJson.convert(handler.saveBook(user)));
    }

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(method = RequestMethod.PUT, path = "/update/book/{id}/{student}/{date}")
    public HttpEntity<String> updateBook(@PathVariable String id,@PathVariable String student,@PathVariable String date){
        return new HttpEntity<String>(objectToJson.convert(handler.updateBook(id,student,date)));
    }

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(method = RequestMethod.GET, path = "/get/teacher/{id}")
    public HttpEntity<String> getTeacher(@PathVariable String id){
        return new HttpEntity<String>(objectToJson.convert(handler.getTeacher(id)));
    }

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(method = RequestMethod.PUT, path = "/save/teacher")
    public HttpEntity<String> saveBook(@RequestBody Teacher user){
        return new HttpEntity<String>(objectToJson.convert(handler.saveTeacher(user)));
    }

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(method = RequestMethod.PUT, path = "/update/teacher/{id}/{salarydue}/{salarypaid}")
    public HttpEntity<String> updateTeacher(@PathVariable String id,@PathVariable String salarydue,@PathVariable String salarypaid){
        return new HttpEntity<String>(objectToJson.convert(handler.updateTeacher(id,salarydue,salarypaid)));
    }
}