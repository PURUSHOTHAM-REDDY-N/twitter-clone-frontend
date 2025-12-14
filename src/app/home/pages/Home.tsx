import {
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView
} from "@ionic/react";
import React, { useState } from "react";
import Post from "../components/Post";
import ExternalWebPanel from "../../core/components/ExternalWebPanel";

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
      <IonSegment value="for-you">
        <IonSegmentButton value="for-you" contentId="for-you">
          <IonLabel>FOR YOU</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="following" contentId="following">
          <IonLabel>FOLLOWING</IonLabel>
        </IonSegmentButton>
      </IonSegment>

      {/* <ExternalWebPanel isOpen={true} url={"https://capacitorjs.com/docs/guides/push-notifications-firebase"} onClose={()=>{}}/> */}

      <IonSegmentView>
        <IonSegmentContent id="for-you">
          <Post />
        </IonSegmentContent>
        <IonSegmentContent id="following">
          <Post />
        </IonSegmentContent>
      </IonSegmentView>
    </IonPage>
  );
};

export default Home;
