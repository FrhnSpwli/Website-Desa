import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonMenuButton,
  IonButton,
  IonImg,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonCardTitle,
} from "@ionic/react";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import Styles from "../styles/Landing.module.css";
import Pic from "/images/Fontaine Genshin impact.jpg";
import Pict1 from "/images/fontaine genim.jpg";
import Pict2 from "/images/fonten gi.jpg";
import Pict3 from "/images/fontaine.jpg";
import Pict4 from "/images/fontaine gi.jpg";
import Button from "../components/atoms/button";
import { useEffect, useState } from "react";

const Landing: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const addSize = (isSmallScreen: boolean) => (isSmallScreen ? "small" : undefined);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
  
    // Call handleResize on initial mount
    handleResize();
  
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
  
    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <IonPage>
      <Navbar>Home</Navbar>
      <IonContent>
        <div className={Styles.container}>
          <div className={Styles.content}>
            <section className={Styles.contentButton}>
              <IonText>
                <h1 className={Styles.contentHeading1}>
                  Selamat Datang di Web Desa Fontaine
                </h1>
              </IonText>
              <IonText>
                <p className={Styles.contentHeading2}>
                  Apa yang anda cari ada disini!
                </p>
              </IonText>
              <Button size={addSize(isSmallScreen)} path="/about">Get Started!</Button>
            </section>
            <IonImg src={Pic} />
          </div>
          <div className={Styles.cardContainer}>
            <IonText className={Styles.cardText}> Berita Terkini </IonText>
            <div className={Styles.cardTitle}>
              <div className={Styles.cardResponsive}>
                <IonCard>
                  <IonImg src={Pict1} />
                  <IonCardHeader>
                    <IonCardSubtitle>Desa Fontaine</IonCardSubtitle>
                    <IonCardTitle>Wilayah Baru?</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Fontaine telah memiliki beberapa rumor dan bocoran yang
                    mengisyaratkan apa yang diharapkan dari wilayah baru
                    tersebut.
                  </IonCardContent>
                </IonCard>
                <IonCard>
                  <IonImg src={Pict2} />
                  <IonCardHeader>
                    <IonCardSubtitle>Desa Fontaine</IonCardSubtitle>
                    <IonCardTitle>
                      Siapa Archon Fontaine Sebenarnya?
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Dari berita yang saya dapatkan menurut warga Desa Fontaine
                    archon fontaine yang sebenarnya adalah...
                  </IonCardContent>
                </IonCard>
                <IonCard>
                  <IonImg src={Pict3} />
                  <IonCardHeader>
                    <IonCardSubtitle>Desa Fontaine</IonCardSubtitle>
                    <IonCardTitle>Furina Focalor</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Furina berkata: "Satu kebohongan selalu mengikuti kebohongan
                    yang lain, sehingga "keadilan" pasti menunggu di akhir."
                  </IonCardContent>
                </IonCard>
                <IonCard>
                  <IonImg src={Pict4} />
                  <IonCardHeader>
                    <IonCardSubtitle>Desa Fontaine</IonCardSubtitle>
                    <IonCardTitle>Bangunan di Desa Fontaine</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    konstruksi bangunan di Fontaine mengadopsi desain klasik
                    bergaya Eropa dan hadir dengan beberapa bangunan publik
                    utama macam teater Opera Epiclese, pengadilan The Court of
                    Fontaine, dan masih banyak lagi.
                  </IonCardContent>
                </IonCard>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Landing;
