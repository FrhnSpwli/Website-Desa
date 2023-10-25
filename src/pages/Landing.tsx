import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenu, IonMenuButton, IonButton, IonButtons, IonText } from '@ionic/react';
import Footer from '../components/organisms/Footer';
import './Landing.css';
import Navbar from '../components/organisms/Navbar';

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
              Start 
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
