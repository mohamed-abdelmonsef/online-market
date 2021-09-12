import React from "react";
import Header from "./shared/header";
import Slider from "./shared/slider";
import Footer from "./shared/footer";
import classes from "./css/home.module.css";

export default class Home extends React.Component{


    render(){
        return(
            <div>
                <Header />
                <Slider />

                <section>
                    <div className={classes.headerrr}>
                        coming home
                    </div>
                </section> 

                <Footer />
            </div>

        )
    }
}