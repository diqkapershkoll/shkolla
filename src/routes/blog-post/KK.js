import React, { Component } from 'react';
import TextSide from './components/TextSide';
import style from "./components/CSS/BlogPost_CSS.module.css";
import Navigation, { NavigationItem, FancyItem, BOTH, AUTH_ONLY, NO_AUTH_ONLY } from '../../components/Navigation';


import p1 from './../../images/panairi/p1.jpg';
import p2 from './../../images/panairi/p2.jpg';
import p3 from './../../images/panairi/p3.jpg';
import p4 from './../../images/panairi/p4.jpg';
import p5 from './../../images/panairi/p5.jpg';

export default class KK extends Component {
    render() {
        return (
            <div>
                <Navigation>
                    <NavigationItem link="/" type={BOTH}>Home</NavigationItem>
                    <NavigationItem link="/blogs" type={BOTH}>Blog</NavigationItem>
                    <NavigationItem link="/issues" type={AUTH_ONLY}>Challenges</NavigationItem>
                    <NavigationItem link="/about" type={BOTH}>About Us</NavigationItem>
                    <NavigationItem link="/signup" type={NO_AUTH_ONLY}>Sign Up</NavigationItem>
                    <FancyItem link="/login" type={NO_AUTH_ONLY}>Login</FancyItem>
                    <NavigationItem link="/profile" type={AUTH_ONLY}>Profile</NavigationItem>
                    <FancyItem link="/signout" type={AUTH_ONLY}>Sign Out</FancyItem>
                </Navigation>

                <div className="container-fluid">
                    <div className="row" id={style.main}>
                        <div className="col-lg-5 col-md-5 col-sm-12">

                            <div id="demo" className="carousel slide" data-ride="carousel">

                                <ul className="carousel-indicators">
                                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                                    <li data-target="#demo" data-slide-to="1"></li>
                                    <li data-target="#demo" data-slide-to="2"></li>
                                    <li data-target="#demo" data-slide-to="3"></li>
                                    <li data-target="#demo" data-slide-to="4"></li>
                                </ul>

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={p1} className={style.foto} ></img>
                                    </div>

                                    <div className="carousel-item">
                                        <img src={p2} className={style.foto} ></img>
                                    </div>

                                    <div className="carousel-item">
                                        <img src={p3} className={style.foto}></img>
                                    </div>

                                    <div className="carousel-item">
                                        <img src={p4} className={style.foto}></img>
                                    </div>

                                    <div className="carousel-item">
                                        <img src={p5} className={style.foto}></img>
                                    </div>
                                </div>

                                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </a>
                                <a className="carousel-control-next" href="#demo" data-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </a>

                            </div>
                        </div>

                        <TextSide desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisl consequat mi feugiat tincidunt quis eget ipsum. Fusce maximus dictum volutpat. Cras nisi nibh, vestibulum ut ipsum eget, gravida fermentum sapien. Donec ornare, magna id lacinia venenatis, nunc sem sagittis erat, id consectetur risus velit ac arcu. Donec maximus porta purus, vel tristique orci ultricies id. Pellentesque quis suscipit turpis. Aenean feugiat ante sem, ac rhoncus quam gravida vel. Nullam sodales bibendum massa et malesuada. Etiam blandit porta pulvinar. Integer nulla quam, hendrerit sit amet dui non, scelerisque aliquet ex. Ut eleifend libero at malesuada ultricies. Nulla at sagittis quam, sed rhoncus magna. Phasellus eget eros metus .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisl consequat mi feugiat tincidunt quis eget ipsum. Fusce maximus dictum volutpat. Cras nisi nibh, vestibulum ut ipsum eget, gravida fermentum sapien. Donec ornare, magna id lacinia venenatis, nunc sem sagittis erat, id consectetur risus velit ac arcu. Donec maximus porta purus, vel tristique orci ultricies id. Pellentesque quis suscipit turpis. Aenean feugiat ante sem, ac rhoncus quam gravida vel. Nullam sodales bibendum massa et malesuada. Etiam blandit porta pulvinar. Integer nulla quam, hendrerit sit amet dui non, scelerisque aliquet" date="07/03/2019" title="Klubi i karrieres" />

                    </div>
                </div>
            </div>
        )
    }
}