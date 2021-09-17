import { detectOverflow } from "@popperjs/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import React from "react";
import Header from "./shared/header";
import Footer from "./shared/footer";
import one from './img/k11.webp'
import two from './img/k1.webp'
import three from './img/k2.webp'
import four from './img/k3.webp'
import five from './img/k4.webp'
import six from './img/k5.webp'
import seven from './img/k6.webp'
import eight from './img/k7.webp'
import nine from './img/k8.webp'
import ten from './img/k9.webp'
export default class KidsGallery extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-3">
                            <div class="card bg-light mb-3">
                                <div class="card-header  text-white text-uppercase" style={{ backgroundColor: '#002244' }} ><i class="fa fa-list"></i > Categories</div>
                                <ul class="list-group category_block">
                                    <li class="list-group-item"><Link to='/gallery/women' style={{ textDecoration: 'none' }}>Women</Link></li>
                                    <li class="list-group-item"><Link to='/gallery/men' style={{ textDecoration: 'none' }}>Men</Link></li>
                                    <li class="list-group-item"><Link to='/gallery/kids' style={{ textDecoration: 'none' }}>Kids</Link></li>

                                </ul>
                            </div>
                            <div class="card bg-light mb-3">
                                <div class="card-header bg-success text-white text-uppercase" >Best Seller</div>
                                <div class="card-body">
                                    <img class="img-fluid" src={one} />
                                    <h5 class="card-title">Gender-Neutral Matching</h5>
                                    <p class="card-text">Glow-In-The-Dark Hanukkah Snug-Fit Pajamas For Kids 30% off hurry </p>
                                    <p class="bloc_left_price">45.00 $</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-4 mb-3 ">
                                    <div class="card">
                                        <img class="card-img-top " src={two} alt="Card image cap" />
                                        <div class="card-body">
                                            <h4 class="card-title"><Link to="/product" title="View Product">Product title</Link></h4>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div class="row">
                                                <div class="col">
                                                    <p class="btn btn-danger btn-block">99.00 $</p>
                                                </div>
                                                <div class="col">
                                                    <a href="#" class="btn  btn-block" style={{ backgroundColor: '#002244', color: 'white' }}>Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                    <div class="card">
                                        <img class="card-img-top" src={three} alt="Card image cap" />
                                        <div class="card-body">
                                            <h4 class="card-title"><Link to="/product" title="View Product">Product title</Link></h4>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div class="row">
                                                <div class="col">
                                                    <p class="btn btn-danger btn-block">99.00 $</p>
                                                </div>
                                                <div class="col">
                                                    <a href="#" class="btn btn-block" style={{ backgroundColor: '#002244', color: 'white' }}>Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                    <div class="card">
                                        <img class="card-img-top" src={four} alt="Card image cap" />
                                        <div class="card-body">
                                            <h4 class="card-title"><Link to="/product" title="View Product">Product title</Link></h4>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div class="row">
                                                <div class="col">
                                                    <p class="btn btn-danger btn-block">99.00 $</p>
                                                </div>
                                                <div class="col">
                                                    <a href="#" class="btn  btn-block" style={{ backgroundColor: '#002244', color: 'white' }}>Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                    <div class="card">
                                        <img class="card-img-top" src={five} alt="Card image cap" />
                                        <div class="card-body">
                                            <h4 class="card-title"><Link to="/product" title="View Product">Product title</Link></h4>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div class="row">
                                                <div class="col">
                                                    <p class="btn btn-danger btn-block">99.00 $</p>
                                                </div>
                                                <div class="col">
                                                    <a href="#" class="btn  btn-block" style={{ backgroundColor: '#002244', color: 'white' }}>Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                    <div class="card">
                                        <img class="card-img-top" src={six} alt="Card image cap" />
                                        <div class="card-body">
                                            <h4 class="card-title"><Link to="/product" title="View Product">Product title</Link></h4>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div class="row">
                                                <div class="col">
                                                    <p class="btn btn-danger btn-block">99.00 $</p>
                                                </div>
                                                <div class="col">
                                                    <a href="#" class="btn btn-block" style={{ backgroundColor: '#002244', color: 'white' }}>Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                    <div class="card">
                                        <img class="card-img-top" src={seven} alt="Card image cap" />
                                        <div class="card-body">
                                            <h4 class="card-title"><Link to="/product" title="View Product">Product title</Link></h4>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div class="row">
                                                <div class="col">
                                                    <p class="btn btn-danger btn-block">99.00 $</p>
                                                </div>
                                                <div class="col">
                                                    <a href="#" class="btn btn-block" style={{ backgroundColor: '#002244', color: 'white' }}>Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                    <div class="card">
                                        <img class="card-img-top" src={eight} alt="Card image cap" />
                                        <div class="card-body">
                                            <h4 class="card-title"><Link to="/product" title="View Product">Product title</Link></h4>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div class="row">
                                                <div class="col">
                                                    <p class="btn btn-danger btn-block">99.00 $</p>
                                                </div>
                                                <div class="col">
                                                    <a href="#" class="btn  btn-block" style={{ backgroundColor: '#002244', color: 'white' }}>Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                    <div class="card">
                                        <img class="card-img-top" src={nine} alt="Card image cap" />
                                        <div class="card-body">
                                            <h4 class="card-title"><Link to="/product" title="View Product">Product title</Link></h4>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div class="row">
                                                <div class="col">
                                                    <p class="btn btn-danger btn-block">99.00 $</p>
                                                </div>
                                                <div class="col">
                                                    <a href="#" class="btn  btn-block" style={{ backgroundColor: '#002244', color: 'white' }}>Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                    <div class="card">
                                        <img class="card-img-top" src={ten} alt="Card image cap" />
                                        <div class="card-body">
                                            <h4 class="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div class="row">
                                                <div class="col">
                                                    <p class="btn btn-danger btn-block">99.00 $</p>
                                                </div>
                                                <div class="col">
                                                    <a href="#" class="btn  btn-block" style={{ backgroundColor: '#002244', color: 'white' }}>Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}