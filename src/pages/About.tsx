import { 
  IonContent, 
  IonHeader, 
  IonPage,
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import Footer from '../components/organisms/Footer';
import Navbar from '../components/organisms/Navbar';
import './About.css'

const About: React.FC = () => {
  return (
    <IonPage>
    <Navbar >PROFILE DESA</Navbar>
    <IonContent scrollY={false}>
        <div className="ion-content-scroll-host ion-padding">
          <h1>Tentang Desa</h1>
          <img
            src="https://images7.alphacoders.com/118/1189619.jpg"
          />
          <p>
          Dengan luas wilayah sekitar 4,34 km persegi yang membentang di pesisir selatan pulau bali atau 
          tepatnya di kabupaten jembrana, desa yeh kuning memiliki penduduk sekitar 2.963 jiwa yang terbagi 
          dalam 1.013 KK di 5 banjar dinas dan 6 banjar adat. Sebagian besar penduduk di desa ini beragama hindu, 
          sebagiannya lagi beragama islam, membuat desa ini memiliki toleransi yang cukup tinggi terhadap perbedaan agama.
          </p>

          <h2>Sea Turtle</h2>
          <img
            alt="brown sea turtle in water"
            src="https://images.unsplash.com/photo-1573551089778-46a7abc39d9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          />
          <p>
            Sea turtles are characterized by a large, streamlined shell and non-retractile head and limbs. Unlike other
            turtles, sea turtles cannot pull their limbs and head inside their shells. Their limbs are flippers that are
            adapted for swimming, so they are vulnerable while on land.
          </p>

          <h2>Giraffe</h2>
          <img
            alt="giraffe sticking its tongue out"
            src="https://images.unsplash.com/photo-1577114995803-d8ce0e2b4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
          />
          <p>
            Giraffes are known for their long, tall appearance. They have a small hump on their back like a camel and
            have a spotted pattern similar to that of a leopard. Because of the combination of these features, some
            people called the giraffe a “camel-leopard.” That’s where the giraffe’s species name “camelopardalis” comes
            from.
          </p>

          <h2>Elephant</h2>
          <img
            alt="two grey elephants on grass plains during sunset"
            src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1754&q=80"
          />
          <p>
            Elephants are the largest existing land animal, with massive bodies, large ears, and long trunks. Elephants’
            long trunks are multifunctional. They are used to pick up objects, trumpet warnings, greet other elephants,
            or suck up water for drinking or bathing.
          </p>

          <h2>Dolphin</h2>
          <img
            alt="black and white dolphin in water"
            src="https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
          />
          <p>
            Dolphins range in color depending on the species, from white, pearl, and pink to darker shades of brown,
            gray, blue, and black. They have smooth skin, flippers, and a dorsal fin. They have a long, slender snout
            with about 100 teeth and a streamlined body. They have a single blowhole on top of their head, which has a
            flap that opens to reveal a pair of nostrils. The dolphin uses these nostrils for breathing when it
            surfaces.
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;


