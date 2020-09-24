import React from 'react';
import logo from "../../Images/plane.jpg";
import Card from '../Card/Card';
import './Home.css'

const Home = () => {
    return (
        <div className="Home">
            <section id="header" className="">
                <div className="container-fluid nav-bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 mt-5 p-5 pt-lg-0 order-2 order-lg-1">
                                    <h1>Chose your destination from <strong className="brandName">Travel Guru</strong> </h1>
                                    <p className="mt-3">
                                    Travel Guru is one of the largest Travel and Tourism Company. We provide car rental services in very best price to suit our customer's needs.
                                    </p>
                                </div>
                                <div className="col-md-6 order-2 order-lg-1">
                                    <img className="img" src={logo} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Card></Card>
        </div>
    );
};
export default Home;