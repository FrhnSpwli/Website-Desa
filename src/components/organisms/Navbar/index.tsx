import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonSearchbar  } from '@ionic/react';
import Button from '../../atoms/button';
import Styles from './Navbar.module.css'
function Example() {
    return (
      <>
        <IonMenu side="end" contentId="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu Content</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <Button>Push me</Button>
          </IonContent>
        </IonMenu>
        <IonPage id="main-content">
          <IonHeader>
            <IonToolbar>
            <div className={Styles.menu}>
              <IonTitle>About</IonTitle>
              <IonSearchbar></IonSearchbar>
            </div>
              <IonButtons slot="end">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">Tap the button in the toolbar to open the menu.</IonContent>
        </IonPage>
      </>
    );
  }
  export default Example;