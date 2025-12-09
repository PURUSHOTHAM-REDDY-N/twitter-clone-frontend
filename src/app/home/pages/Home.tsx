
import { IonHeader, IonLabel, IonSegment, IonSegmentButton, IonTitle, IonToolbar, IonRow, IonCol, IonSegmentView, IonSegmentContent, IonAvatar, IonItem, IonInput } from '@ionic/react';

export default function Home() {
  return <div>


    
<IonSegment value="first">
        <IonSegmentButton value="first" contentId="first">
          <IonLabel>For you</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="second" contentId="second">
          <IonLabel>Following</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegmentView>
        <IonSegmentContent id="first">
          <IonRow>
            <IonCol size='2'><IonAvatar>
        <img  width="1px" alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </IonAvatar></IonCol>
            <IonCol size='10'>
              <IonItem>
        <IonInput  placeholder="whats hap[penign"></IonInput>
      </IonItem>
            </IonCol>
          </IonRow>
        </IonSegmentContent>
        <IonSegmentContent id="second">Following</IonSegmentContent>
      </IonSegmentView>

    <IonRow className="red-100">
      <IonCol size='4' >dd</IonCol>
      <IonCol size='4' >dd</IonCol>
      <IonCol size='4' >dd</IonCol>
    </IonRow>
    </div>
    

  
}
