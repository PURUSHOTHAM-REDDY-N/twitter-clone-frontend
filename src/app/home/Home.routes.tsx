import React from "react";
import {Route, Switch} from "react-router";
import Home from "./pages/Home";

const HomeRoutes = () => (

    <Switch>
        <Route  path="" component={Home}/>

     </Switch>

);

export default HomeRoutes;
