import React, { Component } from 'react'
import style from '../CSS/Ligjerata.module.css'

export default class Audiofile extends Component {
    render() {
        return (
            <div className='col-lg-5'>
                <figure>
                    <figcaption >{this.props.titulli}</figcaption>
                    <audio controls src={this.props.muzika} id="kresha" className={style.kang}>
                        Your browser does not support the
                    <code>audio</code> element.
                    </audio>
                </figure>
            </div>
        )
    }
}

