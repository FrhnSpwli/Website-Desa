import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './About.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <div className='about-container'>
        <h1>About</h1>
      </div>
      <Footer />
    </IonPage>
  );
};

export default About;
