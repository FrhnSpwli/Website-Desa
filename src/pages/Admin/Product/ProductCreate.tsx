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

const ProductCreate: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
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
    setProduct((prevProduct) => ({ ...prevProduct, [key]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];

    if (selectedImage) {
      console.log("Selected Image:", selectedImage);
      setProduct((prevProduct) => ({ ...prevProduct, image: selectedImage }));
    }
  };

  const handleSave = async () => {
    try {
      const docRef = await addDoc(collection(db, "product"), {
        title: product.title,
        description: product.description,
        price: product.price,
      });

      if (product.image) {
        const storageRef = ref(storage, `product/${docRef.id}`);
        await uploadBytes(storageRef, product.image);
      }
      setShowToast(true);
      window.location.href = "/admin/product";

      console.log("Product created successfully!");
    } catch (error) {
      console.error("Error creating procuct", error);
    }
  };

  return (
    <IonPage>
      <Sidebar />
      <IonContent>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Product created successfully!"
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
          <h1 style={{ alignSelf: "center" }}>Create Product</h1>
          <IonInput
            label="Title"
            labelPlacement="floating"
            placeholder="Enter title"
            fill="solid"
            onIonChange={(e) => handleInputChange("title", e.detail.value!)}
          />
          <IonInput
            label="Price"
            labelPlacement="floating"
            type="number"
            fill="solid"
            onIonChange={(e) => handleInputChange("price", e.detail.value!)}
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
          <IonLabel>Image</IonLabel>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {product.image && (
            <IonImg
              src={URL.createObjectURL(product.image)}
              alt="Selected Image"
            />
          )}
          <IonButton onClick={handleSave}>Save</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ProductCreate;
