import React from 'react';
import './App.css';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import Home from './Home';
import Student from './Student';
import logo from './logocollege.jpg';
import Course from './Course';
import Library from './Library';
import Teacher from './Teacher';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
   
  }

  handleHome() {
    this.setState({ index: 0 })
  }
  handleStudent() {
    this.setState({ index: 1 })
  }
  handleCourse() {
    this.setState({ index: 2 })
  }
  handleLibrary() {
    this.setState({ index: 3 })
  }
  handleTeacher() {
    this.setState({ index: 4 })
  }

  render() {
    return (
      <div >
       <center><h1><img height="40" width="50"  src={logo} alt="Logo" /> Pitambara Foundation</h1>
       <p><b>
         NH-33, Shivaji Nagar, Dumardagga, (Karyanand Tiwary Nursing College Campus) Booty,(Jharkhand) (282.97 km)835217 Ranchi, India
         <br/> Mobile : 094727 79249 &nbsp;&nbsp;&nbsp; Website : <a href= "http://pitambaracollegeofpharmacy.net/">pitambaracollegeofpharmacy.net</a>
         </b>
       </p>
       </center>
        <AppBar position="static">
          <Tabs  value ={this.state.index} aria-label="simple tabs example" centered>
            <Tab label="Home"  onClick={this.handleHome.bind(this)}/>
            <Tab label="Student" onClick={this.handleStudent.bind(this)}/>
            <Tab label="Course"  onClick={this.handleCourse.bind(this)}/>
            <Tab label="Library"  onClick={this.handleLibrary.bind(this)}/>
            <Tab label="Teacher"  onClick={this.handleTeacher.bind(this)}/>
          </Tabs>
        </AppBar>
        {(this.state.index==0)?<Home/>:null}
        {(this.state.index==1)?<Student/>:null}
        {(this.state.index==2)?<Course/>:null}
        {(this.state.index==3)?<Library/>:null}
        {(this.state.index==4)?<Teacher/>:null}
      </div>
    );
  }
}

export default App;
