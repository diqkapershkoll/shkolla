import React, { Component } from 'react'
import Navigation, { NavigationItem, FancyItem, BOTH, AUTH_ONLY, NO_AUTH_ONLY } from '../../components/Navigation';
import TextSide from './components/TextSide'
import PhotoSide from './components/PhotoSide'
import style from './components/CSS/aboutUs.module.css'



export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <Navigation>
                    <NavigationItem link="/" type={BOTH}>Home</NavigationItem>
                    <NavigationItem link="/ligjerata" type={BOTH}>Ligjerata </NavigationItem>
                    <FancyItem link="/login" type={NO_AUTH_ONLY}>Login</FancyItem>
					<NavigationItem link="/profile" type={AUTH_ONLY}>Profile</NavigationItem>
                    <FancyItem link="/signout" type={AUTH_ONLY}>Sign Out</FancyItem>
                </Navigation>

                <div className={`container`} >
                    <div className='row' id={style.main}>
                        <PhotoSide/>
                        <TextSide/>
                    </div>
                </div>
            </div>
        )
    }
}