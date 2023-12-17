import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonContent,
  IonInput,
  IonLabel,
  IonTextarea,
  IonButton,
  IonImg,
  IonToast,
} from "@ionic/react";

import { ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import Sidebar from "../../../components/organisms/Sidebar";

const ArtikelCreate: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [artikel, setArtikel] = useState({
    title: "",
    description: "",
    date: "",
    detail: "",
    image: null as File | null,
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
    setArtikel((prevArtikel) => ({ ...prevArtikel, [key]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];

    if (selectedImage) {
      console.log("Selected Image:", selectedImage);
      setArtikel((prevArtikel) => ({ ...prevArtikel, image: selectedImage }));
    }
  };

  const handleSave = async () => {
    try {
      const docRef = await addDoc(collection(db, "artikel"), {
        title: artikel.title,
        description: artikel.description,
        date: artikel.date,
        detail: artikel.detail,
      });

      if (artikel.image) {
        const storageRef = ref(storage, `artikel/${docRef.id}`);
        await uploadBytes(storageRef, artikel.image);
      }
      
      setShowToast(true);
      window.location.href = "/admin/artikel";

      console.log("Artikel created successfully!");
    } catch (error) {
      console.error("Error creating artikel", error);
    }
  };

  return (
    <IonPage>
      <Sidebar />
      <IonContent>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Artikel created successfully!"
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
          <h1 style={{ alignSelf: "center" }}>Create Artikel</h1>
          <IonInput
            label="Judul Artikel"
            labelPlacement="floating"
            placeholder="Masukkan Judul Artikel"
            fill="solid"
            onIonChange={(e) => handleInputChange("title", e.detail.value!)}
          />
          <IonInput
            label="Date"
            labelPlacement="floating"
            type="date"
            fill="solid"
            onIonChange={(e) => handleInputChange("date", e.detail.value!)}
          />
          <IonTextarea
            label="Description"
            labelPlacement="floating"
            fill="solid"
            placeholder="Enter description"
            onIonChange={(e) =>
              handleInputChange("description", e.detail.value!)
            }
          />
          {/* <IonTextarea
            label="Detail"
            labelPlacement="floating"
            autoGrow
            fill="solid"
            placeholder="Enter detail"
            onIonChange={(e) => handleInputChange("detail", e.detail.value!)}
          /> */}
          <IonLabel>Image</IonLabel>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {artikel.image && (
            <IonImg
              src={URL.createObjectURL(artikel.image)}
              alt="Selected Image"
            />
          )}
          <IonButton onClick={handleSave}>Save</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ArtikelCreate;
