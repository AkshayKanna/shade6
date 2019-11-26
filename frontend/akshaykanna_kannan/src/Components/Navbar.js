import React from "react";
import axios from "axios";
import { Route, Redirect, Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <a class="navbar-brand" href="#"><i class="fas fa-spa">&nbsp;&nbsp;</i>Salon and Spa</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link to="/" class="nav-link" href="#Services"><i class="fas fa-home">&nbsp;&nbsp;</i>Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Services"><i class="fab fa-servicestack">&nbsp;&nbsp;</i>Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Hours"><i class="far fa-clock">&nbsp;&nbsp;</i>Hours</a>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class="nav-link" href="#"><i class="fas fa-address-card">&nbsp;&nbsp;</i>Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/aggregation" class="nav-link" href="#"><i class="fas fa-search">&nbsp;&nbsp;</i>Find By Type</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/admin">
                                    <button type="button" className="btn btn-outline-primary"><i class="fas fa-user-shield">&nbsp;&nbsp;</i>Admin</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}