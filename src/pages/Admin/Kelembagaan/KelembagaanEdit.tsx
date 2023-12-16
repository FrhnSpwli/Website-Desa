import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase";

import {
  IonPage,
  IonContent,
  IonInput,
  IonTextarea,
  IonButton,
  IonToast,
} from "@ionic/react";

import Sidebar from "../../../components/organisms/Sidebar";

const KelembagaanEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [kelembagaan, setKelembagaan] = useState({
    id: "",
    name: "",
    description: "",
    startFrom: "",
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

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const fetchKelembagaan = async () => {
      try {
        const data = await getDoc(doc(db, "kelembagaan", id));
        if (data.exists()) {
          const { name, description, startFrom } = data.data();
          setKelembagaan({ id, name, description, startFrom });
        } else {
          console.error("Kelembagaan not found");
        }
      } catch (error) {
        console.error("Error fetching kelembagaan", error);
      }
    };

    fetchKelembagaan();
  }, [id]);

  const handleInputChange = (key: string, value: string) => {
    setKelembagaan((prevKelembagaan) => ({ ...prevKelembagaan, [key]: value }));
  };

  const handleSave = async () => {
    try {
      await updateDoc(doc(db, "kelembagaan", id), {
        name: kelembagaan.name,
        description: kelembagaan.description,
        startFrom: kelembagaan.startFrom,
      });

      setShowToast(true);
      window.location.href = "/admin/kelembagaan";

      console.log("Kelembagaan updated successfully!");
    } catch (error) {
      console.error("Error updating kelembagaan", error);
    }
  };

  return (
    <IonPage>
      <Sidebar />
      <IonContent>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Kelembagaan updated successfully!"
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
          <h1 style={{ alignSelf: "center" }}>Edit Kelembagaan</h1>
          <IonInput
            label="Nama Kelembagaan"
            fill="solid"
            labelPlacement="floating"
            value={kelembagaan.name}
            placeholder="Enter title"
            onIonChange={(e) => handleInputChange("name", e.detail.value!)}
          />
          <IonInput
            label="Tanggal Pendirian"
            fill="solid"
            labelPlacement="floating"
            type="date"
            value={kelembagaan.startFrom}
            placeholder="Masukkan Tanggal Pendirian"
            onIonChange={(e) => handleInputChange("startFrom", e.detail.value!)}
          />
          <IonTextarea
            label="Description"
            fill="solid"
            labelPlacement="floating"
            value={kelembagaan.description}
            placeholder="Enter description"
            onIonChange={(e) =>
              handleInputChange("description", e.detail.value!)
            }
          />
          <IonButton onClick={handleSave}>Save</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default KelembagaanEdit;
