import React from "react";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi"
import { FaGem } from "react-icons/fa"

export default class Header extends React.Component {
    render() {
        return (
            <section>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid">
                            {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button> */}
                            <span class="navbar-toggler-icon  btn-lg me-4 bg-light" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"></span>
                            <Link class="navbar-brand me-5" to="/"><span ><FaGem className="Logo" /><span className="Logo2"><i style={{ color: '#EAEAE1' }}>B</i><b style={{ color: '#EAEAE1' }}>rilliant</b></span></span></Link>
                            {/* <form class="d-flex ms-auto">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search .." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa fa-search"></i></button>
                                </div>
                            </form> */}
                            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <Link to="/Login">
                                            <button class="btn btn-secondary ">Sign In</button>

                                        </Link>&nbsp;
                                        <Link to="/cart">
                                            <button class="btn btn-secondary "><i>Cart </i><BiCart /></button>

                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div >
                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title h1" id="offcanvasWithBothOptionsLabel">Menu</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div className="mt-5">
                            <ul>
                                <li className="mb-2">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/gallery">Categories</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/cart">Cart</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/contact">Contact Us</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/aboutus">About Us
                                    </Link>
                                </li>
                            </ul>
                            <Link to="/Login">
                                <button className="btn btn-warning btn-lg rounded-pill mt-4 ">Sign in</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}