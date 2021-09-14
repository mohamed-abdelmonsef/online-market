import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "./shared/footer";
import Header from "./shared/header";


export default class Register extends React.Component {


    render() {
        return (
            <div>
                <section className="navSec">
                    <Header />
                    <div className="container-fluid mb-5 mt-5">
                        <section className="row justify-content-center">
                            <section className="col-12 col-sm-6 col-md-6 col-lg-3">
                                <form className="form">
                                    <div class="mb-3">
                                        <label class="form-label">Email address</label>
                                        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="your email please" />
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Password</label>
                                        <input type="password" class="form-control" minlength="5" placeholder="At Least 6 characters" />
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Mobile</label>
                                        <input type="tel" class="form-control" placeholder="+123" />
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Address</label>
                                        <input type="text" class="form-control" placeholder="your adress please" />
                                    </div>

                                    <div class="mb-3">
                                        < div class="row">
                                            <div class="col-4">
                                                <label class="form-label">Gender</label>
                                            </div>
                                            <div class="col-4">
                                                <input type="radio" id="contactChoice1"
                                                    name="contact" value="Male" />
                                                <label for="contactChoice1" className="ms-1">Male</label>
                                            </div>
                                            <div class="col-4">
                                                <input type="radio" id="contactChoice1"
                                                    name="contact" value="Female" />
                                                <label for="contactChoice1" className="ms-1">Female</label>
                                            </div>
                                        </div>



                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" />
                                        <label class="form-check-label" >Keep me logged in</label>
                                    </div>
                                    <div class="row justify-content-center">
                                        <button type="submit" class="btn loginbtn">Sign up!</button>
                                    </div>


                                </form><br />
                                <div className="line ">
                                    <p className="new" >
                                        Aleardy have an account?

                                    </p>
                                </div>
                                <div className="mt-2">
                                    <Link to="/Login">
                                        <button type="button" class="btn btn-primary  w-100 mt-2" id="btn" >Sign in</button>
                                    </Link>

                                </div>


                            </section>
                        </section>
                    </div>
                    <Footer />
                </section>
            </div>
        )
    }
}