import { IonRouterOutlet } from "@ionic/react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import AuthMainPage from "./pages/AuthMainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


const AuthRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <IonRouterOutlet>
      <Switch>
        {/* Default page for /home */}
        <Route exact path={path} component={AuthMainPage} />
        <Route exact path={path + "/login"} component={LoginPage} />
        <Route exact path={path + "/register"} component={RegisterPage} />

        {/* Catch-all inside /home */}
        {/* <Route path="*">
          <Redirect to={path} />
        </Route> */}
      </Switch>
    </IonRouterOutlet>
  );
};

export default AuthRoutes;
