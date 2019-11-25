import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

export default class ShowDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            gender: "",
            address: "",
            address2: "",
            mobile_number: "",
            date: "",
            time_slot: "",
            type:"",
            array1: []
        }
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: `http://localhost:3007/user/show/${this.props.match.params.id}`,

        })
            .then((response) => {
                const obj = {
                    first_name: response.data.user.first_name,
                    last_name: response.data.user.last_name,
                    gender: response.data.user.gender,
                    address: response.data.user.address,
                    address2: response.data.user.address2,
                    mobile_number: response.data.user.mobile_number,
                    date: response.data.user.date,
                    time_slot: response.data.user.time_slot,
                    type: response.data.user.type,
                }
                console.log("reponse is", response.data.user)
                this.setState({
                    array1: [...response.data.user]
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
                    <h1 class="display-4">BODY SERVICE</h1>
                    <p class="lead">FULL DETAILS OF USER</p>
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
                                <th scope="col">Time</th>
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
                                            <td>{items.time_slot}</td>
                                            <td>{items.type}</td>
                                        </tr>
                                    </React.Fragment>
                                );
                            })
                            }
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center">
                        <Link to="/body_service">
                            <button type="button" className="btn btn-primary mt-5"><i class="fas fa-home">&nbsp;&nbsp;</i>Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}