import React from 'react';
import App from './App';
import { TextField, Button } from '@material-ui/core';
import logo from './logocollege.jpg';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            default: 'admin123',
            password: null,
            allow: null
        };
    }

    onpassword(e) {
        this.setState({ password: e.target.value })
    }

    onEnter() {
        this.state.password == this.state.default
            ? this.setState({ allow: true})
            : this.setState({ allow: false,password: null},()=>{alert('Incorrect Password !!!\n Try Again')})
    }

    render() {
        return (
            <div>
                <br />
                {(this.state.allow == true) ? <App /> :
                <div>
                    <center>
                    <h1><img height="40" width="50"  src={logo} alt="Logo" /> Pitambara Foundation</h1>
                    <TextField size="small" label=" Enter Password" variant="outlined" type="password"
                        color="primary" value={this.state.password} onChange={this.onpassword.bind(this)} />
                    &nbsp;
                    <Button variant="contained" color="primary" onClick={this.onEnter.bind(this)}>
                    Log In
                    </Button>
                    </center>
                </div>
                }
            </div>

        )
    }

}

export default Login;