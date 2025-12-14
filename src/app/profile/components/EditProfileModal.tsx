import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonContent,
  IonIcon,
  IonInput,
  IonTextarea,
  IonAvatar,
} from "@ionic/react";
import { closeOutline, cameraOutline } from "ionicons/icons";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const EditProfileModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonHeader>
        <IonToolbar className="bg-black text-white">
          <IonButtons slot="start">
            <IonButton onClick={onClose}>
              <IonIcon icon={closeOutline} />
            </IonButton>
          </IonButtons>

          <IonTitle className="text-base font-semibold">
            Edit profile
          </IonTitle>

          <IonButtons slot="end">
            <IonButton
              className="bg-white text-black rounded-full px-4 text-sm font-semibold"
            >
              Save
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="bg-black text-white">
        {/* Cover Image */}
        <div className="relative h-44 bg-black flex items-center justify-center">
          <div className="absolute inset-0 bg-black"></div>

          <IonButton
            fill="clear"
            className="z-10 bg-gray-800 rounded-full w-12 h-12"
          >
            <IonIcon icon={cameraOutline} className="tex
