// import React, {useState} from 'react';
// import { IonPage, IonContent, IonHeader, IonTitle, IonImg, IonItem, IonCardSubtitle } from '@ionic/react';
// import Navbar from '../../components/organisms/Navbar';
// import Footer from '../../components/organisms/Footer';

// function DetailProduct() {
//   const data = [{
//     title: 'Cimi-Cimi',
//     price: "Rp 10.000",
//     description: 'Cimi-cimi memiliki berbagai macam rasa seperti rasa keju, rasa pedas, rasa asin, dan rasa manis. Cimi-cimi memiliki bentuk yang unik dan menarik.',
//     Image:'/images/cimicimi.jpg'
//   }];
//   const [results, setResults] = useState([...data]);
//  return (
//  );
// }
// export default DetailProduct;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../../../config/firebase";

import {
  IonPage,
  IonContent,
  IonHeader,
  IonImg,
  IonCardSubtitle,
} from "@ionic/react";

import Styles from "../../styles/detailproduct.module.css";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import { formatRupiah } from "../../../utils/formatter";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productDoc = await getDoc(doc(db, "product", id));
        if (productDoc.exists()) {
          const { title, price, description } = productDoc.data();
          const imageUrl = await getDownloadURL(ref(storage, `product/${id}`));
          setProduct({ id, title, price, description, imageUrl });
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <IonPage>
        <IonContent>
          <div>Loading...</div>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <Navbar>Detail Product</Navbar>
      <IonContent>
        <div className={Styles.container}>
          <div className={Styles.title}>
            <h1>Product Detail</h1>
          </div>
          <div className={Styles.responsive}>
            <IonHeader className={Styles.content}>
              <IonImg src={product.imageUrl} className={Styles.image} />
              <IonCardSubtitle className={Styles.text}>
                <h2>{product.title}</h2>
                <h4>{formatRupiah(product.price)}</h4>
                <p>
                  {" "}
                  Description: <br />
                  {product.description}
                </p>
              </IonCardSubtitle>
            </IonHeader>
          </div>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default ProductDetail;
