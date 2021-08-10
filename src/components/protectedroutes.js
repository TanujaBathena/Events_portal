import { React, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Auth from "./auth";
import Login from "./login";
import axios from "axios";
import auth from "./auth";

const Protectedroutes = ({ component: Component, ...rest }) => {
  let [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(false); //while calling api setting loading state to false.
    axios
      .get("http://b463a02abd34.ngrok.io/checkauth", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) => {
        if (res.data !== "notloggedin") {
          //checking if user is logged in
          Auth.login(); //changing is authenticated to true after checking if the user is legitimate.
        } else {
          auth.logout();
          //  window.location.reload(); //if the user is not legitimate we will change the is authenticates attribute to false.
        }
        setloading(true);
      });
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (Auth.isAuthenticated()) {
          return loading && <Component {...props} />;
        } else {
          return loading && <Login {...props} />;
        }
      }}
    />
  );
};

export default Protectedroutes;

// if(rest.path==='/Login' || Auth.isAuthenticated===false){
//     return
//     loading && <Route {...rest} render={(props)=>{
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
