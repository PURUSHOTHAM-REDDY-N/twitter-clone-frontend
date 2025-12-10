import React from "react";
import {Route, Switch} from "react-router";
import Profile from "../app/Profile";
import Search from "../app/Search";
import Notifications from "../app/notifications/pages/Notifications";
import {IonApp, IonPage, IonRouterOutlet} from "@ionic/react";
import {IonReactRouter} from "@ionic/react-router";
import HomeRoutes from "../app/home/Home.routes";
import ExploreRoutes from "../app/explore/explore.routes";
import ResponsiveLayout from "../components/layout/ResponsiveLayout";

const AppRoutes = () => {
    return(
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
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
