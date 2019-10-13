import React, { Component } from 'react';
import {Route, Redirect} from "react-router-dom";
import { isAdmin } from "../api/auth";

export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => localStorage.getItem("token") !== null ? (
    <Component {...props} />) : <Redirect to={{pathname: "/login", state: { from: props.location}}}/>}/>
);

export const PublicOnlyRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => localStorage.getItem("token") === null ? (
    <Component {...props} />) : <Redirect to={{pathname: "/login", state: { from: props.location}}}/>}/>
);

export class AdminOnlyRoute extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            admin:{},
            redirect:{}
        }
    }

        componentDidMount() {
            isAdmin().then(result => {
                console.log(result.data)
                this.setState({
                    redirect: result.data
                })
            })

        }

        // render() {
        // return(
        //     <div>
        //         {
        //         this.state.admin.data==true ?<Redirect to="/admin"/>
        //         :
        //         <Redirect to="/"/>
        //         }
        //     </div>
        // )
        // }

        render(){
            const {component, ...rest}=this.props;
            return (<Route 
              {...rest}
              render = {(props) => {
                if(!this.state.redirect  || localStorage.getItem("token") === null) {
                  return <Redirect to="/"/>
                } 
                return React.createElement(component, props);
              }}
            />)
            }

}