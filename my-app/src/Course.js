import React from 'react';
import { TextField, Button, Table, TableHead, TableRow, TableCell, TableContainer, Paper, TableBody } from '@material-ui/core';
class Course extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }
    render() {
        return (
            <div>
                <center><h3>Course Available</h3></center>
                <br/>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell ><b>Course Name </b> </TableCell>
                                <TableCell ><b>Duration  </b></TableCell>
                                <TableCell ><b>Fess </b> </TableCell>
                                <TableCell ><b>Seats Per Batch </b> </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell ><b>ANM </b> </TableCell>
                                <TableCell >2 years  </TableCell>
                                <TableCell > 120,000  </TableCell>
                                <TableCell >60  </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><b>GNM </b> </TableCell>
                                <TableCell >2 years  </TableCell>
                                <TableCell > 120,000  </TableCell>
                                <TableCell >60  </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><b>Pharmacy </b> </TableCell>
                                <TableCell >2 years  </TableCell>
                                <TableCell > 120,000  </TableCell>
                                <TableCell >60  </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><b>Nursing </b> </TableCell>
                                <TableCell >2 years  </TableCell>
                                <TableCell > 120,000  </TableCell>
                                <TableCell >60  </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

export default Course;
