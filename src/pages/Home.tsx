import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <ExploreContainer />
      <Footer />
    </IonPage>
  );
};

export default Home;
