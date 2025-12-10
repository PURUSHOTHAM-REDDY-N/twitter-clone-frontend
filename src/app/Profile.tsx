/*export default function Profile() {
  return <div>Profile Page</div>;
}*/


// src/app/profile/pages/Profile.tsx
import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonAvatar,
  IonButton,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonList,
  IonItem,
  IonText
} from "@ionic/react";
import {
  arrowBackOutline,
  calendarOutline,
  locationOutline,
  linkOutline
} from "ionicons/icons";

const Profile: React.FC = () => {
  return (
    <div className="twitter-layout">
      {/* LEFT SIDEBAR - same as Home */}
      <div className="left-sidebar">
        <h3>Navigation</h3>
        <IonList>
          <IonItem button routerLink="/home">Home</IonItem>
          <IonItem button>Explore</IonItem>
          <IonItem button>Notifications</IonItem>
          <IonItem button>Messages</IonItem>
          <IonItem button routerLink="/profile">Profile</IonItem>
        </IonList>
      </div>

      {/* MIDDLE PROFILE SECTION */}
      <div className="middle-feed">
        <IonPage>
          <IonHeader translucent>
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton defaultHref="/home" />
              </IonButtons>
              <IonTitle>
                <div>
                  <strong>Sayali</strong>
                  <p style={{ fontSize: "12px", margin: 0 }}>142 posts</p>
                </div>
              </IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent fullscreen className="feed-content">
            {/* Cover Image */}
            <div className="profile-cover">
              <img
                src="https://via.placeholder.com/600x200/1DA1F2/ffffff?text=Cover+Photo"
                alt="cover"
              />
            </div>

            {/* Profile Info Section */}
            <div className="profile-info-section">
              <div className="profile-avatar-row">
                <IonAvatar className="profile-avatar">
                  <img
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    alt="profile avatar"
                  />
                </IonAvatar>
                <IonButton fill="outline" className="edit-profile-btn">
                  Edit profile
                </IonButton>
              </div>

              <div className="profile-details">
                <h2>Sayali</h2>
                <p className="username">@sayali</p>
                <p className="bio">
                  Master's student in Computer Science | Deep Learning & Cryptography enthusiast | 
                  Building cool projects 🚀
                </p>

                <div className="profile-meta">
                  <span>
                    <IonIcon icon={locationOutline} /> Ireland
                  </span>
                  <span>
                    <IonIcon icon={linkOutline} /> github.com/sayali
                  </span>
                  <span>
                    <IonIcon icon={calendarOutline} /> Joined December 2024
                  </span>
                </div>

                <div className="follow-stats">
                  <span>
                    <strong>234</strong> Following
                  </span>
                  <span>
                    <strong>567</strong> Followers
                  </span>
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <IonSegment value="posts" className="profile-tabs">
              <IonSegmentButton value="posts">
                <IonLabel>Posts</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="replies">
                <IonLabel>Replies</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="media">
                <IonLabel>Media</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="likes">
                <IonLabel>Likes</IonLabel>
              </IonSegmentButton>
            </IonSegment>

            {/* User's Posts */}
            <IonList lines="none">
              {Array.from({ length: 10 }).map((_, index) => (
                <IonItem key={index}>
                  <IonAvatar slot="start">
                    <img
                      src="https://ionicframework.com/docs/img/demos/avatar.svg"
                      alt="tweet avatar"
                    />
                  </IonAvatar>
                  <IonLabel>
                    <h2>Sayali · Dec {10 - index}</h2>
                    <p>
                      Working on my Twitter clone project using Ionic React. 
                      The UI is coming together nicely! 💻 #coding #ionic
                    </p>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonContent>
        </IonPage>
      </div>

    
      <div className="right-sidebar">
        <div className="trends-section">
          <h3>Who to follow</h3>
          <IonList>
            <IonItem>
              <IonAvatar slot="start">
                <img
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  alt="user"
                />
              </IonAvatar>
              <IonLabel>
                <h2>@reactdev</h2>
                <p>React Developer</p>
              </IonLabel>
              <IonButton fill="outline" size="small">
                Follow
              </IonButton>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <img
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  alt="user"
                />
              </IonAvatar>
              <IonLabel>
                <h2>@ionic</h2>
                <p>Ionic Framework</p>
              </IonLabel>
              <IonButton fill="outline" size="small">
                Follow
              </IonButton>
            </IonItem>
          </IonList>
        </div>
      </div>
    </div>
  );
};

export default Profile;
