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

const PendudukCreate: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [pendudukList, setPendudukList] = useState({
    name: {
      firstName: "",
      lastName: "",
    },
    address: "",
    email: "",
    gender: "",
    religion: "",
  });

  const [isAuth, setIsAuth] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth");
    if (token) {
      setIsAuth(true);
      console.log("token", token);
    } else {
      window.location.href = "/login";
    }
  }, []);

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleInputChange = (key: string, value: string) => {
    if (key === "firstName" || key === "lastName") {
      setPendudukList((prevPenduduk) => ({
        ...prevPenduduk,
        name: {
          ...prevPenduduk.name,
          [key]: value,
        },
      }));
    } else if (key === "email") {
      setPendudukList((prevPenduduk) => ({
        ...prevPenduduk,
        email: value,
      }));
      setIsEmailInvalid(false);
    } else {
      setPendudukList((prevPenduduk) => ({
        ...prevPenduduk,
        [key]: value,
      }));
    }
  };

  const handleSave = async () => {
    if (!isEmailValid(pendudukList.email)) {
      setIsEmailInvalid(true);
      return;
    }

    try {
      await addDoc(collection(db, "penduduk"), {
        ...pendudukList,
      });

      setShowToast(true);
      window.location.href = "/admin/penduduk";

      console.log("Penduduk added successfully!");
    } catch (error) {
      console.error("Error creating penduduk", error);
    }
  };

  return (
    <IonPage>
      <Sidebar />
      <IonContent>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Penduduk added successfully!"
          duration={2000}
        />
        <IonToast
          isOpen={isEmailInvalid}
          onDidDismiss={() => setIsEmailInvalid(false)}
          message="Invalid email format"
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
          <h1 style={{ alignSelf: "center" }}>Create Penduduk</h1>
          <IonInput
            label="Nama Depan"
            labelPlacement="floating"
            placeholder="Masukkan Nama Depan"
            fill="solid"
            onIonChange={(e) => handleInputChange("firstName", e.detail.value!)}
          />
          <IonInput
            label="Nama Belakang"
            labelPlacement="floating"
            placeholder="Masukkan Nama Belakang"
            fill="solid"
            onIonChange={(e) => handleInputChange("lastName", e.detail.value!)}
          />
          <IonInput
            label="Alamat"
            labelPlacement="floating"
            placeholder="Masukkan Alamat"
            fill="solid"
            onIonChange={(e) => handleInputChange("address", e.detail.value!)}
          />
          <IonInput
            label="Email"
            labelPlacement="floating"
            placeholder="Masukkan Email"
            fill="solid"
            type="email"
            onIonChange={(e) => handleInputChange("email", e.detail.value!)}
          />
          <IonSelect
            label="Jenis Kelamin"
            labelPlacement="floating"
            placeholder="Masukkan Jenis Kelamin"
            fill="solid"
            onIonChange={(e) => handleInputChange("gender", e.detail.value!)}
          >
            <IonSelectOption value="Laki-Laki">Laki-Laki</IonSelectOption>
            <IonSelectOption value="Perempuan">Perempuan</IonSelectOption>
          </IonSelect>
          <IonSelect
            label="Agama"
            labelPlacement="floating"
            placeholder="Masukkan Agama"
            fill="solid"
            onIonChange={(e) => handleInputChange("religion", e.detail.value!)}
          >
            <IonSelectOption value="Islam">Islam</IonSelectOption>
            <IonSelectOption value="Katolik">Katolik</IonSelectOption>
            <IonSelectOption value="Kristen">Kristen</IonSelectOption>
            <IonSelectOption value="Hindu">Hindu</IonSelectOption>
            <IonSelectOption value="Budha">Budha</IonSelectOption>
            <IonSelectOption value="Konghucu">Konghucu</IonSelectOption>
          </IonSelect>
          <IonButton onClick={handleSave}>Save</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PendudukCreate;
