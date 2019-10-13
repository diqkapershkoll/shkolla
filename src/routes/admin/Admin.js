import React, { Component } from 'react';
import style from "./css/admin.module.css";
import { createBlog } from "../../api/blog";
import Navigation, { NavigationItem, FancyItem, BOTH, AUTH_ONLY } from '../../components/Navigation';
import { getCategories, createCategory } from "../../api/blog";
import { createIssue } from "../../api/issue";
import MarkdownViewer from '../../components/markdown/MarkdownViewer';
export default class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: '',
            image: '',
            category: '',
            categoryCreatedName: '',
            editing: false,
            categories: {},
            item: "",
            }
        }

  

    addCategory = (e) => {
        e.preventDefault();
        if (this.state.categoryCreatedName === '') {
            return;
        }
        let data = new FormData();
        data.append("name", this.state.categoryCreatedName);
        createCategory(data).then(() => {
            getCategories().then(result => {
                this.setState({
                    categories: result.data,
                    editing: false
                })
            })
        })
    }

    toggleEditing = (e) => {
        e.preventDefault();
        this.setState({ editing: !this.state.editing });
    }

    componentWillMount = () => {
        getCategories().then(result => {
            this.setState({
                categories: result.data
            })
        })
    }

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    onDescChange = (val) => {
         this.setState({
             desc: val
         })
    }
    onImageChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    }
    onCategoryChange = (e, category) => {
        e.preventDefault();
        this.setState({
            category
        })
    }
    post = (e) => {
        e.preventDefault();
        var data = new FormData();
        data.append("title", this.state.title)
        data.append("description", this.state.desc)
        data.append("photo", this.state.image)
        data.append("category", this.state.category)
        if (this.state.item === "Blog") {
            createBlog(data)
        }
        if (this.state.item === "Issue") {
            createIssue(data)
        }
    }
    populateCategories = () => {
        let buttons = [];
        Object.values(this.state.categories).forEach(value => {
            buttons.push(<button key={value.id} className="dropdown-item" onClick={(e) => this.onCategoryChange(e, value.id)} style={{ width: "100%", borderRadius: "0px", fontSize: "15px", wordWrap: "break-word", overflowX: "auto", boxShadow: "0px 0px" }} id="butt">{value.name}</button>)
        })
        buttons.push(<center><button className="btn" onClick={this.toggleEditing}>+</button></center>)
        return buttons;

    }
    getItemName = (e, item) => {
        e.preventDefault()
        this.setState({
            item
        })

    }
    render() {
        return (
            <div>
                <div>
                <Navigation>
                    <NavigationItem link="/" type={BOTH}>Home</NavigationItem>
                    <NavigationItem link="/issues" type={AUTH_ONLY}>Challenges</NavigationItem>
                    <NavigationItem link="/about" type={BOTH}>About Us</NavigationItem>
                    <NavigationItem link="/blogs" type={BOTH}>Blogs</NavigationItem>
                    <NavigationItem link="/profile" type={AUTH_ONLY}>Profile</NavigationItem>
                    <FancyItem link="/signout" type={AUTH_ONLY}>Sign Out</FancyItem>
                </Navigation>
                <div>
                    <div></div>
                    <div className='offset-lg-2 col-lg-8'>
                        <form className="form row" onSubmit={this.post}>
                            <div className="dropdown offset-lg-3 col-lg-6 mt-5">
                                <button className="form-control col-lg-12 dropdown-toggle" data-toggle="dropdown" style={{ backgroundColor: "#DEDEDE", color: "black" }}>{this.state.item ? "Item: " + this.state.item : "Choose Item"}</button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <button onClick={(e) => this.getItemName(e, "Blog")} className="dropdown-item" style={{ width: "100%", borderRadius: "0px", fontSize: "15px", wordWrap: "break-word", overflowX: "auto", boxShadow: "0px 0px" }} id="butt">Blogs</button>
                                    <button onClick={(e) => this.getItemName(e, "Issue")} className="dropdown-item" style={{ width: "100%", borderRadius: "0px", fontSize: "15px", wordWrap: "break-word", overflowX: "auto", boxShadow: "0px 0px" }} id="butt">Issues</button>
                                </div>
                            </div>
                            <label className={`offset-lg-3 col-lg-3 ${style.label}`}>Title:</label>
                            <input type="text" className="form-control offset-lg-3 col-lg-6" placeholder="Title" onChange={this.onTitleChange} /><br />
                            <label className={`offset-lg-3 col-lg-3 ${style.label}`}>Description:</label>
                            <MarkdownViewer onSubmit={this.onDescChange}></MarkdownViewer>
                            {/* <input type="text" className="form-control offset-lg-3 col-lg-6" placeholder="Description"/>*/}<br/> 

                            <label className={`offset-lg-3 col-lg-3 ${style.label}`}>Image:</label>
                            <input type="file" className="offset-lg-3 col-lg-6" placeholder="Image" onChange={this.onImageChange} /><br />
                            {this.state.item === "Blog" ?
                                <div className="offset-lg-3 col-lg-6">
                                    <label className={`${style.label}`} style={{ width: "100%" }}>Category:</label>
                                    <div className="dropdown col-lg-12">
                                        <button className=" col-lg-12 dropdown-toggle form-control" data-toggle="dropdown" style={{ backgroundColor: "#DEDEDE", color: "black" }}>Choose Category:</button>
                                        <div className="dropdown-menu">
                                            {this.populateCategories()}
                                        </div>
                                    </div>
                                </div> : ""}
                            {
                                this.state.editing ?
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="row">
                                            <input type="text" placeholder="Category Name" style={{ width: "70%", marginLeft: "5%" }} className="form-control" onChange={(e) => this.setState({ categoryCreatedName: e.target.value })} />
                                            <button onClick={this.addCategory} style={{ width: "13%" }} className="btn btn-primary">Create</button>
                                            <button onClick={this.toggleEditing} style={{ width: "7%" }} className="btn btn-danger">X</button>
                                        </div></div> : ""
                            }
                            <input type="submit" className={`btn offset-lg-4 col-lg-4 btn-secondary ${style.submit}`} />
                        </form>
                    </div>
                </div>
                </div>
                </div>
        )
    }
}
