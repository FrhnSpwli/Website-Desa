import React, {useState} from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonImg, IonItem, IonCardSubtitle } from '@ionic/react';
import Styles from "../styles/detailproduct.module.css";
import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';

function DetailProduct() {
  const data = [{
    title: 'Cimi-Cimi',
    price: "Rp 10.000",
    description: 'Cimi-cimi memiliki berbagai macam rasa seperti rasa keju, rasa pedas, rasa asin, dan rasa manis. Cimi-cimi memiliki bentuk yang unik dan menarik.',
    Image:'/images/cimicimi.jpg'
  }];
  const [results, setResults] = useState([...data]);
 return (
    <IonPage>
      <Navbar>Detail Product</Navbar>
      <IonContent>
        <div className={Styles.container}>
          <div className={Styles.title}>
            <h1>Product Detail</h1>
          </div>
          <div className={Styles.responsive}>
            {results.map((item, index) => (
              <IonHeader key={index} className={Styles.content}>
                <IonImg src={item.Image} className={Styles.image}/>
                <IonCardSubtitle className={Styles.text}>
                 <h2>{item.title}</h2>  
                 <h4>{item.price}</h4>
                 <p> Description: <br />{item.description}</p>
                 </IonCardSubtitle>
              </IonHeader>
            ))}
          </div>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
 );
}
export default DetailProduct;