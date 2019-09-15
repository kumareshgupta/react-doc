import React from 'react'

export default class ClassClick extends React.Component{
    clickHandler(){
        console.log('Click Me Clicked')
    }
    render(){
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        );
    }
}