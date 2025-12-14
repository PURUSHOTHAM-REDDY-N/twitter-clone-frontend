import {
  IonPage,
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonText,
  IonRow,
  IonCol,
  IonSpinner,
  IonTitle,
} from "@ionic/react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import DatePicker from "../../core/components/DatePicker";
import CountryPicker from "../../core/components/CountryPicker";
import { useIonRouter } from "@ionic/react";

// Validation schema
const signupSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  country: z.string().min(1, "Country is required"),
  dob: z.string().min(1, "Date of Birth is required"),
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const [loading, setLoading] = useState(false);
  const ionRouter = useIonRouter();

  const onSubmit = async (data: SignupFormData) => {
    setLoading(true);
    console.log("Signup:", data);
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
ionRouter.push("/home", "root");  };

  return (
    <IonPage>
      <IonContent className="bg-white">
        <IonRow className="ion-justify-content-center ion-align-items-center" style={{ height: "100%" }}>
          <IonCol size="12" sizeMd="6" sizeLg="4">

            <IonRow className="ion-text-center mb-4">
              <IonCol>
                <IonTitle>Sign Up</IonTitle>
              </IonCol>
            </IonRow>

            {/* First Name */}
            <IonItem className="rounded-xl">
              <IonLabel position="stacked">First Name</IonLabel>
              <IonInput type="text" {...register("firstName")} placeholder="Enter first name" />
            </IonItem>
            {errors.firstName && <IonText color="danger">{errors.firstName.message}</IonText>}

            {/* Last Name */}
            <IonItem className="rounded-xl mt-3">
              <IonLabel position="stacked">Last Name</IonLabel>
              <IonInput type="text" {...register("lastName")} placeholder="Enter last name" />
            </IonItem>
            {errors.lastName && <IonText color="danger">{errors.lastName.message}</IonText>}

            {/* Email */}
            <IonItem className="rounded-xl mt-3">
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput type="email" {...register("email")} placeholder="Enter your email" />
            </IonItem>
            {errors.email && <IonText color="danger">{errors.email.message}</IonText>}

            {/* Password */}
            <IonItem className="rounded-xl mt-3">
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput type="password" {...register("password")} placeholder="Enter your password" />
            </IonItem>
            {errors.password && <IonText color="danger">{errors.password.message}</IonText>}

            {/* Country Picker Component */}
            <CountryPicker
              control={control}
              name="country"
              error={errors.country?.message}
            />

            {/* Date of Birth */}
            <Controller
              control={control}
              name="dob"
              render={({ field }) => (
                <DatePicker
                  label="Date of Birth"
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.dob?.message}
                />
              )}
            />

            {/* Signup Button */}
            <IonRow className="mt-4">
              <IonCol>
                <IonButton expand="block" shape="round" onClick={handleSubmit(onSubmit)} disabled={loading}>
                  {loading ? <IonSpinner name="crescent" /> : "Sign Up"}
                </IonButton>
              </IonCol>
            </IonRow>

          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
}
