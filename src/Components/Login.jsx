import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'
import Navbar from './Navbar';

class Login extends Component{
    render(){
        return(
            <React.Fragment>
                <div align="center">
                    <div>
                        <Navbar/>
                        <br></br><br></br>
                        <h2>Login here</h2>
                        <br></br><br></br>
                    </div>
                <table>
                    <tr>
                        <td>Enter Id : </td>
                        <td>{<input type="text" id="login_user_id"></input>}</td>
                    </tr>
                    <tr>
                        <td>Enter Password : </td>
                        <td>{<input type="password" id="login_user_password"></input>}</td>
                    </tr>
                </table>
                <br></br>
                <button><Link to="/Main">Login</Link></button>
                </div>
                
            </React.Fragment>
        )
    }

}

export default Login;