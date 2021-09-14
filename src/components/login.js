import React from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "./shared/footer";
import { FaCrown } from "react-icons/fa"

export default class Login extends React.Component {


    render() {
        return (

            <section className="navSec">
                <div className="page">
                    <section>
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <div class="container-fluid">
                                <Link class="navbar-brand me-5" to="/"><span ><FaCrown className="Logo fa-spin" /><span className="Logo2"><i style={{ color: 'whitesmoke' }}>B</i><b style={{ color: '#f5f50c' }}>rilliant</b></span></span></Link>
                                <form class="d-flex ms-auto">
                                    <div class="input-group">
                                        <Link to="/">
                                            <button class="btn btn-secondary "> Home</button>
                                        </Link>&nbsp;
                                    </div>
                                </form>
                                <button class="navbar-toggler justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </nav>
                    </section>
                </div>
                <div className="container-fluid mb-5 mt-5">
                    <section className="row justify-content-center">
                        <section className="col-12 col-sm-6 col-md-6 col-lg-3">
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
                                <div class="row justify-content-center">
                                    <button type="submit" class="btn loginbtn">Continue</button>
                                </div>
                                <div class="form-text">By signing in, you agree to our website's
                                    <font color='#46b5e8'> Condtions of Use</font> and <font color='#46b5e8'> Privacy Notice.</font></div>
                                <div className="help">  <BsFillCaretRightFill className='icon' /><font color='#46b5e8' >Need help?</font></div>
                            </form><br />
                            <div className="line">
                                <span className="new" >
                                    New to our site?
                                </span>
                            </div><br />
                            <div className="row">
                                <div className="col-12">
                                    <Link to="/register">
                                        <button type="button" class="btn btn-primary w-100" id="btn" >Create your account</button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
                <Footer />
            </section>
        )
    }
}