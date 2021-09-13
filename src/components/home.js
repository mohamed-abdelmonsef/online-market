import React from "react";
import Header from "./shared/header";
import Slider from "./shared/slider";
import Footer from "./shared/footer";
import first from '../components/img/home4.webp'
import second from '../components/img/home7.webp'
import third from '../components/img/home3.webp'
import fourth from '../components/img/home1.webp'
import fifth from '../components/img/home8.webp'
import sixth from '../components/img/home6.webp'



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
                        <div className="row">
                            <div className="col">
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
                            <div className="col">
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
                            <div className="col">
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
                        </div>
                        <div className="row">
                            <div className="col">
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
                            <div className="col">
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
                            <div className="col">
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