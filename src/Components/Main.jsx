import React,{Component} from 'react';
import NavBar from './Navbar.jsx';
import MainPage from './Mainpage.jsx';

export default class Main extends Component{

    constructor(){
        super();

        this.state = {
            studList: [
            ],
            display:"Mainpage"}
    }




    render()
    {
      return(
        <div>
          <div className="row">
            <div className="col">
              <NavBar/>
              <MainPage/>
            </div>
          </div>
          <div className="row">
            <div className="col">
            </div>
          </div>
        </div>
      )
    }
  }