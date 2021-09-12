import React from "react";
//import classes from './css/login.module.css'
import { BsFillCaretRightFill } from "react-icons/bs";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "./shared/footer";
//import Header from "./shared/header";

export default class Login extends React.Component {


    render() {
        return (

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
                        <section className="col-12 col-sm-6 col-md-3">
                            <form className="form">
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" />
                                    <label class="form-check-label" >Keep me logged in</label>
                                </div>
                                <button type="submit" class="btn loginbtn">Continue</button>
                                <div class="form-text">By signing in, you agree to our website's
                                    <font color='#46b5e8'> Condtions of Use</font> and <font color='#46b5e8'> Privacy Notice.</font></div>
                                <div className="help">  <BsFillCaretRightFill className='icon' /><font color='#46b5e8' >Need help?</font></div>
                            </form><br />
                            <div className="line">
                                <span className="new" >
                                    New to our site?
                                </span>
                            </div><br />
                            <button type="button" class="btn btn-primary" id="btn" >Create your account</button>
                        </section>
                    </section>
                </div>
                <Footer />
            </section>
        )
    }
}