import React from 'react';
import ReactDOM from 'react-dom';
import NameList from './components/NameList.jsx'
import Content from './MyApp.js'
import Header from './MyApp.js'
import Stylesheet from './components/Stylesheet'
import Inline from './components/inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import Greet from './components/Greet'
import StateDemo from './components/StateDemo.js';
import Counter from './components/Counter.js';
import LifecycleA from './components/LifecycleA.js';

class Demo extends React.Component{

    render(){
        return (
            <div>
                <LifecycleA />
               {/* <StateDemo />
                <Counter />
                <Greet name="Matangi" location="Durgapur" >
                   <p>Jai Maa</p>
                </Greet>
                <Form />
                <Stylesheet primary={true} />
                <Inline/>
                <h1 className='error'>Error</h1>
               <h1 className={styles.success}>Success</h1> */}
            </div>
        )
    }

   /* render(){
        var i = 1;
        var myStyle = {
            fontSize: 30,
            color: '#FF0001'
        }
        return (
            <div>   
                <NameList />             
                <h1 style = {myStyle}>{ 1 + 100 } . Welcome to React Pollution Free Environment</h1>
                <h2>{ i === 1 ? 'True' : 'False'}</h2>
            </div>
        )
    }*/
}

ReactDOM.render(<Demo />, document.getElementById('wow'));
//ReactDOM.render(<Header />, document.getElementById('root'));