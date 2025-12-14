import React from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router";
import Profile from "./pages/Profile";

const ProfileRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      {/* Default page for /home */}
      <Route exact path={path} component={Profile} />

      {/* Catch-all inside /home */}
      <Route path="*">
        <Redirect to={path} />
      </Route>
    </Switch>
  );
};

export default ProfileRoutes;
