import React from 'react';
import { TextField, Button, Table, TableHead, TableRow, TableCell, TableContainer, Paper, TableBody } from '@material-ui/core';
class Library extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displaybook: null,
            addtab: false,
            searchtab: false,
            bookId: null,
            formbookName: null,
            formbookID: null,
            formAuthor: null,
            miniStudentID: null,
            miniIssueDate: null,
            updateTab: false,
        };

    }
    onBookAdd() {
        this.setState({
            addtab: true,
            searchtab: false,
            formbookName: null,
            formbookID: null,
            formAuthor: null,
        })
    }
    onbookid(e) {
        this.setState({
            bookId: e.target.value
        })
    }
    onBookSearch() {
        // CALL REST
        var url = 'http://localhost:5806/managerapp/get/book/' + this.state.bookId
        fetch(url, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ displaybook: data })
                console.log('Success:', data);
            })
            .catch((error) => {
                this.setState({ displaybook: null })
                console.error('Error:', error);
            });
        this.setState({
            addtab: false,
            searchtab: true,
        })
    }
    onformName(e) {
        this.setState({
            formbookName: e.target.value
        })
    }
    onformID(e) {
        this.setState({
            formbookID: e.target.value
        })
    }
    onformAuthor(e) {
        this.setState({
            formAuthor: e.target.value
        })
    }
    onSaveBookAdd() {
        //REST CALL
        var reqdata = {
            "formbookID": "",
            "formAuthor": "",
            "formbookName": "",
        }
        reqdata.formbookID = this.state.formbookID
        reqdata.formAuthor = this.state.formAuthor
        reqdata.formbookName = this.state.formbookName

        fetch('http://localhost:5806/managerapp/save/book', {
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
        }, () => { this.onBookSearch() })
        //REST CALL TO SAVE Book
    }
    onUpdateInformation() {
        this.setState({ updateTab: true, miniIssueDate: null, miniStudentID: null })
    }
    onminiStudentID(e) {
        this.setState({ miniStudentID: e.target.value })
    }
    onminiIssueDate(e) {
        this.setState({ miniIssueDate: e.target.value })
    }
    onSaveUpdateInformation() {
        //REST CALL
        var url = ' http://localhost:5806/managerapp/update/book/' + this.state.bookId + '/' + this.state.miniStudentID + '/' + this.state.miniIssueDate
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
        }, () => { this.onBookSearch() })
    }


    render() {
        return (
            <div>
                <br />
                <center>
                    <b>Add Book : </b>
                    <Button variant="contained" color="primary" onClick={this.onBookAdd.bind(this)}>
                        New Book
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b>Search Book : </b>
                    <TextField size="small" label=" Enter Book ID" variant="outlined"
                        color="primary" value={this.state.bookId} onChange={this.onbookid.bind(this)} />
                        &nbsp;
                    <Button variant="contained" color="primary" onClick={this.onBookSearch.bind(this)}>
                        Search
                    </Button>
                    <br /><br />

                    {
                        (this.state.addtab == true) ?
                            <div>
                                <td><u><h3>Book Form </h3></u></td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td>
                                    <Button variant="contained" color="primary" onClick={this.onSaveBookAdd.bind(this)}>
                                        Save Book
                                 </Button>
                                </td>
                                <br />
                                <tr>
                                    <td><b>Book Name </b></td>
                                    <TextField size="small" label=" Enter Name" variant="outlined"
                                        color="primary" value={this.state.formbookName} onChange={this.onformName.bind(this)} />
                                    <td><b>Book Author</b></td>
                                    <TextField size="small" label=" Enter Author " variant="outlined"
                                        color="primary" value={this.state.formAuthor} onChange={this.onformAuthor.bind(this)} />
                                    <td><b>Book ID</b></td>
                                    <TextField size="small" label=" Enter Book ID " variant="outlined"
                                        color="primary" value={this.state.formbookID} onChange={this.onformID.bind(this)} />
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
                                            <TableCell ><b>Book ID </b> </TableCell>
                                            <TableCell ><b>Author Name  </b></TableCell>
                                            <TableCell ><b>Book Name </b> </TableCell>
                                            <TableCell ><b>Issued to </b> </TableCell>
                                            <TableCell ><b>Issued Date </b> </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {(this.state.displaybook != null) ?
                                        <TableBody>
                                            <TableRow>
                                                <TableCell ><b>{this.state.displaybook.formbookID} </b> </TableCell>
                                                <TableCell >{this.state.displaybook.formAuthor}  </TableCell>
                                                <TableCell > {this.state.displaybook.formbookName} </TableCell>
                                                <TableCell > {this.state.displaybook.formStudentId} </TableCell>
                                                <TableCell > {this.state.displaybook.formIssuedate} </TableCell>
                                            </TableRow>
                                        </TableBody>
                                        : "No Record"
                                    }
                                </Table>
                            </TableContainer>
                            <br /><br />
                            {(this.state.displaybook != null) ?
                                <div>
                                    <Button variant="contained" color="primary" onClick={this.onUpdateInformation.bind(this)}>
                                        Update Issue Information
                            </Button>
                                </div>
                                : null}
                            {(this.state.updateTab == true)
                                ? <div>
                                    <br />
                                    <TextField size="small" label=" Enter Student ID " variant="outlined"
                                        color="primary" value={this.state.miniStudentID} onChange={this.onminiStudentID.bind(this)} />
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <TextField size="small" label=" Enter Issue Date" variant="outlined"
                                        color="primary" value={this.state.miniIssueDate} onChange={this.onminiIssueDate.bind(this)} />
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
export default Library;