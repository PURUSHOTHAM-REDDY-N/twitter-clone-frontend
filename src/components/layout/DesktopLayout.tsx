import React from "react";
import Sidebar from "./Sidebar";
import "../../theme/desktop.css";
import RightSidebar from "./RightSidebar";
import { IonCol, IonRow } from "@ionic/react";

const DesktopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <IonRow>
      {/* <aside className="left-sidebar">
      </aside> */}
      <IonCol size="3"><Sidebar/></IonCol>
      <IonCol size="6">{children}</IonCol>
      <IonCol size="3"><RightSidebar/></IonCol>

      {/* <main className="main-content">{children}</main>

      <aside className="right-sidebar">
        <RightSidebar />
      </aside> */}
    </IonRow>
  );
};

export default DesktopLayout;
