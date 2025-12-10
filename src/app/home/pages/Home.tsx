import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonAvatar,
  IonTextarea,
  IonButton,
  IonIcon,
  IonItemDivider,
  IonText,
  IonList,
  IonItem,
  IonContent,
  IonSegmentContent,
  IonSegmentView,
} from "@ionic/react";
import {
  imageOutline,
  happyOutline,
  linkOutline,
  locationOutline,
  cameraOutline,
  chatbubbleOutline,
  repeatOutline,
  heartOutline,
  shareOutline,
} from "ionicons/icons";
import Post from "../components/Post";

type Tweet = {
  id: number;
  username: string;
  handle: string;
  text: string;
  img: string;
  likes: number;
  retweets: number;
  comments: number;
  liked: boolean;
  retweeted: boolean;
};

const Home: React.FC = () => {
  const [segment, setSegment] = useState<"for-you" | "following">("for-you");

    

//   console.log("segment =", segment);
// console.log("tweets length =", tweets.length, tweets);


  

  return (
    <IonPage>
              <IonSegment
                value="for-you"
                
              >
                <IonSegmentButton value="for-you" contentId="for-you">
                  <IonLabel>FOR YOU</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="following" contentId="following">
                  <IonLabel>FOLLOWING</IonLabel>
                </IonSegmentButton>
              </IonSegment>

       <IonSegmentView>
          <IonSegmentContent id="for-you" >
              

            <Post/>
          </IonSegmentContent>
          <IonSegmentContent id="following" >

              <Post />
            </IonSegmentContent>
        </IonSegmentView>

    </IonPage>
  );
};

export default Home;
