import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import sdata from '../db.json';


class Mainpage extends Component {
    render(){
        return(
            <React.Fragment>
                <table cellPadding="50" cellSpacing="3" align="center" border="3" id="data_table" className="main_table">
                    <thead><tr>
                        <td><b>Subject</b></td>
                        <td><b>Current %</b></td>
                        <td><b>Attended</b></td>
                        <td><b>Delivered</b></td>
                        <td><b>Today's Attendance</b></td>
                    </tr></thead>
                    <tbody>
                    {
                        sdata.map((stdata,index)=>{return(
                            <tr key={index}>
                                <td>{stdata.subj}</td>
                                <td>{(stdata.attended/stdata.delivered)*100}%</td>
                                <td>{stdata.attended}</td>
                                <td>{stdata.delivered}</td>
                                <td><button onClick={()=>console.log('Attended')}>Attended</button> <ensp>
                                <button onClick={()=>console.log('Not Attended')}>Not Attended</button> </ensp> </td>
                            </tr>)
                        })
                    }
                    <tr>
                    </tr>


                </tbody>
                </table>


            </React.Fragment>
        )
    }
}



export default Mainpage;