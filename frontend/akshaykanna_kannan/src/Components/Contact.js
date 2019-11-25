import React from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                &nbsp;&nbsp;
                <div class="container mt-5"  style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <h2 class="text-center">CONTACT US</h2>
                    <div class="row">
                        <div class="col">
                            <div class="col-sm-4 col-lg-12 col-md-8">
                                <h5>Salon and Spa</h5>
                                <p> 2 <sup>nd</sup> Floor,91springboard, Salarpuria Tower - 1, <br /> Hosur Rd, 7 <sup>th</sup> Block Koramangala, <br /> Bengaluru, Karnataka 560095</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="col-sm-3 col-md-3">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6021248652282!2d77.60984055086412!3d12.933274519171627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14526d47175f%3A0x8a51177fba6ca896!2s91springboard+7th+Block%2C+Koramangala!5e0!3m2!1sen!2sin!4v1564563720275!5m2!1sen!2sin" height="450" width="400" frameborder="0"  style={{border:"0"}} allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}