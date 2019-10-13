import React, { Component } from 'react'
import style from "./CSS/BlogPost_CSS.module.css";
import { getMarkdownAsRawHTML } from '../../../api/general';


export default class Text extends Component {
    render() {
        return (
            <div className="col-lg-7 col-md-7 col-sm-12">

                    <p id={style.title}>{this.props.title}</p>
                    <p id={style.date}>{this.props.date}</p>
                    {this.props.desc !== undefined && <div id={style.text} dangerouslySetInnerHTML={getMarkdownAsRawHTML(this.props.desc)}></div>}
            </div>
        )
    }
}