import React, { Component } from 'react';
import style from './css/log_in.module.css';
import logo from '../../images/Logo.png';
import { authenticateUser } from "../../api/auth";
import {Link, Redirect,BrowserRouter as Router ,Route, withRouter} from "react-router-dom"; 
export default class logIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      authFail: false,
      redirect: false,
      status: "",
    }
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser(this.state.username, this.state.password).then(result => {
      if (result.status === 200) {
        localStorage.setItem("token", result.data.token);
        this.setState({ authFail: false, redirect: true });
      }
    }).catch(err => {
      this.setState({ authFail: true, redirect: false, status: "Wrong username/password." })
    });
    
  }


  render() {
    return (
      <React.Fragment>
        {!this.state.redirect ? <React.Fragment>
          <div className="body">
            <div className="container">
              <Link to='/'>
                <div className={`d-flex justify-content-center `}>
                  <img src={logo} alt="" id={style.logo} />
                </div>
              </Link>
              <div className="row">
                <div className={`offset-lg-4 col-lg-4 ${style.log_in_container}`}>
                  <div className="d-flex justify-content-center">
                    <center>
                      <h1 className={style.header}>
                        Login to Xhevdet Doda
                      </h1>
                    </center>
                  </div>
                  <form  onSubmit={this.handleSubmit}>
                    <input type="email" placeholder="email" required className={style.input} onChange={this.handleUsernameChange} />
                    <input type="password" placeholder="password" required className={style.input} onChange={this.handlePasswordChange} />
                    <input type="submit" className={style.button} value="Login"></input>
                  </form>
                  {
                    this.state.authFail ? <p className="sign-up-information">{this.state.status}</p> : ""
                  }
                </div>
              </div>
            </div>
          </div>
        </React.Fragment> : <Redirect to="/" />}
      </React.Fragment>
    )
  }
}
