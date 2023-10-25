import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../components/organisms/Header';
import ExploreContainer from '../components/molecules/ExploreContainer';
import Footer from '../components/organisms/Footer';


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
