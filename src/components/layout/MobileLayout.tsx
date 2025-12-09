import React from "react";
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonRouterOutlet
} from "@ionic/react";
import { home, search, person, notifications } from "ionicons/icons";

const MobileLayout = ({ children }: { children: React.ReactNode }) => (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Twitter Clone</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonTabs>
        <IonRouterOutlet>{children}</IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/">
            <IonIcon icon={home} />
          </IonTabButton>

          <IonTabButton tab="search" href="/search">
            <IonIcon icon={search} />
          </IonTabButton>

          <IonTabButton tab="notifications" href="/notifications">
            <IonIcon icon={notifications} />
          </IonTabButton>

          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={person} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonPage>
);

export default MobileLayout;
