import { detectOverflow } from "@popperjs/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Services from "../services/site.services";

import React from "react";
import Header from "./shared/header";
import Footer from "./shared/footer";
import one from './img/home4.webp'
import two from './img/w1.webp'
import three from './img/w2.webp'
import four from './img/w3.webp'
import five from './img/w4.jpg'
import six from './img/w5.webp'
import seven from './img/w6.webp'
import eight from './img/w7.webp'
import nine from './img/w8.webp'
import ten from './img/w9.webp'


export default class WomenGallery extends React.Component {

    state = {
        products: [],
        cartProd:[]
    }

    componentWillMount() {
        Services.getProducts('women').then((res) => {
            this.setState({
                products: res.data.products
            })
        })
    }

    componentDidMount(){
        let cartProds = JSON.parse(localStorage.getItem('cartArr'))
        this.setState({
            cartProd:cartProds
        })
    }

    componentWillUnmount(){
        localStorage.setItem('cartArr', JSON.stringify(this.state.cartProd))
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
                                    <h5 class="card-title">Gender-Neutral T-shirt for Adults</h5>
                                    <p class="card-text">This licensed graphic t-shirt is totally classic & gender neutral, too. Wearable & shareable for you, for him, for her, for them!.</p>
                                    <p class="bloc_left_price">40.00 $</p>
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
                                                    <h4 class="card-title"><Link to={{pathname:'/product',product:prod}}>{prod.title}</Link></h4>
                                                    <p class="card-text">{prod.desc}</p>
                                                    <div class="row">
                                                        <div class="col">
                                                            <p class="btn btn-danger btn-block">{prod.price}</p>
                                                        </div>
                                                        <div class="col">
                                                            <a href="#" onClick={() => {
                                                                this.state.cartProd.push(prod)
                                                            }} class="btn  btn-block" style={{ backgroundColor: '#002244', color: 'white' }}>Add to cart</a>
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