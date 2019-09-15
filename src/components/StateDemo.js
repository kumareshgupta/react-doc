import React from 'react'

export default class StateDemo extends React.Component{
    constructor(){
        super()
        
    this.state = {
        message: 'Welcome to React'
    }
    }

    changeMe() {
        this.setState({
            message: 'Thanks for subscribing'
        })
    }

    render(){
        return (            
              <div>
                  <h1>{this.state.message}</h1>
                  <button onClick ={ ()=> this.changeMe() }>Subscribe</button>
              </div>  
        );
    }


}