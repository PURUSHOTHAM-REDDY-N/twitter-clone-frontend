import {
  IonPage,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonRow,
  IonCol,
  IonSegmentView,
  IonSegmentContent,
} from "@ionic/react";
import { useState } from "react";

const Notifications: React.FC = () => {
  const [selected, setSelected] = useState("first");

  return (
    <IonPage>
          <IonSegment value="all">
            <IonSegmentButton value="all" contentId="all">
              <IonLabel>All</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="verified" contentId="verified">
              <IonLabel>Verified</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="mentions" contentId="mentions">
              <IonLabel>Mentions</IonLabel>
            </IonSegmentButton>
          </IonSegment>
    
          <IonSegmentView>
            <IonSegmentContent id="all">
              {/* <Post /> */}
            </IonSegmentContent>
            <IonSegmentContent id="verified">
              {/* <Post /> */}
            </IonSegmentContent>
            <IonSegmentContent id="mentions">
              {/* <Post /> */}
            </IonSegmentContent>
          </IonSegmentView>
        </IonPage>
  );
};

export default Notifications;
