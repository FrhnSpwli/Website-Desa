import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenu, IonMenuButton, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle } from '@ionic/react';
import Footer from '../components/organisms/Footer';
import './Landing.css';
import Navbar from '../components/organisms/Navbar';
import Pic from '/images/cimicimi.jpg'

const Landing: React.FC = () => {
  return (
    <IonPage>
      <Navbar>Landing Page</Navbar>

        <IonContent>
          <div className="landing-content">
           <section className='landing-content-button'> 
           <IonText><h1 className='landing-content-heading1'>Welcome to My Landing Page</h1></IonText>
            <IonText><p className='landing-content-heading2'>This is a simple landing page.</p></IonText>
            <IonButton> 
              Get Started!
            </IonButton>
            </section>
            <img src='./Fontaine Genshin impact.jpg' alt="image"/>
          </div>
          

          <IonText className='card_text'> Berita Terkini </IonText> 
          <div className="card_container">
            <div className="card_title">
             <div className="card_responsive" >
                <IonCard>
                  <IonImg />
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
                  <IonImg />
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
                  <IonImg />
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
                  <IonImg />
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
