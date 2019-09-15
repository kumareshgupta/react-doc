import React from 'react'
export default class EventBind extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message: 'Welcome To EveryWhere'
        }

       // this.clickHandler = this.clickHandler.bind(this)
    }
    /*clickHandler(){
        this.setState({
            message: "Great!! Good Job!! Amazing!!"
        })
        console.log(this)
    }*/

    clickHandler = () => {
        this.setState({
            message: "Great Work Done!!"
        })
    }
    
    render(){
        return (
            <div>
                <div>{this.state.message}</div>
        { /* <button onClick={this.clickHandler.bind(this)}>Press Me</button> */ }
        { /* <button onClick={() => this.clickHandler()} >Press ME</button> */}
            <button onClick={this.clickHandler}>Press Me</button>
            </div>
        )
    }
}