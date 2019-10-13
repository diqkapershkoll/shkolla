import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/Logo.png";
import style from "../css/navigation/Navigation.module.css"

export const AUTH_ONLY = "AUTH_ONLY";
export const BOTH = "BOTH";
export const NO_AUTH_ONLY = "NO_AUTH_ONLY";
export const ADMIN_ONLY = "ADMIN_ONLY";

export default class Navigation extends Component {
    render() {
        return (
            <nav className={`navbar navbar-expand-md ${style.nav}`}>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="">
                <img src={Logo} alt="" className={`navbar-brand my-auto ${style.logo}`} />
                </Link>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className={`navbar-nav ml-auto ${style.navbar_nav}`}>
                    {
                        this.props.children
                    }
                    </ul>
                </div>
            </nav>
        )
    }
}

export class NavigationItem extends Component {
    render() {
        if (localStorage.getItem("token") && this.props.type === NO_AUTH_ONLY) {
            return "";
        }
        if (!localStorage.getItem("token") && this.props.type === AUTH_ONLY) {
            return "";
        }
        else {
            return (
                <div className={`nav-item ${style.nav_item}`}>
                    <Link className={`nav-link`} to={this.props.link}>{this.props.children}</Link>
                </div>
            )
        }
    }
}

export class FancyItem extends Component {
    render() {
        if (localStorage.getItem("token") && this.props.type === NO_AUTH_ONLY) {
            return "";
        }
        if (!localStorage.getItem("token") && this.props.type === AUTH_ONLY) {
            return "";
        }
        else {
            return (
                <div className={`nav-item text-center my-auto ${style.fancy} ${style.nav_item} `}>
                    <Link className={`nav-link`} to={this.props.link}>{this.props.children}</Link>
                </div>
            )
        }
    }
}