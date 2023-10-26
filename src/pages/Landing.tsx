import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Footer from '../components/organisms/Footer';
import './Landing.css';
import Navbar from '../components/organisms/Navbar';
import Pic from '/images/cimicimi.jpg'

const Landing: React.FC = () => {
  return (
    <IonPage>
      <Navbar>Landing Page</Navbar>
      <div className='landing-container'>
        <h1>Landing</h1>
      </div>
      <IonImg src={Pic}></IonImg>
      <Footer />
    </IonPage>
  );
};

export default Landing;
