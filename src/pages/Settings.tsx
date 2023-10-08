import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Settings.css';

const Settings: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <div className='settings-container'>
        <h1>Settings</h1>
      </div>
      <Footer />
    </IonPage>
  );
};

export default Settings;
