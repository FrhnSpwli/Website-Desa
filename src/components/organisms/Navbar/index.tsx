import React, { ReactNode } from 'react';
import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenu, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonSearchbar, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonIcon,
  IonButton
} from '@ionic/react';
import Button from '../../atoms/button';
import { helpCircle } from 'ionicons/icons';
import Styles from './Navbar.module.css';

interface NavbarProps {
  children: ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <>
      <IonMenu side="end" contentId="main-content" >
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <IonList lines="full">
         <IonItem>
          <IonLabel>HOME</IonLabel>
         </IonItem>
         <IonItem>
          <IonLabel>CONTACT</IonLabel>
         </IonItem>
         <IonItem>
          <IonLabel>SETTING</IonLabel>
         </IonItem>
        </IonList>
          <Button>Push me</Button>
        </IonContent>
      </IonMenu>
      <IonHeader id="main-content">
        <IonToolbar>
          <div className={Styles.menu}>
            <IonTitle>{children}</IonTitle>
            <IonSearchbar></IonSearchbar>
          </div>
          <IonButtons slot="end">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </>
  );
}
export default Navbar;