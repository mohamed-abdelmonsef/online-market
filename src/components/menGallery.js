import { detectOverflow } from "@popperjs/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import React from "react";
import Header from "./shared/header";
import Footer from "./shared/footer";
import first from './img/home4.webp'
import second from './img/home7.webp'
import third from './img/home3.webp'
import fourth from './img/home1.webp'
import fifth from './img/home8.webp'
import sixth from './img/home6.webp'

export default class MenGallery extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <section>
                    <div className="gallery-header">
                        <ul class="nav nav-pills nav-fill">
                            <li class="nav-item">
                                <Link to="/gallery/men">
                                    <button class="nav-link active">Men</button>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/gallery/women">
                                    <button class="nav-link">Women</button>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/gallery/kids">
                                    <button class="nav-link">Kids</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="home" style={{
                    backgroundColor: 'whitesmoke',
                    padding: '60px'
                }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                                <div class="card w-75" style={{
                                    width: "18rem;"
                                }}>
                                    <img src={first} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                                <div class="card w-75" style={{
                                    width: "18rem;"
                                }}>
                                    <img src={second} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                                <div class="card w-75" style={{
                                    width: "18rem;"
                                }}>
                                    <img src={third} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                                <div class="card w-75" style={{
                                    width: "18rem;"
                                }}>
                                    <img src={fourth} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                                <div class="card w-75" style={{
                                    width: "18rem;"
                                }}>
                                    <img src={fifth} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                                <div class="card w-75" style={{
                                    width: "18rem;"
                                }}>
                                    <img src={sixth} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}