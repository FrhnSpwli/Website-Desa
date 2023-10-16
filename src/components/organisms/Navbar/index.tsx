import React, { Children, ReactNode } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import Button from '../../atoms/button';
import Styles from './Navbar.module.css'

interface NavbarProps {
  children: ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
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
      <IonHeader>
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