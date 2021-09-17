import { detectOverflow } from "@popperjs/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Services from "../services/site.services";

import React from "react";
import Header from "./shared/header";
import Footer from "./shared/footer";
import one from './img/home6.webp'
import two from './img/g1.webp'
import three from './img/g7.webp'
import four from './img/g3.webp'
import five from './img/g4.jpg'
import six from './img/g5.webp'
import seven from './img/g8.webp'
import eight from './img/g2.webp'
import nine from './img/g6.jpg'
import ten from './img/g9.webp'





export default class MenGallery extends React.Component {
    state = {
        products: []
    }

    componentWillMount() {
        Services.getProducts('men').then((res) => {
            this.setState({
                products: res.data.products
            })
        })
    }


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
                                    <h5 class="card-title">Vintage Gender-Neutral Jogger Sweat Pants for Adults</h5>
                                    <p class="card-text">Elasticized rib-knit waistband, with adjustable drawstring.</p>
                                    <p class="bloc_left_price">50.00 $</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">

                                {this.state.products.map((prod, index) => {
                                    return (

                                        <div class="col-12 col-md-6 col-lg-4 mb-3 " key={index}>
                                            <div class="card">
                                                <img class="card-img-top " src={two} alt="Card image cap" />
                                                <div class="card-body">
                                                    <h4 class="card-title"><Link to="/product" title="View Product">{prod.title}</Link></h4>
                                                    <p class="card-text">{prod.desc}</p>
                                                    <div class="row">
                                                        <div class="col">
                                                            <p class="btn btn-danger btn-block">{prod.price}</p>
                                                        </div>
                                                        <div class="col">
                                                            <a href="#" class="btn btn-block" style={{ backgroundColor: '#002244', color: 'white' }}>Add to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}