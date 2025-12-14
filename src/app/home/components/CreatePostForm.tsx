import { zodResolver } from "@hookform/resolvers/zod";
import {
  IonButton,
  IonCol,
  IonIcon,
  IonLoading,
  IonRow,
  IonText,
  IonTextarea,
} from "@ionic/react";
import useAxios from "axios-hooks";
import {
  cameraOutline,
  closeOutline,
  happyOutline,
  imageOutline,
  linkOutline,
  locationOutline,
} from "ionicons/icons";
import Avatar from "react-avatar";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { CreatePostFormData, createPostFormSchema } from "../home.model";
import { useState } from "react";
import GifPicker from "gif-picker-react";
import UploadGIFModel from "./UploadGIFModel";
import { Camera, CameraResultType } from '@capacitor/camera';

export default function CreatePostForm() {
  const MAX_LENGTH = 280; // twitter style

  const form = useForm<CreatePostFormData>({
    resolver: zodResolver(createPostFormSchema),
    mode: "onChange",
    defaultValues: {
      message: "",
    },
  });

  const [{ loading }, createPost] = useAxios(
    {
      url: "/users/send-registration-otp",
      method: "POST",
    },
    { manual: true }
  );

  const [selectedGif, setSelectedGif] = useState<string | null>(null);
const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const onPostSubmit: SubmitHandler<CreatePostFormData> = async (data) => {
    await createPost({ data });
  };

  const takePicture = async () => {
  try {
    const image = await Camera.getPhoto({
      quality: 85,
      allowEditing: false,
      resultType: CameraResultType.Uri,
    });

    if (image.webPath) {
      setSelectedImage(image.webPath);
    }
  } catch (err) {
    console.log("Camera cancelled or failed", err);
  }
};


  return (
    <form onSubmit={form.handleSubmit(onPostSubmit)}>
      <IonRow className="items-start">

        {/* Avatar */}
        <IonCol size="1">
          <Avatar size="40" round={true} />
        </IonCol>

        {/* Textarea */}
        <IonCol size="11">
          <Controller
            control={form.control}
            name="message"
            render={({ field }) => (
              <>
                <IonTextarea
                  value={field.value}
                  onIonChange={(e) => field.onChange(e.detail.value)}
                  onIonBlur={field.onBlur}
                  placeholder="What's happening?"
                  autoGrow
                  rows={2}
                  maxlength={MAX_LENGTH}
                  className={
                    form.formState.errors.message ? "ion-invalid" : ""
                  }
                  errorText={form.formState.errors?.message?.message}
                />

                {/* Character Counter */}
                <div className="text-right text-gray-400 text-sm pr-2 mt-1">
                  {field.value?.length || 0}/{MAX_LENGTH}
                </div>
              </>
            )}
          />
        </IonCol>
        <IonCol size="12">
  {selectedGif && (
    <div className="relative inline-block mt-2">
      <img
        src={selectedGif}
        alt="gif"
        className="rounded-lg max-h-48 object-cover"
      />

      {/* Remove Icon */}
      <button
        type="button"
        onClick={() => setSelectedGif(null)}
        className="absolute top-1 right-1 bg-black/70 text-white rounded-full p-1"
      >
        <IonIcon icon={closeOutline} />
      </button>
    </div>
  )}

  {selectedImage && (
    <div className="relative inline-block mt-2">
      <img
        src={selectedImage}
        alt="captured"
        className="rounded-lg max-h-48 object-cover"
      />

      <button
        type="button"
        onClick={() => setSelectedImage(null)}
        className="absolute top-1 right-1 bg-black/70 text-white rounded-full p-1"
      >
        <IonIcon icon={closeOutline} />
      </button>
    </div>)}
</IonCol>

        {/* Action Buttons Row */}
        <IonCol size="8" className="flex items-center space-x-1 mt-2">
          <IonButton fill="clear" size="small">
            <IonIcon icon={imageOutline} />
          </IonButton>

          <IonButton fill="clear" size="small" onClick={takePicture}>
            <IonIcon icon={cameraOutline} />
          </IonButton>

          {/* <IonButton fill="clear" size="small"> */}
          <UploadGIFModel onGifSelect={(e)=>setSelectedGif(e)}/>  
          {/* </IonButton> */}

          <IonButton fill="clear" size="small">
            <IonIcon icon={happyOutline} />
          </IonButton>

          <IonButton fill="clear" size="small">
            <IonIcon icon={locationOutline} />
          </IonButton>
        </IonCol>

        {/* POST Button */}
        <IonCol size="4" className="text-right mt-2">
          <IonButton
            type="submit"
            color="secondary"
            shape="round"
          >
            {loading && <IonLoading />}
            <IonText>POST</IonText>
          </IonButton>
        </IonCol>

      </IonRow>
    </form>
  );
}
