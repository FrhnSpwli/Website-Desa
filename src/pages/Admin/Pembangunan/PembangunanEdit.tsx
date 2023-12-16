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
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

import Sidebar from "../../../components/organisms/Sidebar";

const PembangunanEdit: React.FC = () => {
    const { id } = useParams<{ id: string }>();
  
    const [pembangunanList, setPembangunanList] = useState({
      id: "",
      name: "",
      luas: 0,
      biaya: "",
      lokasi: "",
      keterangan: "",
    });
  
    const [isAuth, setIsAuth] = useState(false);
    const [showToast, setShowToast] = useState(false);
  
    useEffect(() => {
      const token = localStorage.getItem("auth");
      if (token) {
        setIsAuth(true);
      } else {
        window.location.href = "/login";
      }
    }, []);
  
    useEffect(() => {
      const getPembangunanList = async () => {
        try {
          const data = await getDoc(doc(db, "pembangunan", id));
          if (data.exists()) {
            const { name, luas, biaya, lokasi, keterangan } = data.data();
            setPembangunanList({ id, name, luas, biaya, lokasi, keterangan });
          } else {
            console.error("Pembangunan not found");
          }
        } catch (error) {
          console.error("Error fetching Pembangunan", error);
        }
      };
  
      getPembangunanList();
    }, [id]);
  
    const handleInputChange = (key: string, value: string | number) => {
      setPembangunanList((prevPembangunan) => ({
        ...prevPembangunan,
        [key]: value,
      }));
    };
  
    const handleSave = async () => {
      try {
        await updateDoc(doc(db, "pembangunan", id), {
          name: pembangunanList.name,
          luas: pembangunanList.luas,
          biaya: pembangunanList.biaya,
          lokasi: pembangunanList.lokasi,
          keterangan: pembangunanList.keterangan,
        });
  
        setShowToast(true);
        window.location.href = "/admin/pembangunan";
  
        console.log("Pembangunan updated successfully!");
      } catch (error) {
        console.error("Error updating pembangunan", error);
      }
    };
  
    return (
      <IonPage>
        <Sidebar />
        <IonContent>
          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Pembangunan updated successfully!"
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
            <h1 style={{ alignSelf: "center" }}>Edit Pembangunan</h1>
            <IonInput
              label="Nama Pembangunan"
              fill="solid"
              labelPlacement="floating"
              value={pembangunanList.name}
              placeholder="Enter name"
              onIonChange={(e) => handleInputChange("name", e.detail.value!)}
            />
            <IonInput
              label="Luas"
              fill="solid"
              type="number"
              labelPlacement="floating"
              value={pembangunanList.luas}
              placeholder="Enter luas"
              onIonChange={(e) => handleInputChange("luas", e.detail.value!)}
            />
            <IonInput
              label="Biaya"
              fill="solid"
              type="number"
              labelPlacement="floating"
              value={pembangunanList.biaya}
              placeholder="Enter biaya"
              onIonChange={(e) => handleInputChange("biaya", e.detail.value!)}
            />
            <IonInput
              label="Lokasi"
              fill="solid"
              labelPlacement="floating"
              value={pembangunanList.lokasi}
              placeholder="Enter lokasi"
              onIonChange={(e) => handleInputChange("lokasi", e.detail.value!)}
            />
          <IonSelect
            value={pembangunanList.keterangan}
            placeholder="Select status"
            onIonChange={(e) => handleInputChange("keterangan", e.detail.value)}
          >
            <IonSelectOption value="Process">Process</IonSelectOption>
            <IonSelectOption value="Done">Done</IonSelectOption>
            <IonSelectOption value="Stopped">Stopped</IonSelectOption>
          </IonSelect>
            <IonButton onClick={handleSave}>Save</IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default PembangunanEdit;
  