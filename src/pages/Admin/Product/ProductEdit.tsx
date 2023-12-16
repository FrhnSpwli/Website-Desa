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

const ProductEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState({
    id: "",
    title: "",
    description: "",
    price: 0,
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
    const fetchProduct = async () => {
      try {
        const data = await getDoc(doc(db, "product", id));
        if (data.exists()) {
          const { title, description, price } = data.data();
          const imageUrl = await getDownloadURL(ref(storage, `product/${id}`));
          setProduct({ id, title, description, price, imageUrl });
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleInputChange = (key: string, value: string) => {
    setProduct((prevProduct) => ({ ...prevProduct, [key]: value }));
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
      await updateDoc(doc(db, "product", id), {
        title: product.title,
        description: product.description,
        price: product.price,
      });

      if (newImage) {
        if (product.imageUrl) {
          const imageRef = ref(storage, product.imageUrl);
          await deleteObject(imageRef);
        }

        const storageRef = ref(storage, `product/${id}`);
        await uploadBytes(storageRef, newImage);

        const newImageUrl = `product/${id}`;
        await updateDoc(doc(db, "product", id), {
          imageUrl: newImageUrl,
        });

        setProduct((prevProduct) => ({
          ...prevProduct,
          imageUrl: newImageUrl,
        }));
      }
      setShowToast(true);
      window.location.href = "/admin/product";

      console.log("Product updated successfully!");
    } catch (error) {
      console.error("Error updating product", error);
    }
  };

  return (
    <IonPage>
      <Sidebar />
      <IonContent>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Product updated successfully!"
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
          <h1 style={{ alignSelf: "center" }}>Edit Product</h1>
          <IonInput
            label="Title"
            fill="solid"
            labelPlacement="floating"
            value={product.title}
            placeholder="Enter title"
            onIonChange={(e) => handleInputChange("title", e.detail.value!)}
          />
          <IonInput
            label="Price"
            fill="solid"
            labelPlacement="floating"
            type="number"
            value={product.price}
            placeholder="Enter price"
            onIonChange={(e) => handleInputChange("price", e.detail.value!)}
          />
          <IonTextarea
            label="Description"
            fill="solid"
            labelPlacement="floating"
            value={product.description}
            placeholder="Enter description"
            onIonChange={(e) =>
              handleInputChange("description", e.detail.value!)
            }
          />
          <IonLabel>Current Image</IonLabel>
          <IonImg src={product.imageUrl} alt={product.title} />
          <IonLabel>New Image</IonLabel>
          <input type="file" onChange={handleImageChange} />
          <IonButton onClick={handleSave}>Save</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ProductEdit;
