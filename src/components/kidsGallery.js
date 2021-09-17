import { detectOverflow } from "@popperjs/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Services from "../services/site.services";


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


    state = {
        products:[]
    }

    componentWillMount(){
        Services.getProducts('kids').then((res)=>{
            this.setState({
                products:res.data.products
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
                                    <h5 class="card-title">Gender-Neutral Matching</h5>
                                    <p class="card-text">Glow-In-The-Dark Hanukkah Snug-Fit Pajamas For Kids 30% off hurry </p>
                                    <p class="bloc_left_price">45.00 $</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">

                            {this.state.products.map((prod,index)=>{
                                return(
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
                                                    <a href="#" class="btn  btn-block" style={{ backgroundColor: '#002244', color: 'white' }}>Add to cart</a>
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