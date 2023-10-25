import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import Button from "../components/atoms/button";
import Styles from "../styles/About.module.css";
import { link } from "ionicons/icons";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <>
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
                God of Freedom.{" "}
              </p>
              <Button shape="round" path="/contact">Contact Us</Button>
            </div>
          </div>
        </section>

        <div className={Styles.service}>

        </div>
      </IonContent>
      <Footer />
    </>
  );
};

export default About;
