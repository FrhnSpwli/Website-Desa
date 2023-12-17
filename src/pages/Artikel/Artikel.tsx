import { useEffect, useState } from "react";

import { db } from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonPage,
  IonImg,
  IonContent,
  SearchbarInputEventDetail,
} from "@ionic/react";

import Styles from "../../styles/Artikel.module.css";
import Navbar from "../../components/organisms/Navbar";
import SearchBar from "../../components/molecules/searchBar";
import Footer from "../../components/organisms/Footer";

const Artikel = () => {
  const artikelRef = collection(db, "artikel");
  const storage = getStorage();

  const [originalArtikelList, setOriginalArtikelList] = useState<
    {
      id: string;
      title: string;
      description: string;
      date: string;
      // detail: string;
      imageUrl: string;
    }[]
  >([]);

  const [artikelList, setArtikelList] = useState<
    {
      id: string;
      title: string;
      description: string;
      date: string;
      // detail: string;
      imageUrl: string;
    }[]
  >([]);

  useEffect(() => {
    const getArtikelList = async () => {
      try {
        const data = await getDocs(artikelRef);
        const items = await Promise.all(
          data.docs.map(async (doc) => {
            const { title, description, date, detail } = doc.data();
            const id = doc.id;
            const imageUrl = await getDownloadURL(
              ref(storage, `artikel/${id}`)
            );

            const parsedDate = new Date(date);
            const formattedDate = parsedDate.toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            });

            return {
              id,
              title,
              description,
              date: formattedDate,
              detail,
              imageUrl,
            };
          })
        );

        setArtikelList(items);
        setOriginalArtikelList(items);
      } catch (err) {
        console.error(err);
      }
    };

    getArtikelList();
  }, []);

  const handleInput = (event: CustomEvent<SearchbarInputEventDetail>) => {
    const query = event.detail.value ?? "";
    if (query === "") {
      setArtikelList([...originalArtikelList]);
    } else {
      const filteredData = originalArtikelList.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setArtikelList([...filteredData]);
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
      <Navbar>Artikel</Navbar>
      <IonContent>
        <div className={Styles.container}>
          <div className={Styles.title}>
            <h1>Kabar Terbaru</h1>
          </div>
          <SearchBar onInput={handleInput}>Search Bar</SearchBar>

          {artikelList.length === 0 && (
            <div className={Styles.noArtikel}>
              <h1>Loading</h1>
            </div>
          )}

          <div className={Styles.responsive}>
            {artikelList.map((item, index) => (
              <IonCard
                key={index}
                onClick={() => (window.location.href = `/artikel/${item.id}`)}
                className={Styles.card}
              >
                <IonImg src={item.imageUrl} />
                <IonCardHeader>
                  <IonCardSubtitle>{item.date}</IonCardSubtitle>
                  <IonCardTitle>{item.title}</IonCardTitle>
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

export default Artikel;
