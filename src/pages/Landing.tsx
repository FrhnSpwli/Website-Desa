import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Footer from '../components/organisms/Footer';
import Header from '../components/organisms/Header';
import './Landing.css';
import Navbar from '../components/organisms/Navbar';

const Landing: React.FC = () => {
  return (
    <IonPage>
      <Navbar>Landing Page</Navbar>
      <div className='landing-container'>
        <h1>Landing</h1>
      </div>
      <Footer />
    </IonPage>
  );
};

export default Landing;
