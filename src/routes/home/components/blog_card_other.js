import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./css/blog_card.module.css";

export default class Other_blog extends Component {
  render() {
    return (
      <div className={`col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12`}>
        <div id={style.body}>
          <p id={style.title}> Aktivitete te tjera</p>
          <p id={style.texti}  style={{overflowX:"hidden"}}>Diqka per Aktivitetet e tjera te shkolles Xhevdet Doda: Pertej vijave</p>
          <div className={`text-center`}>
            <Link to={"/tjera"}>
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
