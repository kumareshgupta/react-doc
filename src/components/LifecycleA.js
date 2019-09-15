import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Kumaresh'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <h2>LifecycleA</h2> 
                <LifecycleB />          
            </div>
        )
    }
}

export default LifecycleA
