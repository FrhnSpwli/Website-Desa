import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenu, IonMenuButton, IonButton, IonButtons, IonText } from '@ionic/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Landing.css';

const Landing: React.FC = () => {
  return (
    <IonPage>
      <Header />

        <IonContent>
          <div className="landing-content">
           <section className='landing-content-button'> 
           <IonText><h1 className='landing-content-heading1'>Welcome to My Landing Page</h1></IonText>
            <IonText><p className='landing-content-heading2'>This is a simple landing page.</p></IonText>
            <IonButton> 
              Learn More 
            </IonButton>
            </section>
            <img src='./Fontaine Genshin impact.jpg' alt="image"/>
          </div>
        </IonContent>
        <Footer />
    </IonPage>
    
  );
};

export default Landing;
