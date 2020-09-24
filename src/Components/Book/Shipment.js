import React from 'react';
import './Shipment.css';
import logo from "../../Images/Rectangle 26.png";
import logo2 from "../../Images/Rectangle 27.png";
import logo3 from "../../Images/Rectangle 28.png";

const Shipment = () => {
    
    return (
    <div className="Shipment">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <p>252 stays Apr 13-173 guests</p>
                    <h3>Stay in Cox's Bazar</h3>
                    <div className="row" >
                        <div className="col-md-3">
                                <img src={logo} alt="" className="mt-3"/>
                                <img src={logo2} alt=""/>
                                <img src={logo3} alt=""/>
                        </div>
                        <div className="col-md-3">
                            <div className="info">
                                <h6 className="mt-3">Light bright airy stylish apt & safe peaceful stay</h6>
                                <p>4 guest 2 bedrooms 2 beds 2 baths</p>
                                <p>Wif Air Conditioning Kitchen</p>
                                <p>Cancellation fexibility available</p>
                            </div>
                            <div className="info">
                                <h6 className="mt-5">Apartment in Lost Panorama</h6>
                                <p>4 guest 2 bedrooms 2 beds 2 baths</p>
                                <p>Wif Air Conditioning Kitchen</p>
                                <p>Cancellation fexibility available</p>
                            </div>
                            <div className="info">
                                <h6 className="mt-5">AR Lounge & Pool (r&r + b&b)</h6>
                                <p>4 guest 2 bedrooms 2 beds 2 baths</p>
                                <p>Wif Air Conditioning Kitchen</p>
                                <p>Cancellation fexibility available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
    );
};

export default Shipment;