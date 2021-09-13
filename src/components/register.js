import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "./shared/footer";


export default class Register extends React.Component {


    render() {
        return (
            <div>
                <section className="navSec">
                    <div className="page">
                        <div className="header">
                            {/* <NavLink exact activeClassName="active" to="/">Home</NavLink>
                        <NavLink activeClassName="active" to="/Login">Login</NavLink>
                        <NavLink activeClassName="active" to="/Dashboard">Dashboard</NavLink> */}

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
                        <section className="row justify-content-center">
                            <section className="col-4">
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
                                            <div class="col-sm">
                                                <label class="form-label">Gender</label>
                                            </div>

                                            <div class="col-sm">
                                                <input type="radio" id="contactChoice1"
                                                    name="contact" value="Male" />
                                                <label for="contactChoice1">Male</label>
                                            </div>
                                            <div class="col-sm">
                                                <input type="radio" id="contactChoice1"
                                                    name="contact" value="Female" />
                                                <label for="contactChoice1">Female</label>
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
                                        <button type="button" class="btn btn-primary mt-2 ms-5" id="btn" >Create your account</button>
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