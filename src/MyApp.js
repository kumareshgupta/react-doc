import React from 'react'
import FunClick from './FunClick.js'
import ClassClick from './ClassClick.jsx'
import EventBind from './components/EventBind.jsx'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting.jsx'

export default class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            data:
            [
               {
                "id":1,
                "name":"Ram",
                "location" : "Bangalore"
               } ,
               {
                   "id":2,
                   "name":"Shyam",
                   "location":"Ayodhya"
               },
               {
                   "id":3,
                   "name":"Mohini",
                   "location":"Anahatpur"
               }
            ],
            details: "Details from Content"
        }
    }
    render(){
        return(
            <div>
                <Header /> 
                <table border='2'>
                    <tbody>
                        {
                            this.state.data.map((p, i) => <TableRow key={i} info={p} />)
                        }
                    </tbody>
                </table>
                <h3>{this.state.details}</h3>
                <UserGreeting />
              {/*   <FunClick />   
                 <ClassClick />  
                 <EventBind />  
                 <ParentComponent /> */}
            </div>

        );
    }
}

class TableRow extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.info.id}</td>
                <td>{this.props.info.name}</td>
                <td>{this.props.info.location}</td>
            </tr>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
            <h1>Header</h1>
            </div>
        );
    }
}

//export default Content;