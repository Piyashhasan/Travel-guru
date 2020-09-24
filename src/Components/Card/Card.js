import React from 'react';
import './Card.css';
import logo from "../../Images/sundorbon.png";
import logo2 from "../../Images/Sajek.png";
import logo3 from "../../Images/Sreemongol.png";
import { NavLink  } from 'react-router-dom';

const Card = () => {
    
    return (
    <div className="Card">
            <h2 className="text-center text-danger mt-5 mb-5">Our Package</h2>
        
        <div className="row mx-auto text-center">
            <div className="col-md-3 mx-auto text-center">
                <div class="card">
                    <img src={logo} alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">Sundarban</h5>
                        <p class="card-text">Sundarban Tour Package - an adventure in tiger's den. The mangrove forest Sundarbans, a World Heritage site and the in the world.</p>
                        <NavLink to="/login" class="btn btn-warning">Click for booking</NavLink>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mx-auto text-center">
                <div class="card">
                    <img  src={logo2} alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">Sajek Vally</h5>
                        <p class="card-text">Sajek Valley and Khagrachari two days one night standard tour package has private car / coach for sightseeing,1 night at Sagor resort or similar.</p>
                        <NavLink to="/login" class="btn btn-warning">Click for booking</NavLink>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mx-auto text-center">
                <div class="card">
                    <img src={logo3} alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">Sreemongol</h5>
                        <p class="card-text">Tours, excursions, and adventures in Sylhet & Srimangal to enjoy it's tea plantations, waterfalls, tribal villages, wildlife, trekking. Check now!</p>
                        <NavLink to="/login" class="btn btn-warning">Click for booking</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Card;