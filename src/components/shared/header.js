import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {


    render() {
        return (
            <section>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid">
                            <a class="navbar-brand me-5" href="#"><span>B</span>rilliant</a>
                            <form class="d-flex ms-auto">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search .." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa fa-search"></i></button>
                                </div>
                            </form>
                            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <Link to="/Login">
                                            <button class="btn btn-secondary ">Sign In</button>

                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div >
            </section >
        )
    }
}