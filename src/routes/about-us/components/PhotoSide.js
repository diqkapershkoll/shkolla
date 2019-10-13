import React, { Component } from 'react';
import style from "./CSS/aboutUs.module.css";
import hello from "./../../../images/goup.png";

export default class Text extends Component {
    render() {
        return (
            <div className='col-lg-12 col-md-12 col-sm-12'>
                <div className='text-center'>  
                    <img src={hello} alt="" className={style.photos}></img>                
                </div>
            </div>
        )
    }
}