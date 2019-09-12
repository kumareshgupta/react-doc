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







































