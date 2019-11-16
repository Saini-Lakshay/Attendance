import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Navbar extends Component {
    render(){
        return(
            <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#"><h1><b>Time Table</b></h1></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
            </React.Fragment>
        )
    }
}

export default Navbar;