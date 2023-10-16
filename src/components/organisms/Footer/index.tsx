import React from 'react';
import { IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/react';
import Styles from './Footer.module.css';

function Footer() {
  return (
    <>
      <IonFooter>
        <div className={Styles.container}>
          <p>Sistem Informasi 13</p>
        </div>
      </IonFooter>
    </>
  );
}
export default Footer;