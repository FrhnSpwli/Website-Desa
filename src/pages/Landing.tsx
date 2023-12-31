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
import Button from "../components/atoms/button";
import { useEffect, useState } from "react";

const Landing: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const addSize = (isSmallScreen: boolean) =>
    isSmallScreen ? "small" : undefined;

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
                  Welcome to Tana Toraja
                </h1>
              </IonText>
              <IonText>
                <p className={Styles.contentHeading2}>
                  What are you looking for about Tana Toraja is here
                </p>
              </IonText>
              <Button size={addSize(isSmallScreen)} path="/about">
                Get Started!
              </Button>
            </section>
            <img src="https://img.inews.co.id/media/822/files/inews_new/2023/01/09/Kampung_unik_di_Toraja.jpg" />
          </div>
          <div className={Styles.cardContainer}>
            <IonText className={Styles.cardText}> Latest News </IonText>
            <div className={Styles.cardTitle}>
              <div className={Styles.cardResponsive}>
                <IonCard>
                  <img src="https://pict-a.sindonews.net/webp/732/pena/news/2023/12/12/174/1274697/tertimpa-pohon-tumbang-lansia-di-tana-toraja-tewas-cgz.webp" />
                  <IonCardHeader>
                    <IonCardSubtitle>12-12-2023</IonCardSubtitle>
                    <IonCardTitle>
                      Struck by a Falling Tree, Elderly Person in Tana Toraja
                      Passes Away
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Yohanis Parrangan (72), a resident of Bena Hamlet, Buntu
                    Masakke Village, Sangalla District, Tana Toraja, South
                    Sulawesi, met his demise on Monday (12/11/2023) after being
                    struck by a falling tree. Before succumbing to the incident,
                    the victim was rushed to Lakipadada Regional General
                    Hospital. Unfortunately, due to severe injuries, the
                    victim's life could not be saved.
                  </IonCardContent>
                </IonCard>

                <IonCard>
                  <img src="https://cdn0-production-images-kly.akamaized.net/247Wgq2V7QE5nF0ZiqIwYkZM48k=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/702031/original/ma_nene.jpg" />
                  <IonCardHeader>
                    <IonCardSubtitle>18-10-2023</IonCardSubtitle>
                    <IonCardTitle>
                      Tau-Tau Toraja, Understanding the Meaning in a Forgotten
                      Tradition
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Amidst the hustle and bustle of the modern world, cultural
                    traditions often get marginalized and forgotten. One example
                    is the tradition of making Tau-Tau by the Toraja people in
                    South Sulawesi. As reported in an inspirational article from
                    the Ministry of Education, Culture, Research, and
                    Technology, we will attempt to understand the profound
                    meaning of this tradition and efforts to preserve it.
                  </IonCardContent>
                </IonCard>
                <IonCard>
                  <img src="https://akcdn.detik.net.id/community/media/visual/2023/11/30/bupati-tana-toraja-theofilus-allorerung-saat-melantik-dr-rudhy-andi-lolo-sebagai-sekda-tana-toraja_169.jpeg?w=700&q=90" />
                  <IonCardHeader>
                    <IonCardSubtitle>30-11-2023</IonCardSubtitle>
                    <IonCardTitle>
                      Regent of Tana Toraja Inaugurates Rudhy Andi Lolo as
                      Secretary
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    The Regent of Tana Toraja, South Sulawesi (Sulsel),
                    Theofilus Allorerung, has inaugurated Rudhy Andi Lolo as the
                    Secretary of Tana Toraja. Rudhy previously served as the
                    Head of the Tana Toraja Health Department.
                  </IonCardContent>
                </IonCard>
                <IonCard>
                  <img src="https://akcdn.detik.net.id/community/media/visual/2023/12/06/suasana-di-pasar-makale-tana-toraja-sulsel-rachmat-ariadidetiksulsel_169.jpeg?w=700&q=90" />
                  <IonCardHeader>
                    <IonCardSubtitle>06-12-2023</IonCardSubtitle>
                    <IonCardTitle>
                      Pork Prices in Toraja Rise Ahead of Christmas, Reaching
                      IDR 65,000 per Kilogram
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    In the Makale Market, Tana Toraja, on Wednesday (12/6/2023),
                    the average price of pork ranged from Rp 60,000 to Rp 65,000
                    per kilogram (kg). Meanwhile, the live pigs were priced
                    between Rp 4 million and Rp 5 million per head.
                  </IonCardContent>
                </IonCard>
              </div>
            </div>
          </div>

          <IonText className={Styles.cardText2}> Announcement </IonText>
          <div className={Styles.cardContainer2}>
            <div className={Styles.cardTitle2}>
              <div className={Styles.cardResponsive2}>
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>15-04-2023</IonCardSubtitle>
                    <IonCardTitle>
                      Announcement of the Final Results After Objections for the
                      Prospective Civil Servants with Specific Skills (PPPK)
                      Teacher Recruitment for the Academic Year 2023.
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    This announcement is conveyed based on the Selection
                    Committee's official notice numbered 810-196/BKPSDM/IV/2023
                    dated April 14, 2023, regarding the Final Results After
                    Objections for the Selection of Prospective PPPK Candidates
                    for the Functional Position of Teacher in the Tana Toraja
                    Regency Government for the Fiscal Year 2023.
                  </IonCardContent>
                </IonCard>

                <IonCard className={Styles.ioncard2}>
                  <IonCardHeader>
                    <IonCardSubtitle>10-08-2023</IonCardSubtitle>
                    <IonCardTitle>
                      Announcement of the Open Selection for the High Primary
                      Leadership Position of Regional Secretary of the Tana
                      Toraja Regency Government for the Year 2023.
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    The Selection Committee hereby announces the Open Selection
                    for the High Primary Leadership Position of Regional
                    Secretary of the Tana Toraja Regency Government for the Year
                    2023, as per the official notice numbered
                    800/01/Pansel.JPTP.Sekda/VIII/2023 dated August 8, 2023.
                  </IonCardContent>
                </IonCard>

                <IonCard className={Styles.ioncard3}>
                  <IonCardHeader>
                    <IonCardSubtitle>12-09-2023</IonCardSubtitle>
                    <IonCardTitle>
                      Announcement of the Final Assessment Results for the Open
                      Selection of the Position of Regional Secretary of Tana
                      Toraja Regency for the Year 2023
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    We hereby publish the Announcement of the Open Selection
                    Committee for the Position of Regional Secretary (JPTP
                    Sekda) Number: 800/16/Pansel JPTP.Sekda/IX/2023 dated
                    September 12, 2023, regarding the Determination of the Final
                    Assessment Results for the Open Selection of the High
                    Primary Leadership Position of the Regional Secretary of
                    Tana Toraja Regency.
                  </IonCardContent>
                </IonCard>

                <IonCard className={Styles.ioncard4}>
                  <IonCardHeader>
                    <IonCardSubtitle>17-05-2023</IonCardSubtitle>
                    <IonCardTitle>
                      Announcement of the Final Results After Objections for the
                      Selection of Prospective Civil Servants with Specific
                      Skills (PPPK) Technical Staff of the Regional Government
                      of Tana Toraja Regency for the Academic Year 2023.
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Hereby, the Selection Committee announces the Results After
                    Objections for the Prospective Civil Servants with Specific
                    Skills (PPPK) Recruitment of the Tana Toraja Regency
                    Government for the Fiscal Year 2023. This announcement is
                    based on the official notice numbered 810-229/BKPSDM/V/2023
                    dated May 16, 2023, attached below, regarding the Final
                    Results After Objections for the Selection of Prospective
                    PPPK Candidates for the Technical Staff Functional Positions
                    in the Tana Toraja Regency Government for the Fiscal Year
                    2023.
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
