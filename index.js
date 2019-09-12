import React from 'react';
import ReactDOM from 'react-dom';


//var name= "Explorer";
//var num = 1;
// var element = <h1>{name}.React is rising!</h1>
//const element = <h1>{(num == 1) ? "Great Winner" : "Great Learner" }</h1>

/* const element = <React.Fragment>
                    <h1>Wow</h1>
                    <h2>Great</h2>
                    <h3>Amazing</h3>
                </React.Fragment>;
                */
             
/*ReactDOM.render(
    element,
    document.getElementById('root')
);*/

//class component
class MyComponent extends React.Component {
    render(){
        return <h1>Classical Example</h1>
    }
}

//functional component
function Welcome(){
    return <h1>Welcome to React</h1>;
}   

var element = <MyComponent />;

/*ReactDOM.render(
    //<Welcome />,
    //<MyComponent />,
    element,
    document.getElementById('root')
);
*/

/*function Navbar(){
    return <a href="http://www.india.gov.in">Navbar</a>;
}

function Sidebar(){
    return <h2>Sidebar</h2>;
}

function ArticleList(){
    return <h2>ArticleList</h2>
}

function Parent(){
    return (
        <>
            <Navbar />
            <Sidebar />
            <ArticleList />
        </>
    );
}

ReactDOM.render(
    <Parent />,
    document.getElementById('root')
);
*/

/*function Form(){
    return (
        <div> 
            <input type = "text" placeholder = "Enter Text.." /> 
            <br /> 
            <br /> 
            <input type = "text" placeholder = "Enter Text.." /> 
            <br /> 
            <br /> 
            <button type = "submit">Submit</button> 
        </div> 
    );
}*/
/*
function Input(){
    return(
    <div> 
        <input type = "text" placeholder = "Enter Text.." /> 
        <br /> 
        <br />
    </div>
    );
}

function Button(){
    return(
        <button type = "submit">Submit</button> 
    );
}

function Form(){
    return(
        <div>
            <Input />
            <Input />
            <Input />
            <Button />
        </div>
    );
}

ReactDOM.render(
    <Form />,
    document.getElementById('root')
);

*/

/*function FunComponent(props){
    return(
        <div>
            <h2>Pranam! {props.user} </h2>
        </div>
    );
}

class DemoComponent extends React.Component{
    render(){
        return(
            <div>
                <h2>Namaste! {this.props.user}</h2>
                <h3>Life is 10% what happens to you and 90% how you react to it.</h3>
                <FunComponent />
            </div>
        );
    }
}

ReactDOM.render(
    <DemoComponent user="Kumaresh Gupta" />,    
    document.getElementById('root')
);
*/
//props 
/*
class Parent extends React.Component{
    render(){
        return (
            <div>
                <h2>Wow!</h2>
                <Child name="Ram" location="Bangalore"></Child>
            </div>
        );
    }

}

class Child extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <h2>{this.props.location}</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Parent/>,
    document.getElementById("root")
);
*/

/*
//defaultProps
class PropExample extends React.Component{
    render(){
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.email}</h2>
            <h2>{this.props.names[0]}</h2>
            <h2>{this.props.names}</h2>
            <h3>
                {this.props.names.map(
                    function namesIterator(name, i){
                        return(
                            "Developer : " + (i+1) + " - " + name + "\n"
                        );
                    }
                )}
            </h3>
            </div>
        );
    }
}


PropExample.defaultProps = {
    title: "React Rocks",
    email: "act@react.com",
    names: ['Ram','Shyam','Matangi']
}

ReactDOM.render(
    <PropExample />,
    document.getElementById("root")
);

*/
/*
//PropTypes
class ComponentExample extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.arrayProp}</h1>
                <h1> {this.props.strProp} </h1>
                <h1> {this.props.numProp} </h1>
            </div>
        );
    }

}

ComponentExample.propTypes = {
    arrayProp: PropTypes.array,
    numProp: PropTypes.number,
    strProp: PropTypes.string
}

ComponentExample.defaultProps = {
    arrayProp : ['Devi', 'Kali', "Tara"],
    numProp: '108',
    strProp: 'Mahakali'
}

ReactDOM.render(
    <ComponentExample />,
    document.getElementById('root')
)
*/
/*
//Lists
const numbers = [1, 2, 3, 4, 5, 6];

const updateNums = numbers.map(
    (number)=>{
        return <li>{number}</li>
    }
);
*/
const numbers = [1, 2, 3, 4, 5, 6, 7];


function ListMenu(props){    
    const updateNums = numbers.map(
        (number) =>{
            return <li key={number.toString()}>{number} </li>
        }
    );

    return(
        <>
        <ol>{updateNums}</ol>
        <ul>{updateNums}</ul>
        </>
    )
}

ReactDOM.render(
    <ListMenu numList = {numbers} />,
    document.getElementById('root'),
    console.log('It is Done successfully ok.. ')
);

