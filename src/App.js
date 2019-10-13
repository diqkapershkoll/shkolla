import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/home/Home';
import UndefinedRoute from './routes/404/UndefinedRoute';
import { PrivateRoute, PublicOnlyRoute } from "./routes/RouteType";
import Footer from './components/Footer';
import Panairi from './routes/blog-post/Panairi';
import logIn from './routes/log_in/log_in.js';
import AboutUs from './routes/about-us/AboutUs.js';
import SignOutRoute from './routes/sign_out/sign_out.js';
import Makerspace from './routes/blog-post/Makerspace';
import KK from './routes/blog-post/KK';
import Tjera from './routes/blog-post/Tjera';
import Ligjerata from './routes/Ligjeratat/Ligjeratat';
function App() {
  return (
    <React.Fragment>
      <div id="main">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/panairi" component={Panairi} />
            <Route exact path="/klubi-karrieres" component={KK} />
            <Route exact path="/makerspace" component={Makerspace} />  
            <Route exact path="/tjera" component={Tjera} />          
            <Route exact path="/ligjerata" component={Ligjerata}/>     
            <PublicOnlyRoute exact path="/login" component={logIn} />
            <Route exact path="/about" component={AboutUs} />
            <PrivateRoute exact path="/signout" component={SignOutRoute} />
            <Route component={UndefinedRoute} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
