import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        return (
            <nav>
                <h3>{`Hello the one and only Great ${this.props.currentUser.username}`}</h3>
                <button onClick={this.props.logout}>Logout</button>
            </nav>
        );
    }
} 
export default Navbar;