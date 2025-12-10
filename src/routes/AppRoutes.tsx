import React from "react";
import {Route, Switch} from "react-router";
import Profile from "../app/Profile";
import Search from "../app/Search";
import Notifications from "../app/notifications/pages/Notifications";
import {IonApp, IonPage} from "@ionic/react";
import {IonReactRouter} from "@ionic/react-router";
import HomeRoutes from "../app/home/Home.routes";

const AppRoutes = () => {
    return(
    <IonApp>
        <IonReactRouter>
            <IonPage>
                <Switch>
                    <Route exact path="/search" component={Search}/>
                    <Route exact path="/notifications" component={Notifications}/>
                    <Route path="/home" component={HomeRoutes}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path= "/" component={HomeRoutes}/>
                </Switch>
            </IonPage>
        </IonReactRouter>
    </IonApp>
);
};

export default AppRoutes;
