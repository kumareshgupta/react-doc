import React from 'react'


 /*const Greet = props => {
    return (
        <div>
            <h1>Welcome {props.name} from {props.location}</h1>
            {props.children}
        </div>
    );
}
export default Greet
*/
export default class Greet extends React.Component{
    render(props){
        return(
            <div>
                <h1>Welcome {this.props.name} from {this.props.location}</h1>
            </div>
        );
    }
}