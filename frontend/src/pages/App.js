import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { userRoutes } from "../userRoutes";

// pages
import Preloader from "../components/Preloader";
import NotFound from './examples/NotFound';


import { useLocation } from 'react-router-dom';
import Signin from './examples/Signin';
import Signup from './examples/Signup';






const RouteWithNavFooter=(({ component: Component, ...rest })=>{
  const [loaded, setLoaded] = useState(false);
  const loc=useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

 

  return (
    <Route {...rest} render={props => (
      <>

        <Preloader show={loaded ? false : true} />
        <main className="container-fluid m-0 px-0" >
          <Navigation loc={loc.pathname}  />
          <Component {...props} />
          <FooterHome />
          </main>
      </>
    )}
    />
  );

});


export default () => (
  <Switch>
   
    
    <Route  path={userRoutes.Login.path} component={Signin} />
    <Route  path={userRoutes.Signup.path} component={Signup} />
    <Redirect from="/freelancerWeb" to="/" ></Redirect> 
    <Redirect from="/freelancer_web" to="/" ></Redirect> 
    <Route   path="*" component={NotFound} />
    
  
  </Switch>
);
