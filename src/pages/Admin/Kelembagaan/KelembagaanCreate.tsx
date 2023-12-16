import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonContent,
  IonInput,
  IonTextarea,
  IonButton,
  IonToast,
} from "@ionic/react";

import { db } from "../../../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import Sidebar from "../../../components/organisms/Sidebar";

const KelembagaanCreate: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [kelembagaan, setKelembagaan] = useState({
    name: "",
    startFrom: "",
    description: "",
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
    setKelembagaan((prevKelembagaan) => ({ ...prevKelembagaan, [key]: value }));
  }

  const handleSave = async () => {
    try {
      await addDoc(collection(db, "kelembagaan"), {
        name: kelembagaan.name,
        description: kelembagaan.description,
        startFrom: kelembagaan.startFrom,
      });

      setShowToast(true);
      window.location.href = "/admin/kelembagaan";

      console.log("Kelembagaan created successfully!");
    } catch (error) {
      console.error("Error creating kelembagaan", error);
    }
  };

  return (
    <IonPage>
      <Sidebar />
      <IonContent>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Kelembagaan created successfully!"
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
          <h1 style={{ alignSelf: "center" }}>Create Kelembagaan</h1>
          <IonInput
            label="Nama Kelembagaan"
            labelPlacement="floating"
            placeholder="Masukkan Nama Kelembagaan"
            fill="solid"
            onIonChange={(e) => handleInputChange("name", e.detail.value!)}
          />
          <IonInput
            label="Tanggal Pendirian"
            labelPlacement="floating"
            type="date"
            fill="solid"
            onIonChange={(e) => handleInputChange("startFrom", e.detail.value!)}
          />
          <IonTextarea
            label="Deskripsi"
            labelPlacement="floating"
            fill="solid"
            placeholder="Masukkan Deskripsi Kelembagaan"
            onIonChange={(e) => handleInputChange("description", e.detail.value!)}
          />
          <IonButton onClick={handleSave}>Save</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default KelembagaanCreate;
