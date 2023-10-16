import React, { Children, ReactNode } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonSearchbar, IonItem, IonLabel } from '@ionic/react';
import Styles from './Navbar.module.css'
import Button from '../../atoms/button';

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
        <IonContent>
          <div className={Styles.container}>
            <div className={Styles.menuItem}>
              <IonItem routerLink="/home">
                <IonLabel>Home</IonLabel>
              </IonItem>
              <IonItem routerLink="/about">
                <IonLabel>About</IonLabel>
              </IonItem>
              <IonItem routerLink="/contact">
                <IonLabel>Contact</IonLabel>
              </IonItem>
              <IonItem routerLink="/settings">
                <IonLabel>Settings</IonLabel>
              </IonItem>
            </div>
            <div className={Styles.button}>
              <Button>Login</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
        </IonContent>
      </IonMenu >
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