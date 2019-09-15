import React from 'react'

export default class UserGreeting extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render(){

        return this.state.isLoggedIn && <div>Welcome Kumaresh</div>
        //return (this.state.isLoggedIn) ? <div>Welcome Kumaresh</div> : <div>Welcome Guest</div>

      /*  let message
        if(this.state.isLoggedIn){
            message = <div>Welcome Kumaresh</div>
        } else {
            message = <div>Welcome Guest</div>
        }
        return <div> {message}</div>
        */
        /*if(this.state.isLoggedIn){
            return <div>Welcome Kumaresh</div>             
        }else {
            return <div>Welcome Guest</div>
        }*/
        return(
            <div>
                <div>Welcome Guest</div>
                <div>Welcome All</div>
            </div>
        )
    }
}