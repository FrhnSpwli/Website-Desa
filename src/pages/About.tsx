import {
  IonContent,
  IonPage,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import Button from "../components/atoms/button";
import Styles from "../styles/About.module.css";
import { link } from "ionicons/icons";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <IonPage>
      <Navbar>Profile</Navbar>
      <IonContent>
        <div className={Styles.hero}>
          <div className={Styles.content}>
            <h4>Hello, Welcome to</h4>
            <h1>Teyvat</h1>
            <h3>a village full of culture and natural panorama</h3>
            <Button shape="round">Jelajahi Komuditas</Button>
          </div>
        </div>

        <section className={Styles.about}>
          <div className={Styles.main}>
            <img src="https://i.pinimg.com/564x/52/8f/4a/528f4a0b09cd03f8acedd974df297ee3.jpg" />
            <div className={Styles.about_text}>
              <IonText color="primary">
                <h2>About Us</h2>
              </IonText>
              <h5>Teyvat - Mondstadt</h5>
              <p>
                Mondstadt is one of the seven regions of Teyvat, and the first
                in which the Traveler starts to look for their lost sibling. It
                is the nation that worships Lord Barbatos, the Anemo Archon and
                God of Freedom.
              </p>
              <Button shape="round" path="/contact">
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        <div className={Styles.service}>
          <div className={Styles.service_text}>
            <IonText color="primary">
              <h2>Vision and Mission</h2>
            </IonText>
          </div>

          <div className={Styles.responsive}>
            <IonCard color="primary">
              <IonCardHeader>
                <IonCardTitle>VISION</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem color={"primary"}>
                  <p>
                    Menyelenggarakan pemerintah daerah yang bersih , transparan,
                    demokratis dan terbebas dari korupsi
                  </p>
                </IonItem>
                <IonItem color={"primary"}>
                  <p>
                    Meningkatkan mutu kesejahteraan masyarakat untuk mencapai
                    taraf hidup yang lebih baik dan berpendidikan
                  </p>
                </IonItem>
                <IonItem color={"primary"}>
                  <p>
                    Mengembangkan perekonomian masyarakat melalui potensi desa
                  </p>
                </IonItem>
                <IonItem color={"primary"}>
                  <p>Meningkatkan seni budaya yang ada di desa Mondstadt</p>
                </IonItem>
                <IonItem color={"primary"}>
                  <p>Meningkatkan kegiatan sosial</p>
                </IonItem>
              </IonCardContent>
            </IonCard>

            <IonCard color="primary">
              <IonCardHeader>
                <IonCardTitle>MISSION</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem color={"primary"}>
                  <p>
                    Menyelenggarakan pemerintah daerah yang bersih , transparan,
                    demokratis dan terbebas dari korupsi
                  </p>
                </IonItem>
                <IonItem color={"primary"}>
                  <p>
                    Mengembangkan perekonomian masyarakat melalui potensi desa
                  </p>
                </IonItem>
                <IonItem color={"primary"}>
                  <p>
                    Meningkatkan mutu kesejahteraan masyarakat untuk mencapai
                    taraf hidup yang lebih baik dan berpendidikan
                  </p>
                </IonItem>
                <IonItem color={"primary"}>
                  <p>Meningkatkan kegiatan sosial</p>
                </IonItem>
                <IonItem color={"primary"}>
                  <p>Meningkatkan seni budaya yang ada di desa Mondstadt</p>
                </IonItem>
              </IonCardContent>
            </IonCard>
          </div>
        </div>

        <section className={Styles.chief}>
          <div className={Styles.profile}>
            <div className={Styles.chief_text}>
              <IonText color="primary">
                <h2>Chief</h2>
              </IonText>
              <h5>Nama : Jean Gunnhildr</h5>
              <h5>Vision : Anemo</h5>
              <h5>Jabatan : Grand Master Mondstadt</h5>

              <p>
                Mondstadt is one of the seven regions of Teyvat, and the first
                in which the Traveler starts to look for their lost sibling. It
                is the nation that worships Lord Barbatos, the Anemo Archon and
                God of Freedom.{" "}
              </p>
            </div>
            <img src="https://i.pinimg.com/564x/86/5f/3b/865f3b3d4da5a6615c580a275d84ab37.jpg" />
          </div>
        </section>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default About;
