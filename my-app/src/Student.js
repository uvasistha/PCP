import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Table, TableHead, TableRow, TableCell, TableContainer, Paper, TableBody } from '@material-ui/core';
class Student extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displaystudent :null,
            rollno: null,
            addtab: false,
            searchtab: false,
            updateTab: false,
            FessTab: false,
            sem: null,
            contact: null,
            fesspaid: null,
            feesdue: null,

            formRoll: null,
            formName: null,
            formClass: null,
            formCourse: null,
            formSemest: null,
            formContact: null,
            formAddress: null,
            formFeesTotal: null,
            formFeesPaid: null,
            formFeesDue: null,
        };

    }

    onrollNO(e) {
        this.setState({ rollno: e.target.value })
    }

    onSemester(e) {
        this.setState({ sem: e.target.value })
    }

    onContact(e) {
        this.setState({ contact: e.target.value })
    }

    onFeesPaid(e) {
        this.setState({ fesspaid: e.target.value })
    }

    onFeesDue(e) {
        this.setState({ feesdue: e.target.value })
    }

    onStudentAdd() {
        this.setState({
            addtab: true,
            searchtab: false,
            formRoll: null,
            formName: null,
            formClass: null,
            formCourse: null,
            formSemest: null,
            formContact: null,
            formAddress: null,
            formFeesTotal: null,
            formFeesPaid: null,
            formFeesDue: null,
        })
    }

    onSTudentSearch() {
        //CALL REST
        var url = 'http://localhost:5806/managerapp/get/user/'+ this.state.rollno
        fetch(url, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({displaystudent:data})
                console.log('Success:', data);
            })
            .catch((error) => {
                this.setState({displaystudent:null})
                console.error('Error:', error);
            });
        this.setState({ 
            addtab: false,
            searchtab: true
        })
    }

    onUpdateInformation() {
        this.setState({
            updateTab: true,
            FessTab: false,
            sem: null,
            contact: null,
        })
    }

    onUpdateFess() {
        this.setState({
            updateTab: false,
            FessTab: true,
            fesspaid: null,
            feesdue: null,
        })
    }

    onSaveStudentAdd() {
        //CALL REST

        var reqdata = {
            "formRoll": "",
            "formName": "",
            "formClass": "",
            "formCourse": "",
            "formSemest": "",
            "formContact": "",
            "formAddress": "",
            "formFeesTotal": "",
            "formFeesPaid": "",
            "formFeesDue": "",
        }
        reqdata.formRoll   = this.state.formRoll
        reqdata.formName   = this.state.formName
        reqdata.formClass   = this.state.formClass
        reqdata.formCourse   = this.state.formCourse
        reqdata.formSemest   = this.state.formSemest
        reqdata.formContact   = this.state.formContact
        reqdata.formAddress   = this.state.formAddress
        reqdata.formFeesTotal   = this.state.formFeesTotal
        reqdata.formFeesPaid   = this.state.formFeesPaid
        reqdata.formFeesDue   = this.state.formFeesDue
        fetch('http://localhost:5806/managerapp/save/user', {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqdata),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        this.setState({
            addtab: false,
        })
    }

    onSaveUpdateInformation() {
        //CALL REST
        var url = 'http://localhost:5806/managerapp/update/user/'+ this.state.rollno+'/'+this.state.contact+'/'+this.state.sem
        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                this.setState({displaystudent:null})
                console.error('Error:', error);
            });
        this.setState({
            updateTab: false,
        },()=>{this.onSTudentSearch()})
        //Refesh Info
        
    }

    onformRoll(e) {
        this.setState({ formRoll: e.target.value })
    }
    onformName(e) {
        this.setState({ formName: e.target.value })
    }
    onformClass(e) {
        this.setState({ formClass: e.target.value })
    }
    onformCourse(e) {
        this.setState({ formCourse: e.target.value })
    }
    onformSemest(e) {
        this.setState({ formSemest: e.target.value })
    }
    onformContact(e) {
        this.setState({ formContact: e.target.value })
    }
    onformAddress(e) {
        this.setState({ formAddress: e.target.value })
    }
    onformFeesTotal(e) {
        this.setState({ formFeesTotal: e.target.value })
    }
    onformFeesDue(e) {
        this.setState({ formFeesDue: e.target.value })
    }
    onformFeesPaid(e) {
        this.setState({ formFeesPaid: e.target.value })
    }

    onSaveFess() {
        //CALL REST
        var url = 'http://localhost:5806/managerapp/update/finance/'+ this.state.rollno+'/'+this.state.fesspaid+'/'+this.state.feesdue
        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                this.setState({displaystudent:null})
                console.error('Error:', error);
            });
        this.setState({
            FessTab: false,
        },()=>this.onSTudentSearch())
        //Refesh Info
        
    }

    render() {
        return (
            <div>
                <br />
                <center>
                    <b>Add Student : </b>
                    <Button variant="contained" color="primary" onClick={this.onStudentAdd.bind(this)}>
                        New Admission
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b>Search Student : </b>
                    <TextField size="small" label=" Enter Roll No." variant="outlined"
                        color="primary" value={this.state.rollno} onChange={this.onrollNO.bind(this)} />
                        &nbsp;
                    <Button variant="contained" color="primary" onClick={this.onSTudentSearch.bind(this)}>
                        Search
                    </Button>
                    <br /><br />
                    {
                        (this.state.addtab == true) ?
                            <div>
                                <td><u><h3>Admission Form </h3></u></td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td>
                                    <Button variant="contained" color="primary" onClick={this.onSaveStudentAdd.bind(this)}>
                                        Save Student
                                 </Button>
                                </td>
                                <br />

                                <tr>
                                    <td><b>Name </b></td>
                                    <TextField size="small" label=" Enter Name" variant="outlined"
                                        color="primary" value={this.state.formName} onChange={this.onformName.bind(this)} />
                               
                                    <td><b>Roll No</b></td>
                                    <TextField size="small" label=" Enter Roll No" variant="outlined"
                                        color="primary" value={this.state.formRoll} onChange={this.onformRoll.bind(this)} />
                                </tr>

                                <tr>
                                    <td><b>Class </b></td>
                                    <TextField size="small" label=" Enter Class" variant="outlined"
                                        color="primary" value={this.state.formClass} onChange={this.onformClass.bind(this)} />
                                
                                    <td><b>Course</b></td>
                                    <TextField size="small" label=" Enter Course" variant="outlined"
                                        color="primary" value={this.state.formCourse} onChange={this.onformCourse.bind(this)} />
                                </tr>

                                <tr>
                                    <td><b>Semester </b></td>
                                    <TextField size="small" label=" Enter Semester" variant="outlined"
                                        color="primary" value={this.state.formSemest} onChange={this.onformSemest.bind(this)} />
                                
                                    <td><b>Contact No</b></td>
                                    <TextField size="small" label=" Enter Contact" variant="outlined"
                                        color="primary" value={this.state.formContact} onChange={this.onformContact.bind(this)} />
                                </tr>

                                <tr>
                                    <td><b>Address </b></td>
                                    <TextField size="small" label=" Enter Address" variant="outlined"
                                        color="primary" value={this.state.formAddress} onChange={this.onformAddress.bind(this)} />
                             
                                    <td><b>Total  Fee </b></td>
                                    <TextField size="small" label=" Enter Total  Fee" variant="outlined"
                                        color="primary" value={this.state.formFeesTotal} onChange={this.onformFeesTotal.bind(this)} />
                                </tr>

                                <tr>
                                    <td><b>Fess Paid</b></td>
                                    <TextField size="small" label=" Enter Fees Paid" variant="outlined"
                                        color="primary" value={this.state.formFeesPaid} onChange={this.onformFeesPaid.bind(this)} />
                               
                                    <td><b>Fess Due </b></td>
                                    <TextField size="small" label=" Enter Fees Due" variant="outlined"
                                        color="primary" value={this.state.formFeesDue} onChange={this.onformFeesDue.bind(this)} />
                                </tr>
                            </div>
                            : null
                    }


                    {
                        (this.state.searchtab == true) ?
                            <div>
                                <TableContainer component={Paper}>
                                    <Table aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell ><b>Roll No </b> </TableCell>
                                                <TableCell ><b>Name  </b></TableCell>
                                                <TableCell ><b>Class </b> </TableCell>
                                                <TableCell ><b>Course </b> </TableCell>
                                                <TableCell ><b>Semester </b> </TableCell>
                                                <TableCell ><b>Contact No. </b> </TableCell>
                                                <TableCell ><b>Address </b> </TableCell>
                                                <TableCell ><b>Fees Total </b> </TableCell>
                                                <TableCell ><b>Fees Paid </b> </TableCell>
                                                <TableCell ><b>Fees Due </b> </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        
                                        {(this.state.displaystudent!=null) ?
                                        <TableBody>
                                            <TableRow>
                                                <TableCell ><b>{this.state.displaystudent.formRoll} </b> </TableCell>
                                                <TableCell >{this.state.displaystudent.formName}  </TableCell>
                                                <TableCell >{this.state.displaystudent.formClass}  </TableCell>
                                                <TableCell >{this.state.displaystudent.formCourse}  </TableCell>
                                                <TableCell >{this.state.displaystudent.formSemest}  </TableCell>
                                                <TableCell >{this.state.displaystudent.formContact}  </TableCell>
                                                <TableCell >{this.state.displaystudent.formAddress} </TableCell>
                                                <TableCell >{this.state.displaystudent.formFeesTotal} </TableCell>
                                                <TableCell >{this.state.displaystudent.formFeesPaid} </TableCell>
                                                <TableCell >{this.state.displaystudent.formFeesDue} </TableCell>
                                            </TableRow>
                                        </TableBody>
                                           :"No Record"
                                        }
                                        
                                    </Table>
                                </TableContainer>
                                <br />
                                        
                                {(this.state.displaystudent!=null) ?
                                <div>
                                <Button variant="contained" color="primary" onClick={this.onUpdateInformation.bind(this)}>
                                    Update Information
                                 </Button>
                                 &nbsp;&nbsp;&nbsp;  &nbsp;
                                  <Button variant="contained" color="primary" onClick={this.onUpdateFess.bind(this)}>
                                    Update Fess Status
                                 </Button>
                                 </div>
                                 :null}

                                {(this.state.updateTab == true)
                                    ? <div>
                                        <br />
                                        <TextField size="small" label=" Enter Contact No." variant="outlined"
                                            color="primary" value={this.state.contact} onChange={this.onContact.bind(this)} />
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <TextField size="small" label=" Enter Semester No." variant="outlined"
                                            color="primary" value={this.state.sem} onChange={this.onSemester.bind(this)} />
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <Button variant="contained" color="primary" onClick={this.onSaveUpdateInformation.bind(this)}>
                                            Save
                                 </Button>
                                    </div> : null}

                                {(this.state.FessTab == true)
                                    ? <div>
                                        <br />
                                        <TextField size="small" label=" Enter Fees Paid" variant="outlined"
                                            color="primary" value={this.state.fesspaid} onChange={this.onFeesPaid.bind(this)} />
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <TextField size="small" label=" Enter Fees Due." variant="outlined"
                                            color="primary" value={this.state.feesdue} onChange={this.onFeesDue.bind(this)} />
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <Button variant="contained" color="primary" onClick={this.onSaveFess.bind(this)}>
                                            Save
                                 </Button>
                                    </div> : null}

                            </div>
                            : null
                    }

                </center>
            </div>

        )
    }

}

export default Student;