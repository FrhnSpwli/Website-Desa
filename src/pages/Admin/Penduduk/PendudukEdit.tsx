import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonToast,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import Sidebar from "../../../components/organisms/Sidebar";

const PendudukEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [pendudukList, setPendudukList] = useState({
    id: "",
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
  const [showToast, setShowToast] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth");
    if (token) {
      setIsAuth(true);
    } else {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    const getPendudukData = async () => {
      try {
        const data = await getDoc(doc(db, "penduduk", id));
        if (data.exists()) {
          const { name, address, email, gender, religion } = data.data();
          setPendudukList({
            id,
            name: {
              firstName: name.firstName,
              lastName: name.lastName,
            },
            address,
            email,
            gender,
            religion,
          });
        } else {
          console.error("Penduduk not found");
        }
      } catch (error) {
        console.error("Error fetching Penduduk", error);
      }
    };

    getPendudukData();
  }, [id]);

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleInputChange = (key: string, value: string) => {
    if (key === "name.firstName" || key === "name.lastName") {
      setPendudukList((prevPenduduk) => ({
        ...prevPenduduk,
        name: {
          ...prevPenduduk.name,
          [key.split('.')[1]]: value,
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
      await updateDoc(doc(db, "penduduk", id), {
        name: {
          firstName: pendudukList.name.firstName,
          lastName: pendudukList.name.lastName,
        },
        address: pendudukList.address,
        email: pendudukList.email,
        gender: pendudukList.gender,
        religion: pendudukList.religion,
      });

      setShowToast(true);
      window.location.href = "/admin/penduduk";

      console.log("Penduduk updated successfully!");
    } catch (error) {
      console.error("Error updating Penduduk", error);
    }
  };

  return (
    <IonPage>
      <Sidebar />
      <IonContent>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Penduduk updated successfully!"
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
          <h1 style={{ alignSelf: "center" }}>Edit Penduduk</h1>
          <IonInput
            label="Nama Depan"
            labelPlacement="floating"
            placeholder="Masukkan Nama Depan"
            fill="solid"
            value={pendudukList.name.firstName}
            onIonChange={(e) =>
              handleInputChange("name.firstName", e.detail.value!)
            }
          />
          <IonInput
            label="Nama Belakang"
            labelPlacement="floating"
            placeholder="Masukkan Nama Belakang"
            fill="solid"
            value={pendudukList.name.lastName}
            onIonChange={(e) =>
              handleInputChange("name.lastName", e.detail.value!)
            }
          />
          <IonInput
            label="Alamat"
            labelPlacement="floating"
            placeholder="Masukkan Alamat"
            fill="solid"
            value={pendudukList.address}
            onIonChange={(e) => handleInputChange("address", e.detail.value!)}
          />
          <IonInput
            label="Email"
            labelPlacement="floating"
            placeholder="Masukkan Email"
            fill="solid"
            type="email"
            value={pendudukList.email}
            onIonChange={(e) => handleInputChange("email", e.detail.value!)}
          />
          <IonSelect
            label="Jenis Kelamin"
            labelPlacement="floating"
            placeholder="Masukkan Jenis Kelamin"
            fill="solid"
            value={pendudukList.gender}
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
            value={pendudukList.religion}
            onIonChange={(e) => handleInputChange("religion", e.detail.value)}
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

export default PendudukEdit;
