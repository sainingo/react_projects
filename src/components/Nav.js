import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="navbar-item">
                       <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/ticket">Ticket</Link>
                    </li>
                </ul>
            </div>  
            </nav>
                
        )
    }
}
