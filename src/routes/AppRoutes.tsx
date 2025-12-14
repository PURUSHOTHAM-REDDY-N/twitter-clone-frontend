import React from "react";
import {Route, Switch} from "react-router";
import Profile from "../app/profile/pages/Profile";
import Search from "../app/Search";
import Notifications from "../app/notifications/pages/Notifications";
import {IonApp, IonPage, IonRouterOutlet} from "@ionic/react";
import {IonReactRouter} from "@ionic/react-router";
import ExploreRoutes from "../app/explore/explore.routes";
import ResponsiveLayout from "../components/layout/ResponsiveLayout";
import AuthRoutes from "../app/auth/auth.routes";
import HomeRoutes from "../app/home/home.routes";

const AppRoutes = () => {
    return(
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                    <Route  path="/auth" component={AuthRoutes}/>
                <ResponsiveLayout>
                    <Route exact path="/search" component={Search}/>
                    <Route exact path="/notifications" component={Notifications}/>
                    <Route path="/home" component={HomeRoutes}/>
                    <Route path="/explore" component={ExploreRoutes}/>
                    <Route exact path="/profile" component={Profile}/>
                </ResponsiveLayout>
            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
);
};

export default AppRoutes;
