import React, { Component } from 'react'
import style from "../css/footer/Footer.module.css";
export default class Footer extends Component {
    render() {
        return (
            <div className={`${style.sticky_footer}`}>
                <div className="container text-center page-footer">
                    <small>Copyright &copy; 2019 - Xhevdet Doda High School</small>
                </div>
            </div>
        )
    }
}
