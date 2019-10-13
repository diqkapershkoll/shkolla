import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./css/UndefinedRoute.module.css";


export default class UndefinedRoute extends Component {
    render() {
        return (
            <div className={style.container}>
                <h1>404 - Page not found.</h1>
                <Link to="/" className="btn">Go Home.</Link>
            </div>
        );
    }
}
