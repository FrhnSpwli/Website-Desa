import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import {
  ref,
  uploadBytes,
  deleteObject,
  getDownloadURL,
} from "firebase/storage";
import { db, storage } from "../../../../config/firebase";

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
import Sidebar from "../../../components/organisms/Sidebar";

const ArtikelEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [artikel, setArtikel] = useState({
    id: "",
    title: "",
    description: "",
    date: "",
    detail: "",
    imageUrl: "",
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

  const [newImage, setNewImage] = useState<File | null>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const fetchArtikel = async () => {
      try {
        const data = await getDoc(doc(db, "artikel", id));
        if (data.exists()) {
          const { title, description, date, detail } = data.data();
          const imageUrl = await getDownloadURL(ref(storage, `artikel/${id}`));
          setArtikel({ id, title, description, date, detail, imageUrl });
        } else {
          console.error("Artikel not found");
        }
      } catch (error) {
        console.error("Error fetching artikel", error);
      }
    };

    fetchArtikel();
  }, [id]);

  const handleInputChange = (key: string, value: string) => {
    setArtikel((prevArtikel) => ({ ...prevArtikel, [key]: value }));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];

    if (selectedImage) {
      console.log("Selected Image:", selectedImage);
      setNewImage(selectedImage);
    }
  };

  const handleSave = async () => {
    try {
      await updateDoc(doc(db, "artikel", id), {
        title: artikel.title,
        description: artikel.description,
        date: artikel.date,
        detail: artikel.detail,
      });

      if (newImage) {
        if (artikel.imageUrl) {
          const imageRef = ref(storage, artikel.imageUrl);
          await deleteObject(imageRef);
        }

        const storageRef = ref(storage, `artikel/${id}`);
        await uploadBytes(storageRef, newImage);

        const newImageUrl = `artikel/${id}`;
        await updateDoc(doc(db, "artikel", id), {
          imageUrl: newImageUrl,
        });

        setArtikel((prevArtikel) => ({
          ...prevArtikel,
          imageUrl: newImageUrl,
        }));
      }
      
      setShowToast(true);
      window.location.href = "/admin/artikel";

      console.log("Artikel updated successfully!");
    } catch (error) {
      console.error("Error updating artikel", error);
    }
  };

  return (
    <IonPage>
      <Sidebar />
      <IonContent>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Artikel updated successfully!"
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
          <h1 style={{ alignSelf: "center" }}>Edit Artikel</h1>
          <IonInput
            label="Title"
            fill="solid"
            labelPlacement="floating"
            value={artikel.title}
            placeholder="Enter title"
            onIonChange={(e) => handleInputChange("title", e.detail.value!)}
          />
          <IonInput
            label="Date"
            fill="solid"
            labelPlacement="floating"
            type="date"
            value={artikel.date}
            placeholder="Enter date"
            onIonChange={(e) => handleInputChange("date", e.detail.value!)}
          />
          <IonTextarea
            label="Description"
            fill="solid"
            labelPlacement="floating"
            value={artikel.description}
            placeholder="Enter description"
            onIonChange={(e) =>
              handleInputChange("description", e.detail.value!)
            }
          />
          <IonTextarea
            label="Detail"
            fill="solid"
            labelPlacement="floating"
            value={artikel.detail}
            placeholder="Enter detail"
            onIonChange={(e) => handleInputChange("detail", e.detail.value!)}
          />
          <IonLabel>Current Image</IonLabel>
          <IonImg src={artikel.imageUrl} alt={artikel.title} />
          <IonLabel>New Image</IonLabel>
          <input type="file" onChange={handleImageChange} />
          <IonButton onClick={handleSave}>Save</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ArtikelEdit;
