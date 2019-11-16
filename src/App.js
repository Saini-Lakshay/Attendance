import React, { Component } from 'react';
import Main from './Components/Main';
import {Route} from 'react-router-dom'
import Login from './Components/Login';

export default class App extends Component{
  render(){
    return (
        <div>
              <Route exact path='/Main' render={()=><Main/>}></Route> 
              <Route exact path='/' render={()=><Login/>}></Route> 
        </div>
  )}
}

