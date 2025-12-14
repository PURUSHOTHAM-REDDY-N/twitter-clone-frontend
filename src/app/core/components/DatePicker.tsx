import React from "react";
import { IonItem, IonLabel, IonDatetime, IonDatetimeButton, IonModal } from "@ionic/react";

interface DatePickerProps {
  label: string;
  value: string | undefined;
  onChange: (val: string) => void;
  error?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ label, value, onChange, error }) => {
  const id = `${label.replace(/\s+/g, "-").toLowerCase()}-datetime`;

  return (
    <div className="mb-3">
      <IonItem className="rounded-xl">
        <IonLabel position="stacked">{label}</IonLabel>
        <IonDatetimeButton datetime={id} />
      </IonItem>

      <IonModal keepContentsMounted={true}>
        <IonDatetime
          id={id}
          presentation="date"        // only date
          value={value}
          onIonChange={(e) => onChange(e.detail.value!)}
          min="1900-01-01"
          max={new Date().toISOString().split("T")[0]}
          placeholder="Select Date"
          pickerFormat="MMMM DD YYYY"
        />
      </IonModal>

      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default DatePicker;
