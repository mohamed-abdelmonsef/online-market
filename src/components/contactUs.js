import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "./shared/footer";


export default class Contact extends React.Component {


    render() {
        return (
            <div>
                <section className="navSec">
                    <div className="page">
                        <div className="header">

                            <nav aria-label="breadcrumb" className="mt-2">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li class="breadcrumb-item"><Link to="/Dashboard">Dashboard</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Login</li>
                                </ol>
                            </nav>
                            <a class="navbar-brand me-5" href="#"><span>B</span>rilliant</a>
                        </div>
                    </div>

                    <div className="container-fluid mb-5 mt-5">
                        <div class="row justify-content-center">


                            <div class="col-6">
                                <h1 class="contact-h">LIFE<br />
                                    IT COULD BE <br />
                                    JUST THE THING<br />
                                    YOUR BRAND<br />
                                    NEEDS.</h1>

                            </div>
                            <div class="col-4">
                                <form className="form">
                                    <div class=" justify-content-center">
                                        <h1 class="contact-header">Contact Us</h1>
                                    </div>

                                    <div class="mb-3">


                                        <label class="form-label">name</label>
                                        <input type="text" class="form-control" placeholder="your name please" />
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Email address</label>
                                        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="your email please" />
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">Mobile</label>
                                        <input type="tel" class="form-control" placeholder="+123" />
                                    </div>
                                    <div class="mb-3 justify-content-center">
                                        <div class="form-group green-border-focus">
                                            <label class="form-label" >Your massage</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea5" rows="3" placeholder="be nice please"></textarea>
                                        </div>
                                    </div>

                                    <div class="row justify-content-center">
                                        <button type="submit" class="btn loginbtn">send it!</button>
                                    </div>

                                </form>
                            </div>


                        </div>
                    </div>
                    <Footer />
                </section>
            </div>
        )
    }
}