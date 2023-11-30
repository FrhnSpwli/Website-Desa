import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/molecules/ExploreContainer';
import Footer from '../components/organisms/Footer';
import Navbar from '../components/organisms/Navbar';

const Home: React.FC = () => {
  return (
  <IonPage>
      <Navbar>AdminKlembagaan</Navbar>
      <ExploreContainer />
      <Footer />
    </IonPage>
  );
};

export default Home;
