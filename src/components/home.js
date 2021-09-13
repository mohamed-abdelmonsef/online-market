import React from "react";
import Header from "./shared/header";
import Slider from "./shared/slider";
import Footer from "./shared/footer";
import firsts from '../components/img/s1.jpg'
import seconds from '../components/img/s2.jpg'
import { Link } from "react-router-dom";
//import classes from "./css/home.module.css";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Slider />
                <section class="home" style={{
                    backgroundColor: 'whitesmoke'
                }}>
                    <div className="container">
                        <div className="row mb-3">
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div class="card w-75" style={{
                                    width: "18rem"
                                }}>
                                    <img src={firsts} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title e">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/product" class="btn btn-primary">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div class="card w-75" style={{
                                    width: "18rem"
                                }}>
                                    <img src={firsts} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div class="card w-75" style={{
                                    width: "18rem"
                                }}>
                                    <img src={firsts} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div class="card w-75" style={{
                                    width: "18rem"
                                }}>
                                    <img src={seconds} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div class="card w-75" style={{
                                    width: "18rem"
                                }}>
                                    <img src={seconds} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div class="card w-75" style={{
                                    width: "18rem"
                                }}>
                                    <img src={seconds} class="card-img-top" alt="..." />
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