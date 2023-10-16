import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Footer from '../components/organisms/Footer';
import Header from '../components/organisms/Header';
import './login.css'

const login: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <div className='Login-Page'>
        <h1>Login</h1>
      </div>

      <Footer />
    </IonPage>
  );
};

export default login;