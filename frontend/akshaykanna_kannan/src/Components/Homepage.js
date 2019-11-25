import React from "react";
import Navbar from "./Navbar";
import {Link } from 'react-router-dom';


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="jumbotron" style={{ backgroundImage: "url(./spa-banner.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "650px" }}>
                </div>

                <h1 style={{ fontFamily: "'Work Sans', sans-serif" }} className="text-center" id="Services">Services</h1>
                <div className="container mt-5" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <div className="row">
                        <div className="col-md-6">
                            <h3 >Body Care Services</h3>
                            <p style={{fontSize:"17px"}}>
                                There’s nothing better that a relaxing full body massage after a long week at work. At Spa, we understand your needs and have created massages that de-stress and refresh your body and mind.
                                Spa offer a range of body massages including cocoa butter massage and aroma oil massage. A body massage at the hands of our skilled masseurs will help you relax, rejuvenate and prepare for the week ahead!.
                            </p>
                            <p >
                                <button className="btn btn-outline-primary mt-2" onClick={() => this.props.history.push(`/body_service`)}>Book Now</button>
                            </p>

                        </div>
                        <div className="col-md-6">
                            <img src="./spa1.png" alt="Modern Spa" className="img-fluid" width="100%"></img>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: "150px" }}></div>

                <div className="container" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="./spa2.png" alt="Facial" className="img-fluid" width="100%"></img>
                        </div>
                        <div className="col-md-6">
                            <h3 >Skin Care Services</h3>
                            <p style={{fontSize:"17px"}}>
                                A facial is not just about pampering yourself, it also does wonders for your skin! A facial done by a professional, deep cleans and hydrates your skin as well as relieves acne. A good facial also improves blood circulation, giving your skin a healthy glow.
                                At Spa, we use products containing vital minerals and nutrients that reduce wrinkles and remove dead skin, giving you a youthful appearance. Black mud, fruit acids, vitamins, enzymes, gold and anti-oxidants are just a few of the special ingredients found in our facials.
                            </p>
                            <button className="btn btn-outline-primary pt-2" onClick={() => this.props.history.push(`/facial`)}>Book Now</button>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: "150px" }}></div>

                <div className="container mt-5" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <div className="row">
                        <div className="col-md-6">
                            <h3 >Hair Care Services</h3>
                            <p style={{fontSize:"17px"}}>
                                Haircuts, if done well, can accentuate the best features of your face. A haircut by a Spa hair stylist is no ordinary one. Our hairdressers are skilled in sculpting a look that not only defines your face, but also adds movement and volume.
                                At Spa you can trust our hairstylists to give you the latest hairstyle, while keeping in mind your preferences. New hair styles also come with a relaxing hair wash and conditioning, giving your hair a natural shine.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src="./spa3.png" alt="Modern Spa" className="img-fluid" width="100%"></img>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: "150px" }}></div>

                <h1 style={{ fontFamily: "'Work Sans', sans-serif" }} className="text-center mt-5" id="Services" id="Hours">Hours of Operations</h1>
                <div className="container-fluid bg-light mt-5" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <div className="text-center mt-5">
                        <h4>Monday to Friday</h4><br></br>
                        <h4>10:00 am to 9:30 pm</h4><br></br>
                        <h4>Saturday to Sunday</h4><br></br>
                        <h4>8:00 am to 8:30 pm</h4><br></br>
                    </div>
                </div>

                <footer class="footer section footer-classic context-dark bg-image" style={{ background: "#2d3246", fontFamily: "'Work Sans', sans-serif" }}>
                    <div class="container mt-2">
                        <div class="row row-30">
                            <div class="col-md-4 col-xl-5">
                                <div class="pr-xl-4"><a class="brand" href="#"><img class="brand-logo-light" src="" alt="" width="140" height="37" srcset="" /></a>
                                    <p></p>
                                    <p class="rights">
                                        <span>© 2019 AkshayKanna.All Rights Reserved </span>
                                    </p>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <h5 id="Contact">Contacts</h5>
                                <dl class="contact-list">
                                    <dt>Address:</dt>
                                    <dd>Thiruthangal,<br /> Sivakasi -626130 <br />Tamil Nadu</dd>
                                </dl>
                                <dl class="contact-list">
                                    <dt>Email:</dt>
                                    <dd><a href="akshaykanna120298@gmail.com">akshaykanna120298@gmail.com</a></dd>
                                </dl>
                                <dl class="contact-list">
                                    <dt>Phones:</dt>
                                    <dd><a href="tel:#">9626418340</a> <span>,</span> <a href="tel:#">9025114240</a>
                                    </dd>
                                </dl>
                            </div>
                            <div class="col-md-4 col-xl-3">
                                <h5>Links</h5>
                                <ul class="nav-list">
                                    <li><a href="#Home">Home</a></li>
                                    <li><a href="#Services">Services</a></li>
                                    <li><a href="#Hours">Hours</a></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}