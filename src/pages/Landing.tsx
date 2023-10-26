import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenu, IonMenuButton, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle } from '@ionic/react';
import Footer from '../components/organisms/Footer';
import Navbar from '../components/organisms/Navbar';
import Styles from '../styles/Landing.module.css';
import Pict1 from '/images/fontaine genim.jpg'
import Pict2 from '/images/fonten gi.jpg'
import Pict3 from '/images/fontaine.jpg'
import Pict4 from '/images/fontaine gi.jpg'

const Landing: React.FC = () => {
  return (
    <IonPage>
      <Navbar>Landing Page</Navbar>

        <IonContent>
          <div className={Styles.content}>
           <section className={Styles.contentButton}> 
           <IonText><h1 className={Styles.contentHeading1}>Welcome to My Landing Page</h1></IonText>
            <IonText><p className={Styles.contentHeading2}>This is a simple landing page.</p></IonText>
            <IonButton> 
              Get Started!
            </IonButton>
            </section>
            <img src='./Fontaine Genshin impact.jpg' alt="image"/>
          </div>
          

          <IonText className={Styles.cardText}> Berita Terkini </IonText> 
          <div className={Styles.cardContainer}>
            <div className={Styles.cardTitle}>
             <div className={Styles.cardResponsive}>
                <IonCard>
                  <IonImg src={Pict1}/>
                    <IonCardHeader>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        <IonCardTitle>Card Title</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            Keep close to Nature's heart... and break clear away, once in awhile,
                            and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </IonCardContent>
                  </IonCard>
                  <IonCard>
                  <IonImg src={Pict2}/>
                    <IonCardHeader>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        <IonCardTitle>Card Title</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            Keep close to Nature's heart... and break clear away, once in awhile,
                            and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </IonCardContent>
                  </IonCard>
                  <IonCard>
                  <IonImg src={Pict3}/>
                    <IonCardHeader>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        <IonCardTitle>Card Title</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            Keep close to Nature's heart... and break clear away, once in awhile,
                            and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </IonCardContent>
                  </IonCard>
                  <IonCard>
                  <IonImg src={Pict4}/>
                    <IonCardHeader>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        <IonCardTitle>Card Title</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            Keep close to Nature's heart... and break clear away, once in awhile,
                            and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </IonCardContent>
                  </IonCard>
              </div>
            </div>
          </div>  
        </IonContent>
        <Footer />
    </IonPage>
    
  );
};

export default Landing;
