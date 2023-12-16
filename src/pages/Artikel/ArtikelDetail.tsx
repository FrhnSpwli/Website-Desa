import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../../../config/firebase";
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonImg,
} from "@ionic/react";
import Navbar from "../../components/organisms/Navbar";
import Footer from "../../components/organisms/Footer";

const ArtikelDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const articleDoc = await getDoc(doc(db, "artikel", id));
        if (articleDoc.exists()) {
          const { title, description, date, detail } = articleDoc.data();
          const imageUrl = await getDownloadURL(ref(storage, `artikel/${id}`));
          setArticle({ id, title, description, date, detail, imageUrl });
        } else {
          console.error("Article not found");
        }
      } catch (error) {
        console.error("Error fetching article", error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
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
      <Navbar>{article.title}</Navbar>
      <IonContent>
        <div style={{ padding: "64px" }}>
          <IonCard>
            <IonImg src={article.imageUrl} />
            <IonCardHeader>
              <IonCardSubtitle>{article.date}</IonCardSubtitle>
              <IonCardTitle>{article.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {article.description} <br />
              {article.detail}
            </IonCardContent>
          </IonCard>
        </div>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default ArtikelDetail;
