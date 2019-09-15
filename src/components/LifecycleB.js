import React, { Component } from 'react'

 class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Kumaresh'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
    
    render() {
        console.log('LifecycleB render')
        return (
            <div>
                <h2>LifecycleB</h2>           
            </div>
        )
    }
}

export default LifecycleB
