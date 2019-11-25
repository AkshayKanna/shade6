import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import {Link } from 'react-router-dom';

class Deleteskin extends React.Component {
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
            array2: [],
            array1: []
        }
    }

    delete = (e) => {
        axios({
            method: 'get',
            url: `http://localhost:3007/user_skin/delete_skin/${this.props.match.params.id}`,
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
            })
            .catch((err) => alert(err))
        alert("Successfully Deleted")
    }
    render() {
        console.log(this.state.array1)
        return (
            <div>
                <Navbar />
                <div class="jumbotron text-center" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <h1 class="display-4">SKIN SERVICE</h1>
                    <p class="lead">DELETE DETAILS OF USER <br></br>FOR RADIANT, REVITALISED AND REFRESHED SKIN, CHOOSE NATURALS!</p>
                </div>
                <div className="container" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <Link to="/facial">  <button type="button" className="btn btn-primary btn-block" onClick={this.delete}>Delete the User</button></Link>
                </div>
            </div>
        )
    }
}
export default Deleteskin;