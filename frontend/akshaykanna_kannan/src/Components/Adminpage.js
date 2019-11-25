import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import {Link } from 'react-router-dom';


export default class Adminpage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array1: [],
        }
    }
    bodyservice = (e) => {
        axios({
            method: 'get',
            url: 'http://localhost:3007/user/sort',
        })
            .then((response) => {
                console.log(response.data.users)
                this.setState({
                    array1: [...response.data.users]
                });
            })
            .catch((err) => alert(err))
    }
    skinservice = (e) => {
        axios({
            method: 'get',
            url: 'http://localhost:3007/user_skin/sort',
        })
            .then((response) => {
                console.log(response.data.users)
                this.setState({
                    array1: [...response.data.users]
                });
            })
            .catch((err) => alert(err))
    }
    render() {
        console.log(this.state.array1)
        return (
            <div>
                <Navbar />
                <div class="jumbotron text-center" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <h1 class="display-4">ADMIN SERVICE</h1>
                    <p class="lead">SEE ALL THE APPOINTMENTS BASED ON TIME SLOTS  !!!!</p>
                    <p class="lead">IN ASCENDING ORDER SO THAT TO SEE !!!!</p>
                    <button type="button" className="btn btn-primary " onClick={this.bodyservice}>Sort By time for Body</button>&nbsp;&nbsp;
                    <button type="button" className="btn btn-primary " onClick={this.skinservice}>Sort By time for Skin</button>
                </div>



                <div className="container-fluid mt-5" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <table class="table text-center table-bordered">
                        <thead class="thead-light ">
                            <tr>
                                <th scope="col"> Object_Id</th>
                                <th scope="col"> First Name</th>
                                <th scope="col"> LastName</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Address</th>
                                <th scope="col">Address2</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Date</th>
                                <th scope="col"><b>Time</b></th>
                                <th scope="col">Type</th>
                            </tr>
                        </thead>
                        <tbody >

                            {this.state.array1.map((items) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{items._id}</td>
                                            <td>{items.first_name}</td>
                                            <td>{items.last_name}</td>
                                            <td>{items.gender}</td>
                                            <td>{items.address}</td>
                                            <td>{items.address2}</td>
                                            <td>{items.mobile_number}</td>
                                            <td>{items.date}</td>
                                            <td><b>{items.time_slot}</b></td>
                                            <td>{items.type}</td>
                                        </tr>
                                    </React.Fragment>
                                );
                            })
                            }
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center">
                        <Link to="/">
                            <button type="button" className="btn btn-primary mt-5"><i class="fas fa-home">&nbsp;&nbsp;</i>Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}