import React, { Component } from 'react'
import Navigation, { NavigationItem, FancyItem, BOTH, NO_AUTH_ONLY, AUTH_ONLY } from '../../components/Navigation';
import Image from "../../images/home_pic.jfif";
import style from "./css/home.module.css";
import Panair_blog from "./components/blog_card_panairi";
import Makerspace_blog from './components/blog_card_makerspace';
import Kk_blog from './components/blog_card_kk';
import Other_blog from './components/blog_card_other';


export default class Home extends Component {

  render() {
    return (
      <div>
        <Navigation>
          <NavigationItem link="/ligjerata" type={BOTH}>Ligjerata </NavigationItem>
          <NavigationItem link="/about" type={BOTH}>About Us</NavigationItem>
          <FancyItem link="/login" type={NO_AUTH_ONLY}>Login</FancyItem>
					<NavigationItem link="/profile" type={AUTH_ONLY}>Profile</NavigationItem>
          <FancyItem link="/signout" type={AUTH_ONLY}>Sign Out</FancyItem>
        </Navigation>

        <div className="container">
          <div className="row">
            <div className={`col-lg-8 ${style.image_container}`}>
              <img src={Image} alt="" className={style.image} />
            </div>
            <div className={`col-lg-4 text-center ${style.our}`}>
              <p id={style.mainT}>Xhevdet Doda</p>
              <p id={style.texti}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisl consequat mi feugiat tincidunt quis eget ipsum. Fusce maximus dictum volutpat. Cras nisi nibh, vestibulum ut ipsum eget, gravida fermentum sapien. Donec ornare, magna id lacinia venenatis, nunc sem sagittis erat, id consectetur risus velit ac arcu. Donec maximus porta purus, vel tristique orci ultricies id. Pellentesque quis suscipit turpis. Aenean feugiat ante sem, ac rhoncus quam gravida vel. Nullam sodales bibendum massa et malesuada. Etiam blandit porta pulvinar. Integer nulla quam, hendrerit sit amet dui non, scelerisque aliquet ex. Ut eleifend libero at malesuada ultricies. Nulla at sagittis quam, sed rhoncus magna. Phasellus eget eros metus .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisl consequat mi feugiat tincidunt quis eget ipsum. Fusce maximus dictum volutpat. Cras nisi nibh, vestibulum ut ipsum eget, gravida fermentum sapien. Donec ornare, magna id lacinia venenatis, nunc sem sagittis erat, id consectetur risus velit ac arcu. Donec maximus porta purus, vel tristique orci ultricies id. Pellentesque quis suscipit turpis. Aenean feugiat ante sem, ac rhoncus quam gravida vel. Nullam sodales bibendum massa et malesuada. Etiam blandit porta pulvinar. Integer nulla quam, hendrerit sit amet dui non, scelerisque aliquet</p>
            </div>
          </div>
        </div>
        <div className={` container ${style.main}`}>
          <div className={`row`}>
            <Panair_blog/>
            <Makerspace_blog/>
            <Kk_blog/>
            <Other_blog/>
          </div>
        </div>
      </div>

    )
  }
}
