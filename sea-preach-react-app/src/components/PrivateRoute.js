import React from "react";
import { Redirect, Route } from "react-router-dom";
import auth from "../auth";

const PrivateRoute = ({
  component: Component,
  title: Title,
  logOut: LogOut,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.getAuth()) {
          return <Component title={Title} logOut={LogOut} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                path: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
export default PrivateRoute;
