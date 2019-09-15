import React from 'react'
import { tsPropertySignature } from '@babel/types'

    function ChildComponent(props){
        return (
            <div>
                <button onClick = {() => props.greetHandler('child')}>Greet Parent</button>
            </div>
        )
    }

    export default ChildComponent