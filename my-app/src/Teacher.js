import React from 'react';
import { TextField, Button, Table, TableHead, TableRow, TableCell, TableContainer, Paper, TableBody } from '@material-ui/core';
class Teacher extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayteacher: null,
            addtab: false,
            searchtab: false,
            teacherID: null,
            formTeacherID: null,
            formTeacherName: null,
            formTeacherContact: null,
            formTotalSalary: null,
            formSalaryDue: null,
            formSalaryPaid: null,
            updateTab: false,
        };

    }
    onTeacherAdd() {
        this.setState({
            addtab: true,
            searchtab: false,
            formTeacherName: null,
            formTeacherID:null,
            formTeacherContact: null,
            formTotalSalary: null,
        })
    }
    onteacherID(e) {
        this.setState({
            teacherID: e.target.value
        })
    }
    onTeacherSearch() {
        // CALL REST
        var url = 'http://localhost:5806/managerapp/get/teacher/' + this.state.teacherID
        fetch(url, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ displayteacher: data })
                console.log('Success:', data);
            })
            .catch((error) => {
                this.setState({ displayteacher: null })
                console.error('Error:', error);
            });
        this.setState({
            addtab: false,
            searchtab: true,
        })
    }
    onformTeacherName(e) {
        this.setState({
            formTeacherName: e.target.value
        })
    }
    onformTeacherID(e){
        this.setState({
            formTeacherID :e.target.value
        })
    }
    onformTeacherContact(e) {
        this.setState({
            formTeacherContact: e.target.value
        })
    }
    onformTotalSalary(e) {
        this.setState({
            formTotalSalary: e.target.value
        })
    }
    onSaveTeacherAdd() {
        //REST CALL
        var reqdata = {
            "formTeacherContact": "",
            "formTotalSalary": "",
            "formTeacherName": "",
            "formTeacherID":"",
        }
        reqdata.formTeacherContact = this.state.formTeacherContact
        reqdata.formTotalSalary = this.state.formTotalSalary
        reqdata.formTeacherName = this.state.formTeacherName
        reqdata.formTeacherID = this.state.formTeacherID

        fetch('http://localhost:5806/managerapp/save/teacher', {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqdata)
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
        //REST CALL TO SAVE Book
    }
    onUpdateInformation() {
        this.setState({ updateTab: true, formSalaryPaid: null, formSalaryDue: null })
    }
    onminiStudentID(e) {
        this.setState({ formSalaryDue: e.target.value })
    }
    onminiIssueDate(e) {
        this.setState({ formSalaryPaid: e.target.value })
    }
    onSaveUpdateInformation() {
        //REST CALL
        var url = ' http://localhost:5806/managerapp/update/teacher/' + this.state.teacherID + '/' + this.state.formSalaryDue + '/' + this.state.formSalaryPaid
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
                console.error('Error:', error);
            });
        this.setState({
            updateTab: false,
        }, () => { this.onTeacherSearch() })
    }


    render() {
        return (
            <div>
                <br />
                <center>
                    <b>Add Teacher : </b>
                    <Button variant="contained" color="primary" onClick={this.onTeacherAdd.bind(this)}>
                        New Teacher
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b>Search Teacher : </b>
                    <TextField size="small" label=" Enter Teacher ID" variant="outlined"
                        color="primary" value={this.state.teacherID} onChange={this.onteacherID.bind(this)} />
                        &nbsp;
                    <Button variant="contained" color="primary" onClick={this.onTeacherSearch.bind(this)}>
                        Search
                    </Button>
                    <br /><br />

                    {
                        (this.state.addtab == true) ?
                            <div>
                                <td><u><h3>Teacher Form </h3></u></td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td>
                                    <Button variant="contained" color="primary" onClick={this.onSaveTeacherAdd.bind(this)}>
                                        Save Teacher
                                 </Button>
                                </td>
                                <br />
                                <tr>
                                    <td><b>Teacher Name </b></td>
                                    <TextField size="small" label=" Enter Teacher Name " variant="outlined"
                                        color="primary" value={this.state.formTeacherName} onChange={this.onformTeacherName.bind(this)} />
                                    <td><b>Teacher ID</b></td>
                                    <TextField size="small" label=" Enter Teacher ID" variant="outlined"
                                        color="primary" value={this.state.formTeacherID} onChange={this.onformTeacherID.bind(this)} />
                                    <td><b>Total Salary </b></td>
                                    <TextField size="small" label=" Enter Total Salary " variant="outlined"
                                        color="primary" value={this.state.formTotalSalary} onChange={this.onformTotalSalary.bind(this)} />
                                    <td><b>Contact No</b></td>
                                    <TextField size="small" label=" Enter Contact No " variant="outlined"
                                        color="primary" value={this.state.formTeacherContact} onChange={this.onformTeacherContact.bind(this)} />
                                </tr>
                            </div>
                            : null
                    }

                    {(this.state.searchtab == true) ?
                        <div>
                            <TableContainer component={Paper}>
                                <Table aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell ><b>Teacher ID </b> </TableCell>
                                            <TableCell ><b>Teacher Contact </b> </TableCell>
                                            <TableCell ><b>Total Salary  </b></TableCell>
                                            <TableCell ><b>Teacher Name </b> </TableCell>
                                            <TableCell ><b>Salary Due </b> </TableCell>
                                            <TableCell ><b>Salary Paid </b> </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {(this.state.displayteacher != null) ?
                                        <TableBody>
                                            <TableRow>
                                            <TableCell ><b>{this.state.displayteacher.formTeacherID} </b> </TableCell>
                                                <TableCell ><b>{this.state.displayteacher.formTeacherContact} </b> </TableCell>
                                                <TableCell >{this.state.displayteacher.formTotalSalary}  </TableCell>
                                                <TableCell > {this.state.displayteacher.formTeacherName} </TableCell>
                                                <TableCell > {this.state.displayteacher.formSalaryDue} </TableCell>
                                                <TableCell > {this.state.displayteacher.formSalaryPaid} </TableCell>
                                            </TableRow>
                                        </TableBody>
                                        : "No Record"
                                    }
                                </Table>
                            </TableContainer>
                            <br /><br />
                            {(this.state.displayteacher != null) ?
                                <div>
                                    <Button variant="contained" color="primary" onClick={this.onUpdateInformation.bind(this)}>
                                        Update Issue Information
                            </Button>
                                </div>
                                : null}
                            {(this.state.updateTab == true)
                                ? <div>
                                    <br />
                                    <TextField size="small" label=" Enter Salary Due " variant="outlined"
                                        color="primary" value={this.state.formSalaryDue} onChange={this.onminiStudentID.bind(this)} />
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <TextField size="small" label=" Enter Salary Paid" variant="outlined"
                                        color="primary" value={this.state.formSalaryPaid} onChange={this.onminiIssueDate.bind(this)} />
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <Button variant="contained" color="primary" onClick={this.onSaveUpdateInformation.bind(this)}>
                                        Save
                                 </Button>
                                </div> : null}
                        </div>
                        : null}
                </center>
            </div>
        )
    }
}
export default Teacher;