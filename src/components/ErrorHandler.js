import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class ErrorHandler extends Component {
    render(){
        return (
            <Jumbotron>
                <h1>Oops!!</h1>
                <p>Something went wrong, please contact support or try again later.</p>
                <p><Link to='/'>Home</Link></p>
            </Jumbotron>
        )
    }
}

export default ErrorHandler;