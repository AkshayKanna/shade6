import React from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default class Aggreagation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array1: [],
            array2: [],
            first_name: ""
        }
    }
    get_value = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    aggregation = (e) => {
        let object = {
            first_name: this.state.first_name,
        }
        axios({
            method: 'post',
            url: 'http://localhost:3007/user/find',
            data: object
        })
            .then((response) => {
                console.log("response is", response.data.users)
                this.setState({
                    array2: response.data.users
                });
            })
            .catch((err) => alert(err))
    }
    render() {
        return (
            <div>
                <Navbar />
                <div class="jumbotron text-center mt-5" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <h1 class="display-4 text-info">FIND BY SERVICE</h1>
                    <p class="lead text-info">SEE THE APPOINTMENTS BASED ON TYPE  !!!!</p>
                </div>
                <form className="d-flex justify-content-cernter" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <div class="form-group col-lg-5 col-sm-5 col-md-6" >
                        <label for="first_name">Enter Name</label>
                        <input type="text" name="first_name" value={this.state.first_name} onChange={this.get_value} class="form-control" id="first_name" placeholder="Enter Name" />
                        {this.state.array2.map((items) => {
                            return (
                                <React.Fragment>
                                    <small id="emailHelp" class="form-text text-danger" style={{fontSize:"20px"}}>Type of Service He make an appointment - <b>{items._id}</b></small>
                                </React.Fragment>
                            );
                        })
                        }
                        <button type="button" className="btn btn-primary mt-2" onClick={this.aggregation}>Search</button>
                    </div>
                </form>
            </div>
        )
    }
}