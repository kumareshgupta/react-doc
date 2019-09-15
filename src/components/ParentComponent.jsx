import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        //alert('Hi' + this.state.parentName)
        alert(`Hi ${this.state.parentName} from ${childName}`) // feature from ES6
    }

    render(){
        return(
            <div>
                <ChildComponent  greetHandler={this.greetParent} />
            </div>
        )
    }
}