import { 
  IonContent, 
  IonHeader, 
  IonPage,
  IonTitle, 
  IonToolbar,
  IonText 
} from '@ionic/react';
import Footer from '../components/organisms/Footer';
import Navbar from '../components/organisms/Navbar';
import Styles from './About.module.css';
import Button from '../components/atoms/button';

const About: React.FC = () => {
  return (
    <>
    <Navbar >About</Navbar>
    <IonContent>
        {/* <div className="ion-content-scroll-host ion-padding">
        <IonText color="primary">
        <h1>Profil Desa</h1>
        </IonText>
          <img
            src="https://images7.alphacoders.com/118/1189619.jpg"
          />
          <p>
          Dengan luas wilayah sekitar 4,34 km persegi yang membentang di pesisir selatan pulau bali atau 
          tepatnya di kabupaten jembrana, desa yeh kuning memiliki penduduk sekitar 2.963 jiwa yang terbagi 
          dalam 1.013 KK di 5 banjar dinas dan 6 banjar adat. Sebagian besar penduduk di desa ini beragama hindu, 
          sebagiannya lagi beragama islam, membuat desa ini memiliki toleransi yang cukup tinggi terhadap perbedaan agama.
          </p>

        </div> */}
        <div className={Styles.container}>
          <h1>Selamat Datang</h1>
          <div>
          <Button shape='round' >Jelajahi Komuditas</Button>
          </div>
        </div>
      </IonContent>
      <Footer />
      </>
  );
};

export default About;


