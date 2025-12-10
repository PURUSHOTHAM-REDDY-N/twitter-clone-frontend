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
  IonRow,
  IonCol,
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

export default function Post() {

    const tweets= [{
                "username": "Max Lynch",
                "handle": "maxlynch",
                "like": 446,
                "retweets": 173,
                "response": 21,
                "text": "Crazy, according to @appfigures, @Ionicframework is one of the top 4 development SDKs on both iOS and Android, and one of the top three 3rd party SDKs (more like top 2.5 since it overlaps w/ Cordova) Rocket",
                "date": "1581322823",
                "liked": true,
                "retweet": false,
                "attachment": "https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/attachement-0.jpeg",
                "img": "https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/twitter-max.jpg"
            },
            {
                "username": "Simon Grimm",
                "handle": "schlimmson",
                "like": 14,
                "retweets": 2,
                "response": 6,
                "liked": true,
                "retweet": true,
                "text": "Want to stay up to date with @Ionicframework? Become a Member of the Ionic Academy and come to speed with Ionic quickly 🔥 https://buff.ly/2vMP6XJ #mobiledev @ionicacademy",
                "date": "1600874423",
                "attachment": "https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/attachement-1.jpeg",
                "img": "https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/twitter-simon.jpg"
            },
            {
                "username": "ionic",
                "handle": "ionicframework",
                "like": 1337,
                "retweets": 529,
                "response": 36,
                "liked": false,
                "retweet": true,
                "text": "🎉 Ionic Vue is (finally) here!<br>Truly native, truly web, truly cross platform<br><br>Built with @vuejs 3.0<br>Standard Vue tooling w/ vue-router<br>100+ mobile UI components<br>Mobile phone iOS, Android, and PWAs<br><br>Give it a spin 👇",
                "link": "https://ionicframework.com/blog/announcing-ionic-vue/",
                "date": "1602793223",
                "img": "https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/twitter-ionic.jpg"
            },
            {
                "username": "Ben Sperry",
                "handle": "benjsperry",
                "like": 106,
                "retweets": 28,
                "response": 12,
                "liked": false,
                "retweet": false,
                "text": "Latest up date to the Ionic Start Wizard, which makes it even easier to spin up a new app!",
                "date": "1586326823",
                "img": "https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/twitter-ben.jpg"
            },
            {
                "username": "Matt Nekow",
                "handle": "dotNetkow",
                "like": 45,
                "retweets": 3,
                "response": 13,
                "liked": true,
                "retweet": true,
                "text": "2021 tech stack focus:<br> - React (expand)<br>- NextJS (learn)<br>- Vue 3 (expand)<br>- Angular (maintain)<br>- CSS (actually learn it! Smiling face with open mouth and cold sweat)<br>- AWS Amplify<br>You?",
                "date": "1600874423",
                "img": "https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/twitter-matt.jpg"
            }
        ]
    
    
  return (
    <IonRow>
        <IonCol size="12" className="bg-black text-white p-4 border-b border-gray-700">
           <div>
                {/* <div className="fleet-row">
                  {tweets.map((tweet) => (
                    <div key={tweet.username} className="fleet-item">
                      <IonAvatar className="fleet-avatar">
                        <img src={tweet.img} alt="story avatar" />
                      </IonAvatar>
                    </div>
                  ))}
                </div> */}

            
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
                    <IonItem key={tweet.username} className="tweet-item">
                      <IonAvatar slot="start">
                        <img
                      src="https://ionicframework.com/docs/img/demos/avatar.svg"
                      alt="avatar"
                    />
                      </IonAvatar>
                      <IonLabel>
                        <div className="tweet-header-row">
                          <span className="tweet-author">{tweet.username}</span>
                          <span className="tweet-handle">@{tweet.handle}</span>
                        </div>

                        <p
                          className="tweet-text"
                          >{tweet.text}</p>
                        

                        {tweet.img && (
                          <div className="tweet-image-wrapper">
                            <img
                              src={"/assets/sample.jpg"}
                              alt="tweet media"
                              width={200}
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
                            <span>{tweet.response}</span>
                          </IonButton>

                          <IonButton
                            fill="clear"
                            size="small"
                            className="tweet-action-btn"
                            color={tweet.retweet ? "primary" : "medium"}
                          >
                            <IonIcon icon={repeatOutline} slot="start" />
                            <span>{tweet.retweets}</span>
                          </IonButton>

                          <IonButton
                            fill="clear"
                            size="small"
                            className="tweet-action-btn"
                            color={tweet.liked ? "danger" : "medium"}
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
        </IonCol>
    </IonRow>
  )
}
