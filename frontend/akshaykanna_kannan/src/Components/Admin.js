import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import {Link } from 'react-router-dom';


export default class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array1: [],
            email: "",
            password: "",
        }
    }
    get_value = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    create = (e) => {
        let object = {
            email: this.state.email,
            password: this.state.password,
        }
        axios({
            method: 'post',
            url: 'http://localhost:3007/admin',
            data: object
        })
            .then((response) => {
                console.log("response is", response.data)
                this.setState({
                    array1: response.data
                });
            })
            .catch((err) => alert(err))
        alert("Admin Logined")
    }
    render() {
        return (
            <div>
                <Navbar />
                <div class="jumbotron text-center" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <h1 class="display-4">ADMIN LOGIN</h1>
                </div>
                <div className="container" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <div className="row ">
                        <form className="col-lg-7 col-sm-5 col-md-6">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" name="email" id="email" value={this.state.email} onChange={this.get_value} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" name="password" id="password" value={this.state.password} onChange={this.get_value} class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>

                            <Link to="/admin_logined">
                                <button type="button" className="btn btn-primary" onClick={this.create}>Login</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}