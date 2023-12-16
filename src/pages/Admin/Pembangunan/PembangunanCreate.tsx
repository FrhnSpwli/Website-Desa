import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonContent,
  IonInput,
  IonTextarea,
  IonButton,
  IonToast,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

import { db } from "../../../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import Sidebar from "../../../components/organisms/Sidebar";

const PembangunanCreate: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [pembangunanList, setPembangunanList] = useState({
    name: "",
    luas: 0,
    biaya: "",
    lokasi: "",
    keterangan: "",
  });

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth");
    if (token) {
      setIsAuth(true);
      console.log("token", token);
    } else {
      window.location.href = "/login";
    }
  }, []);

  const handleInputChange = (key: string, value: string) => {
    setPembangunanList((prevPembangunan) => ({
      ...prevPembangunan,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await addDoc(collection(db, "pembangunan"), {
        ...pembangunanList,
      });

      setShowToast(true);
      window.location.href = "/admin/pembangunan";

      console.log("Pembangunan created successfully!");
    } catch (error) {
      console.error("Error creating pembangunan", error);
    }
  };

  return (
    <IonPage>
      <Sidebar />
      <IonContent>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Pembangunan created successfully!"
          duration={2000}
        />
        <div
          style={{
            padding: "48px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h1 style={{ alignSelf: "center" }}>Create Pembangunan</h1>
          <IonInput
            label="Nama Pembangunan"
            labelPlacement="floating"
            placeholder="Masukkan Nama Pembangunan"
            fill="solid"
            onIonChange={(e) => handleInputChange("name", e.detail.value!)}
          />
          <IonInput
            label="Luas Pembangunan"
            labelPlacement="floating"
            type="number"
            placeholder="Masukkan Luas Pembangunan"
            fill="solid"
            onIonChange={(e) => handleInputChange("luas", e.detail.value!)}
          />
          <IonInput
            label="Biaya Pembangunan"
            labelPlacement="floating"
            placeholder="Masukkan Biaya Pembangunan"
            fill="solid"
            type="number"
            onIonChange={(e) => handleInputChange("biaya", e.detail.value!)}
          />
          <IonInput
            label="Lokasi Pembangunan"
            labelPlacement="floating"
            placeholder="Masukkan Lokasi Pembangunan"
            fill="solid"
            onIonChange={(e) => handleInputChange("lokasi", e.detail.value!)}
          />
          <IonSelect
            label="Keterangan Pembangunan"
            labelPlacement="floating"
            placeholder="Masukkan Keterangan Pembangunan"
            fill="solid"
            onIonChange={(e) =>
              handleInputChange("keterangan", e.detail.value!)
            }
          >
            <IonSelectOption value="Done">Done</IonSelectOption>
            <IonSelectOption value="Process">Process</IonSelectOption>
            <IonSelectOption value="stopped">Stopped</IonSelectOption>
          </IonSelect>
          <IonButton onClick={handleSave}>Save</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PembangunanCreate;
