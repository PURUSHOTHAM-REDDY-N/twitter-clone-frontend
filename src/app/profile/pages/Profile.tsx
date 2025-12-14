import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonAvatar,
  IonButton,
  IonIcon,
  IonText,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonSegmentView,
  IonSegmentContent,
} from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import Avatar from "react-avatar";
import Post from "../../home/components/Post";

const Profile = () => {
  return (
    <IonPage className="bg-black">
      {/* Top Header */}
      <IonHeader>
        <IonToolbar className="bg-black text-white">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>

          <IonTitle className="text-sm font-semibold">
            PURUSHOTHAM REDDY
            <p className="text-xs text-gray-400">0 posts</p>
          </IonTitle>

          <IonButtons slot="end">
            <IonIcon icon={searchOutline} className="text-white text-xl" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="bg-black text-white">
        {/* Cover Image */}
        <div className="h-40 bg-gray-700 w-full"></div>

        {/* Profile Section */}
        <div className="relative px-4">
          {/* Avatar */}
            <Avatar className="absolute -top-10 " size="133" round={true} />

          {/* Edit Profile Button */}
          <div className="flex justify-end pt-4">
            <IonButton
              fill="outline"
              size="small"
              className="rounded-full text-white border-gray-500"
            >
              Edit profile
            </IonButton>
          </div>

          {/* User Info */}
          <div className="mt-10">
            <IonText>
              <h2 className="text-xl font-bold">PURUSHOTHAM REDDY</h2>
            </IonText>

            <IonText className="text-gray-500 text-sm">
              <p>@PReddy61761</p>
            </IonText>

            <IonText className="text-gray-500 text-sm flex items-center gap-1 mt-2">
              <span>📅</span>
              <span>Joined December 2025</span>
            </IonText>

            {/* Following / Followers */}
            <div className="flex gap-4 mt-3 text-sm">
              <p>
                <span className="font-semibold text-white">9</span>{" "}
                <span className="text-gray-500">Following</span>
              </p>
              <p>
                <span className="font-semibold text-white">0</span>{" "}
                <span className="text-gray-500">Followers</span>
              </p>
            </div>
          </div>
        </div>
        <IonSegment value="posts">
                <IonSegmentButton value="posts" contentId="posts">
                  <IonLabel>Posts</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="replies" contentId="replies">
                  <IonLabel>Replies</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="media" contentId="media">
                  <IonLabel>Media</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="links" contentId="links">
                  <IonLabel>Links</IonLabel>
                </IonSegmentButton>
              </IonSegment>
        
              <IonSegmentView>
                <IonSegmentContent id="posts">
                  <Post />
                </IonSegmentContent>
                <IonSegmentContent id="replies">
                  <Post />
                </IonSegmentContent>
                <IonSegmentContent id="media">
                  <Post />
                </IonSegmentContent>
                <IonSegmentContent id="links">
                  <Post />
                </IonSegmentContent>
              </IonSegmentView>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
