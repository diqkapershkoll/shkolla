import React from "react";
import style from './CSS/BlogPost_CSS.module.css';
import { deleteBlogComment } from "../../../api/blog";

export default class Comment extends React.Component {
    ondelete=()=>
    {
        deleteBlogComment(this.props.id)
        window.location.reload()
    }
    render() {
        return (
            <div className={style.big}>
                <div className={`text-align-center ${style.image_container}`}>
                    <img src={"http://localhost:8000" + this.props.image} alt="" className={style.image} />
                </div>
                <div className={style.content}>
                    <div className="row">
                        <h5 className={style.title}>{this.props.name}</h5>
                        <h6 className={style.date}><i>{this.props.date}</i></h6>
                    </div>
                    {
                        this.props.url ? <a href={'http://localhost:8000'}>    Download Attachment</a> : ''
                    }
                    <div className={style.text}>{this.props.desc}

                    </div>
                </div>
                <div>
                    {this.props.admin ? <button className="btn" onClick={this.ondelete}>Delete</button> : ""}
                </div>
            </div>
        )
    }
}
