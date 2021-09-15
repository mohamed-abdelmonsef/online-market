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
import { GiMoneyStack, GiClothes } from "react-icons/gi"
import { AiOutlineCar } from "react-icons/ai"
import { FaRoad } from "react-icons/fa";

//import classes from "./css/home.module.css";

export default class Home extends React.Component {


    render() {
        return (
            <div>
                <Header />
                <Slider />


                <section class="home p-5" style={{
                    //backgroundColor: 'whitesmoke'
                }}>

                    <div className="container" >
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mb-3">
                                <div class="card w-75" style={{
                                    width: "18rem;"
                                }}>
                                    <img src={first} class="card-img-top" alt="..." className="img-home" />
                                    <div class="card-body">
                                        <h5 class="card-title">Women</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Women</a>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mb-3">
                                <div class="card w-75" style={{
                                    width: "10rem;"
                                }}>
                                    <img src={second} class="card-img-top" alt="..." className="img-home" />
                                    <div class="card-body">
                                        <h5 class="card-title">Men</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Men</a>
                                    </div>
                                </div>
                            </div>
                            {/*  */}

                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mb-3">
                                <div class="card w-75" style={{
                                    width: "10rem;"
                                }}>
                                    <img src={third} class="card-img-top" alt="..." className="img-home" />
                                    <div class="card-body">
                                        <h5 class="card-title">Kids</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                        <a href="#" class="btn btn-primary">Kids</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}

                        <div className="home-4">

                            <h1 className="home-4-h text-center">
                                We bring best things <span className="for">For</span> clients

                            </h1>
                            <div className="row">
                                <div className="col"><GiMoneyStack className="icon-home" />
                                    <p class="card-text">Our prices are suitable for everyone
                                        and are equal to world market prices,Our prices are suitable for everyone
                                        and are equal to world market prices,Our prices are suitable for everyone
                                        and are equal to world market prices

                                    </p>
                                </div>
                                <div className="col"><AiOutlineCar className="icon-home" />
                                    <p class="card-text">We can help you and deliver anywhere in the world to keep you warm and stylish,
                                        We can help you and deliver anywhere in the world to keep you warm and stylish
                                        ,We can help you and deliver anywhere in the world to keep you warm and stylish</p>
                                </div>
                                <div className="col"><GiClothes className="icon-home" />
                                    <p class="card-text">
                                        Our clothes are made with the best types of fabrics, with love,
                                        especially for you .Our clothes are made with the best types of fabrics, with love,
                                        especially for youOur clothes are made with the best types of fabrics, with love,
                                        especially for you.</p>
                                </div>

                            </div>


                        </div>


                        {/*  */}

                        <div className="home-3 " >
                            <h2 className="home-eve">

                                <span className="for">For</span> you</h2>

                            <div className="row">
                                <div className="col">

                                    <img src={fourth} class="border-button"></img>
                                </div>
                                <div className="col">
                                    <h4 className="home-p">Fashion and garments take a big place in the minds of people, especially celebrities, where they show us the personality of the person who wears them. Fashion
                                        is a world that has developed over the years to become one of
                                        the most important trends of our time.</h4>
                                </div>


                            </div>
                        </div>
                    </div>

                    {/*  */}

                </section>

                <Footer />
            </div>

        )
    }
}