import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

export default class Updateskin extends React.Component {
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
            type: "",
            array1: []
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: `http://localhost:3007/user_skin/show_skin/${this.props.match.params.id}`,

        })
            .then((response) => {
                console.log(response.data)
                this.setState({
                    "first_name": response.data.user[0].first_name,
                    "last_name": response.data.user[0].last_name,
                    "gender": response.data.user[0].gender,
                    "address": response.data.user[0].address,
                    "address2": response.data.user[0].address2,
                    "mobile_number": response.data.user[0].mobile_number,
                    "date": response.data.user[0].date,
                    "time_slot": response.data.user[0].time_slot,
                    "type": response.data.user[0].type,
                })
            })

    }

    edit = (e) => {
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
            url: `http://localhost:3007/user_skin/update_skin/${this.props.match.params.id}`,
            data: object
        })
            .then((response) => {
                const obj = {
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    gender: response.data.gender,
                    address: response.data.address,
                    address2: response.data.address2,
                    mobile_number: response.data.mobile_number,
                    date: response.data.date,
                    time_slot: response.data.time_slot,
                    type: response.data.type
                }
                console.log(response)
                this.setState({
                    array1: [...this.state.array1, obj]
                });
            })
            .catch((err) => alert(err))
        alert("UPDATED SUCCESSFULLY")
    }
    render() {
        return (
            <div>
                <Navbar />
                <div class="jumbotron text-center mt-5" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <h1 class="display-4">SKIN SERVICE</h1>
                    <p class="lead">FOR RADIANT, REVITALISED AND REFRESHED SKIN, CHOOSE NATURALS!</p>
                </div>

                <div className="container" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <div className="row">
                        <form className="col-lg-10 col-sm-5 col-md-6">
                            <div class="form-row ">
                                <div class="col">
                                    <label for="first_name">First Name</label>
                                    <input type="text" name="first_name" id="first_name" value={this.state.first_name} onChange={(e) => this.setState({ first_name: e.target.value })} class="form-control" placeholder="First name" />
                                </div>
                                <div class="col">
                                    <label for="last_name">Last Name</label>
                                    <input type="text" name="last_name" id="last_name" value={this.state.last_name} onChange={(e) => this.setState({ last_name: e.target.value })} class="form-control" placeholder="Last name" />
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <label for="gender">Gender</label>
                                <input type="text" name="gender" value={this.state.gender} onChange={(e) => this.setState({ gender: e.target.value })} class="form-control" id="gender" placeholder="Gender" />
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" name="address" value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} class="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Address 2</label>
                                <input type="text" name="address2" value={this.state.address2} onChange={(e) => this.setState({ address2: e.target.value })} class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div class="form-group">
                                <label for="mobile_number">Moblie Number</label>
                                <input type="text" name="mobile_number" value={this.state.mobile_number} onChange={(e) => this.setState({ mobile_number: e.target.value })} class="form-control" id="mobile_number" placeholder="Mobile Number" />
                            </div>
                            <div class="form-group">
                                <label for="date">Date</label>
                                <input type="date" name="date" value={this.state.date} onChange={(e) => this.setState({ date: e.target.value })} class="form-control" id="date" placeholder="date" />
                            </div>
                            <div class="form-group">
                                <label for="time_slot">Time Slot</label>
                                <input type="time" name="time_slot" value={this.state.time_slot} onChange={(e) => this.setState({ time_slot: e.target.value })} class="form-control" id="time_slot" placeholder="Time Slot" />
                            </div>
                            <div class="input-group mt-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Type of Service</label>
                                </div>
                                <select class="custom-select" id="inputGroupSelect01" name="type" value={this.state.type} onChange={(e) => this.setState({ type: e.target.value })}>
                                    <option selected>Choose...</option>
                                    <option value="FACE CLEANUP">FACE CLEANUP</option>
                                    <option value="FACIAL">FACIAL</option>
                                    <option value="FACE BLEACHING">FACE BLEACHING</option>
                                    <option value="FACIAL MASKS">FACIAL MASKS</option>
                                </select>
                            </div>
                            <div class="form-row d-flex justify-content-center mt-4">
                                <div>
                                    <button type="button" class="btn btn-success" onClick={this.edit}><i class="fas fa-pen">&nbsp;&nbsp;</i>UPDATE</button>
                                </div>
                                &nbsp;&nbsp;
                                <Link to="/facial">
                                    <button type="button" className="btn btn-primary"><i class="fas fa-home">&nbsp;&nbsp;</i>HOME</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}