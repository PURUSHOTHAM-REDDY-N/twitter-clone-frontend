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
import "./Home.css";

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
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    fetch("https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/tweets.json")
      .then((res) => res.json())
      .then((data) => {
        setTweets(data.tweets);
      })
      .catch((err) => {
        console.error("Failed to load tweets", err);
      });
  }, []);

  console.log("segment =", segment);
console.log("tweets length =", tweets.length, tweets);


  const toggleLike = (id: number) => {
    setTweets((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, liked: !t.liked } : t
      )
    );
  };

  const toggleRetweet = (id: number) => {
    setTweets((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, retweeted: !t.retweeted } : t
      )
    );
  };

  return (
    <IonPage>
      <div className="twitter-layout">
      
        <div className="left-sidebar">
          <IonList lines="none">
            <IonItem button routerLink="/home">Home</IonItem>
            <IonItem button routerLink="/search">Explore</IonItem>
            <IonItem button routerLink="/notifications">Notifications</IonItem>
            <IonItem button routerLink="/profile">Profile</IonItem>
          </IonList>
        </div>

       
        <div className="middle-feed">
          
          <IonHeader className="ion-no-border middle-header">
            <IonToolbar>
              <IonSegment
                value={segment}
                onIonChange={(e) =>
                  setSegment(e.detail.value as "for-you" | "following")
                }
                mode="md"
              >
                <IonSegmentButton value="for-you">
                  <IonLabel>FOR YOU</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="following">
                  <IonLabel>FOLLOWING</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonToolbar>
          </IonHeader>

       
          <IonContent className="feed-content" scrollY>
            {segment === "for-you" && (
              <div>
              
                <div className="fleet-row">
                  {tweets.map((tweet) => (
                    <div key={tweet.id} className="fleet-item">
                      <IonAvatar className="fleet-avatar">
                        <img src={tweet.img} alt="story avatar" />
                      </IonAvatar>
                    </div>
                  ))}
                </div>

            
                <div className="composer-row">
                  <IonAvatar className="composer-avatar">
                    <img
                      src="https://ionicframework.com/docs/img/demos/avatar.svg"
                      alt="avatar"
                    />
                  </IonAvatar>
                  <div className="composer-input">
                    <IonTextarea
                      placeholder="What's happening?"
                      autoGrow
                      rows={1}
                    />
                  </div>
                </div>

               
                <div className="composer-actions">
                  <div className="icon-group">
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
                  </div>
                  <IonButton className="post-button">
                    <IonText>POST</IonText>
                  </IonButton>
                </div>

             
                <IonItemDivider mode="md" className="thin-divider" />
                <div className="show-posts-text">
                  <IonText color="primary">Show 172 posts</IonText>
                </div>
                <IonItemDivider mode="md" className="thin-divider" />

                <IonList lines="none" className="tweet-list">
                  {tweets.map((tweet) => (
                    <IonItem key={tweet.id} className="tweet-item">
                      <IonAvatar slot="start">
                        <img src={tweet.img} alt="tweet avatar" />
                      </IonAvatar>
                      <IonLabel>
                        <div className="tweet-header-row">
                          <span className="tweet-author">{tweet.username}</span>
                          <span className="tweet-handle">@{tweet.handle}</span>
                        </div>

                        <p
                          className="tweet-text"
                          dangerouslySetInnerHTML={{
                            __html: tweet.text
                              .replace(
                                /#[a-zA-Z0-9_]+/g,
                                (m) => `<span class="highlight">${m}</span>`
                              )
                              .replace(
                                /@[a-zA-Z0-9_]+/g,
                                (m) => `<span class="highlight">${m}</span>`
                              ),
                          }}
                        />

                        {tweet.img && (
                          <div className="tweet-image-wrapper">
                            <img
                              src={tweet.img}
                              alt="tweet media"
                              className="tweet-image"
                            />
                          </div>
                        )}

                        <div className="tweet-actions-row">
                          <IonButton
                            fill="clear"
                            size="small"
                            className="tweet-action-btn"
                          >
                            <IonIcon
                              icon={chatbubbleOutline}
                              slot="start"
                            />
                            <span>{tweet.comments}</span>
                          </IonButton>

                          <IonButton
                            fill="clear"
                            size="small"
                            className="tweet-action-btn"
                            color={tweet.retweeted ? "primary" : "medium"}
                            onClick={() => toggleRetweet(tweet.id)}
                          >
                            <IonIcon icon={repeatOutline} slot="start" />
                            <span>{tweet.retweets}</span>
                          </IonButton>

                          <IonButton
                            fill="clear"
                            size="small"
                            className="tweet-action-btn"
                            color={tweet.liked ? "danger" : "medium"}
                            onClick={() => toggleLike(tweet.id)}
                          >
                            <IonIcon icon={heartOutline} slot="start" />
                            <span>{tweet.likes}</span>
                          </IonButton>

                          <IonButton
                            fill="clear"
                            size="small"
                            className="tweet-action-btn"
                          >
                            <IonIcon icon={shareOutline} slot="start" />
                          </IonButton>
                        </div>
                      </IonLabel>
                    </IonItem>
                  ))}
                </IonList>
              </div>
            )}

            {segment === "following" && (
              <div className="following-placeholder">
                <IonList lines="none">
                  <IonItem>
                    <IonLabel>
                      <h2>Following feed</h2>
                      <p>Tweets from accounts you follow will appear here.</p>
                    </IonLabel>
                  </IonItem>
                </IonList>
              </div>
            )}
          </IonContent>
        </div>

       
       
        <div className="right-sidebar" />
      </div>
    </IonPage>
  );
};

export default Home;
