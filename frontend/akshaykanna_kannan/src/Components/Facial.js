import React from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default class Facial extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array1: [],
            array2: [],
            first_name: "",
            last_name: "",
            gender: "",
            address: "",
            address2: "",
            mobile_number: "",
            date: "",
            time_slot: "",
            type: ""
        }
    }
    get_value = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    componentDidMount = (e) => {
        axios({
            method: 'get',
            url: 'http://localhost:3007/skin_service',
        })
            .then((response) => {
                // console.log(response.data.users)
                this.setState({
                    array1: [...response.data.users]
                });
            })
            .catch((err) => alert(err))
    }

    create = (e) => {
        let object = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            gender: this.state.gender,
            address: this.state.address,
            address2: this.state.address2,
            mobile_number: this.state.mobile_number,
            date: this.state.date,
            time_slot: this.state.time_slot,
            type: this.state.type
        }
        axios({
            method: 'post',
            url: 'http://localhost:3007/user/skin_service',
            data: object
        })
            .then((response) => {
                console.log("response is", response.data)
                this.setState({
                    array2: response.data
                });
            })
            .catch((err) => alert(err))
        alert("Appointment Booked")
    }
    render() {
        return (
            <div>
                <Navbar />
                <div class="jumbotron text-center" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <h1 class="display-4">SKIN SERVICES</h1>
                    <p class="lead">FOR RADIANT, REVITALISED AND REFRESHED SKIN, CHOOSE NATURALS!</p>
                </div>

                <div className="container" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <h1>BOOK AN APPOINTMENT</h1>
                    <div className="row mt-5">
                        <form className="col-lg-10 col-sm-5 col-md-6">
                            <div class="form-row ">
                                <div class="col">
                                    <label for="first_name">First Name</label>
                                    <input type="text" name="first_name" id="first_name" value={this.state.first_name} onChange={this.get_value} class="form-control" placeholder="First name" />
                                </div>
                                <div class="col">
                                    <label for="last_name">Last Name</label>
                                    <input type="text" name="last_name" id="last_name" value={this.state.last_name} onChange={this.get_value} class="form-control" placeholder="Last name" />
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <label for="gender">Gender</label>
                                <input type="text" name="gender" value={this.state.gender} onChange={this.get_value} class="form-control" id="gender" placeholder="Gender" />
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" name="address" value={this.state.address} onChange={this.get_value} class="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Address 2</label>
                                <input type="text" name="address2" value={this.state.address2} onChange={this.get_value} class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div class="form-group">
                                <label for="mobile_number">Moblie Number</label>
                                <input type="text" name="mobile_number" value={this.state.mobile_number} onChange={this.get_value} class="form-control" id="mobile_number" placeholder="Mobile Number" />
                            </div>
                            <div class="form-group">
                                <label for="date">Date</label>
                                <input type="date" name="date" value={this.state.date} onChange={this.get_value} class="form-control" id="date" placeholder="date" />
                            </div>
                            <div class="form-group">
                                <label for="time_slot">Time Slot</label>
                                <input type="time" name="time_slot" value={this.state.time_slot} onChange={this.get_value} class="form-control" id="time_slot" placeholder="Time Slot" />
                            </div>
                            <div class="input-group mt-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Type of Service</label>
                                </div>
                                <select class="custom-select" id="inputGroupSelect01" name="type" value={this.state.type} onChange={this.get_value}>
                                    <option selected>Choose...</option>
                                    <option value="FACE CLEANUP">FACE CLEANUP</option>
                                    <option value="FACIAL">FACIAL</option>
                                    <option value="FACE BLEACHING">FACE BLEACHING</option>
                                    <option value="FACIAL MASKS">FACIAL MASKS</option>
                                </select>
                            </div>
                            <button className="btn btn-outline-primary mt-4" onClick={this.create}>SUBMIT</button>
                        </form>
                    </div>
                </div>
                <div className="container mt-5" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <h1>DETAILS OF THE APPOINTMENTS</h1>
                    <table class="table text-center table-bordered">
                        <thead class="thead-light ">
                            <tr>
                                <th scope="col"> Object_Id</th>
                                <th scope="col"> First Name</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Update</th>
                                <th scope="col">Show</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.array1.map((items) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{items._id}</td>
                                            <td>{items.first_name}</td>
                                            <td>{items.mobile_number}</td>
                                            <td >
                                                <button className="btn btn-outline-success" type="button" onClick={() => this.props.history.push(`/user_skin/update_skin/${items._id}`)}>Update</button>
                                            </td>
                                            <td >
                                                <button className="btn btn-outline-primary" type="button" onClick={() => this.props.history.push(`user_skin/show_skin/${items._id}`)}>Show Details</button>
                                            </td>
                                            <td >
                                                <button className="btn btn-outline-danger" type="button" onClick={() => this.props.history.push(`user_skin/delete_skin/${items._id}`)}>Delete</button>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                );
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}