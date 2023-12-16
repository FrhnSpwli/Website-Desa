import { useEffect, useState } from "react";

import { db } from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

import {
  IonPage,
  IonContent,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";

import Navbar from "../../components/organisms/Navbar";
import SearchBar from "../../components/molecules/searchBar";
import Footer from "../../components/organisms/Footer";
import Styles from "../../styles/Product.module.css";
import { formatRupiah } from "../../../utils/formatter";

const Product = () => {
  const productRef = collection(db, "product");
  const storage = getStorage();

  const [originalProductList, setOriginalProductList] = useState<
    {
      id: string;
      title: string;
      price: number;
      description: string;
      imageUrl: string;
    }[]
  >([]);

  const [productList, setProductList] = useState<
    {
      id: string;
      title: string;
      price: number;
      description: string;
      imageUrl: string;
    }[]
  >([]);

  useEffect(() => {
    const getProductList = async () => {
      try {
        const data = await getDocs(productRef);
        const items = await Promise.all(
          data.docs.map(async (doc) => {
            const { title, price, description } = doc.data();
            const id = doc.id;
            const imageUrl = await getDownloadURL(
              ref(storage, `product/${id}`)
            );
            return { id, title, price, description, imageUrl };
          })
        );
        setOriginalProductList(items);
        setProductList(items);
      } catch (err) {
        console.log(err);
      }
    };
    getProductList();
  }, []);

  const handleInput = (event: any) => {
    const query = event.target.value ?? "";
    if (query === "") {
      setProductList([...originalProductList]);
    } else {
      const filteredData = originalProductList.filter((item) => {
        return item.title
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase());
      });
      setProductList([...filteredData]);
    }
  };

  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <IonPage>
      <Navbar>Product</Navbar>
      <IonContent>
        <div className={Styles.container}>
          <div className={Styles.title}>
            <h1>Featured Product</h1>
          </div>
          <SearchBar onInput={handleInput}>Search Bar</SearchBar>
          <div className={Styles.responsive}>
            {productList.map((item, index) => (
              <IonCard
                key={index}
                onClick={() => (window.location.href = `/product/${item.id}`)}
                className={Styles.card}
              >
                <IonImg src={item.imageUrl} className={Styles.image} />
                <IonCardHeader>
                  <IonCardTitle>{item.title}</IonCardTitle>
                  <IonCardSubtitle>{formatRupiah(item.price)}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>{truncateDescription(item.description, 100)}</IonCardContent>
              </IonCard>
            ))}
          </div>
        </div>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Product;
