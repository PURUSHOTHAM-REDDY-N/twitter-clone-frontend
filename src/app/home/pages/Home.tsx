// src/app/home/pages/Home.tsx
import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonTextarea,
  IonButton,
  IonIcon,
  IonItemDivider,
  IonText,
  IonList,
  IonItem
} from "@ionic/react";
import {
  imageOutline,
  happyOutline,
  linkOutline,
  locationOutline,
  cameraOutline
} from "ionicons/icons";

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* removed translucent to prevent overlap */}
      <IonHeader>
        <IonToolbar>
          <IonSegment value="for-you">
            <IonSegmentButton value="for-you">
              <IonLabel>For you</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="following">
              <IonLabel>Following</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      {/* full-height scrollable content */}
      <IonContent fullscreen className="ion-no-padding">
        <IonGrid className="ion-no-padding">
          {/* composer row with avatar */}
          <IonRow className="ion-align-items-center ion-padding-horizontal ion-padding-top">
            <IonCol size="1.5" className="ion-text-center">
              <IonAvatar>
                <img
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  alt="avatar"
                />
              </IonAvatar>
            </IonCol>
            <IonCol size="10.5">
              <IonTextarea
                placeholder="What's happening?"
                autoGrow
                rows={1}
              />
            </IonCol>
          </IonRow>

          {/* icons + Post button row */}
          <IonRow className="ion-padding-horizontal ion-padding-bottom ion-align-items-center">
            <IonCol size="7">
              <IonButton fill="clear" size="small">
                <IonIcon icon={imageOutline} />
              </IonButton>
              <IonButton fill="clear" size="small">
                <IonIcon icon={cameraOutline} />
              </IonButton>
              <IonButton fill="clear" size="small">
                <IonIcon icon={linkOutline} />
              </IonButton>
              <IonButton fill="clear" size="small">
                <IonIcon icon={happyOutline} />
              </IonButton>
              <IonButton fill="clear" size="small">
                <IonIcon icon={locationOutline} />
              </IonButton>
            </IonCol>
            <IonCol size="5" className="ion-text-right">
              <IonButton color="light">
                <IonText color="dark">Post</IonText>
              </IonButton>
            </IonCol>
          </IonRow>

          {/* divider + Show posts */}
          <IonItemDivider mode="md" className="ion-no-padding" />
          <IonRow className="ion-padding-vertical">
            <IonCol className="ion-text-center">
              <IonText color="primary">Show 172 posts</IonText>
            </IonCol>
          </IonRow>
          <IonItemDivider mode="md" className="ion-no-padding" />

          {/* long scrollable feed with bottom padding */}
          <IonList lines="none" className="ion-padding-bottom">
            {Array.from({ length: 25 }).map((_, index) => (
              <IonItem key={index}>
                <IonAvatar slot="start">
                  <img
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    alt="tweet avatar"
                  />
                </IonAvatar>
                <IonLabel>
                  <h2>CE‑Kopite · Dec {8 - (index % 8)}</h2>
                  <p>
                    Barnsley would be a good home game for Alonso to start on.
                    Tweet number {index + 1}.
                  </p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
