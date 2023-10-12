import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/molecules/ExploreContainer';
import Footer from '../components/organisms/Footer';
import Header from '../components/organisms/Header';
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
