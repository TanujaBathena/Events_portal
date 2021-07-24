import { React, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Auth from "./auth";
import Login from "./login";
import axios from "axios";
import auth from "./auth";
const Protectedroutes = ({ component: Component, ...rest }) => {
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    axios
      .get("http://localhost:4444/checkauth", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data !== "notloggedin") {
          Auth.login();
          console.log(res.data);
        } else {
          auth.logout();
        }
        setIsLoading(true);
      });
  }, []);
  console.log(rest);
  // if(rest.path==='/Login' || Auth.isAuthenticated===false){
  //     return
  //     isLoading && <Route {...rest} render={(props)=>{
  //         return
  //             <Redirect to={
  //                 {
  //                     pathname:"/Login",
  //                     state : {from :props.location }
  //                 }
  //             }
  //             />
  //         }
  //     }
  //     />

  // }
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Auth.isAuthenticated()) {
          return isLoading && <Component {...props} />;
        } else {
          return isLoading && <Login {...props} />;
        }
      }}
    />
  );
};

export default Protectedroutes;
