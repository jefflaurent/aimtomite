import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css';
import React from 'react';
import {Link} from 'react-scroll';

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top bg-custom p-3">
                <a className="navbar-brand title color-primary" href="#">
                    <img src={process.env.PUBLIC_URL + '/assets/home/logo.png'} alt="" className="nav-logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse w-100" id="navbarNav">
                    <div className="col-xl-7 col-lg-6 col-md-6 col-sm-6"></div>
                    <div className="navbar-nav col-xl-5 col-lg-6 col-md-6 col-sm-6">
                        <div className="nav-item active col-xl-4 col-lg-4">
                            <Link to="our-games" smoooth={true}>
                                <a className="nav-link color-primary title d-flex justify-content-start" style={{fontStyle: 'normal'}}>GAMES</a>
                            </Link>
                        </div>
                        <div className="nav-item col-xl-4 col-lg-4">
                            <Link to="about" smoooth={true}>
                                <a className="nav-link color-primary title d-flex justify-content-start" style={{fontStyle: 'normal'}}>ABOUT</a>
                            </Link>
                        </div>
                    </div>
                </div> 
            </nav>
            

            <nav className="navbar navbar-expand-lg bg-custom p-3 hide">
                <a className="navbar-brand title color-primary" href="#">
                    <img src={process.env.PUBLIC_URL + '/assets/home/logo.png'} alt="" className="nav-logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse w-100" id="navbarNav">
                    <div className="col-xl-7 col-lg-6 col-md-6 col-sm-6"></div>
                    <div className="navbar-nav col-xl-5 col-lg-6 col-md-6 col-sm-6">
                        <div className="nav-item active col-xl-4 col-lg-4">
                            <Link to="our-games" smoooth={true}>
                                <a className="nav-link color-primary title d-flex justify-content-start" style={{fontStyle: 'normal'}}>GAMES</a>
                            </Link>
                        </div>
                        <div className="nav-item col-xl-4 col-lg-4">
                            <Link to="about" smoooth={true}>
                                <a className="nav-link color-primary title d-flex justify-content-start" style={{fontStyle: 'normal'}}>ABOUT</a>
                            </Link>
                        </div>
                    </div>
                </div> 
            </nav>
        </div>

        
    );
}

export default NavBar;