import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./css/blog_card.module.css";

export default class Makerspace_blog extends Component {
  render() {
    return (
      <div className={`col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12`}>
        <div id={style.body}>
          <p id={style.title}> makerspace</p>
          <p id={style.texti}  style={{overflowX:"hidden"}}>Diqka per makerspace</p>
          <div className={`text-center`}>
            <Link to={"/makerspace"}>
              <button className={`btn`} id={style.button}>
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
