import {
  IonContent,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonPage,
  IonItem,
} from "@ionic/react";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import Button from "../components/atoms/button";
import Styles from "../styles/About.module.css";

const About: React.FC = () => {
  return (
    <IonPage>
      <Navbar>Profile</Navbar>
      <IonContent>
        <div className={Styles.hero}>
          <div className={Styles.content}>
            <h4>Hello, Welcome to</h4>
            <h1>Tana Toraja</h1>
            <h3>a village full of culture and natural panorama</h3>
            <Button shape="round" path="/product">
              Explore Comudity
            </Button>
          </div>
        </div>

        <section className={Styles.about}>
          <div className={Styles.main}>
            <img src="https://pbs.twimg.com/media/Cq4SUgCVUAQB1fT.jpg" />
            <div className={Styles.about_text}>
              <IonText color="primary">
                <h2>About Us</h2>
              </IonText>
              <h5>South Sulawesi - Tana Toraja</h5>
              <p>
                Tana Toraja Regency, whose capital is Makale, is geographically
                located in the northern part of South Sulawesi Province, namely
                between 2° - 3° South Latitude and 119° - 120° East Longitude,
                with a recorded area of ​​2,054.30 square km. Administratively,
                Tana Toraja Regency includes 19 sub-districts, 112 lembang and
                47 sub-districts with a population in 2012 of 221,081 people.
                Most of the residents of Tana Toraja Regency are Christian. The
                development of development in the spiritual sector in this area
                can be seen from the large number of worship facilities for each
                religion.
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
                    Organizing local government that is clean, transparent,
                    democratic and free from corruption
                  </p>
                </IonItem>
                <IonItem color={"primary"}>
                  <p>
                    Improving the quality of community welfare to achieve a
                    better and more educated standard of living
                  </p>
                </IonItem>
                <IonItem color={"primary"}>
                  <p>
                    Developing the community's economy through village potential
                  </p>
                </IonItem>
                <IonItem color={"primary"}>
                  <p>Improving the arts and culture in Tana Toraja village</p>
                </IonItem>
                <IonItem color={"primary"}>
                  <p>Increase social activities</p>
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
                    Revitalizing bureaucratic functions and improving governance
                    performance
                  </p>
                </IonItem>
                <IonItem color={"primary"}>
                  <p>
                    Empowering communities by utilizing and developing local
                    economic resources and managing natural resources and the
                    environment
                  </p>
                </IonItem>
                <IonItem color={"primary"}>
                  <p>
                    Optimizing rural-urban infrastructure development to
                    alleviate isolation
                  </p>
                </IonItem>
                <IonItem color={"primary"}>
                  <p>
                    Making Tana Toraja a leading district in developing the
                    'Green Movement' (Go Green) and culture-based and
                    environmentally focused tourism (Eco-Culture Tourism) in
                    South Sulawesi.
                  </p>
                </IonItem>
                <IonItem color={"primary"}>
                  <p>
                    Enhancing people's quality of life through improved
                    education and healthcare services.
                  </p>
                </IonItem>
              </IonCardContent>
            </IonCard>
          </div>
        </div>

        <section className={Styles.chief}>
          <div className={Styles.profile}>
            <div className={Styles.chief_text}>
              <IonText color="primary">
                <h2>Governor</h2>
              </IonText>
              <h5>Name : Dr. BAHTIAR BAHARUDDIN, M.Si.</h5>
              <h5>Religion : ISLAM</h5>
              <h5>Date of Birth: BONE, JANUARY 16 1973</h5>

              <p>
                Acting Governor of South Sulawesi Dr. Bahtiar Baharuddin, M.Sc.
                Born January 16 1973, he is an Indonesian bureaucrat from Bone,
                South Sulawesi. Bahtiar is a middle official or echelon I
                official at the Ministry of Home Affairs (Kemendagri),
                previously served as Head of the Information Center (Kapuspen)
                of the Ministry of Home Affairs, Director General of Politics
                and General Government of the Ministry of Home Affairs, and on
                September 5 2023 was appointed Acting Governor of South
                Sulawesi.
              </p>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bahtiar.jpg/640px-Bahtiar.jpg" />
          </div>
        </section>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default About;
