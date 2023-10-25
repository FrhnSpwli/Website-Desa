import { ReactNode, useState, useEffect } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar, IonSearchbar, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { call, document, home, settings } from 'ionicons/icons';
import Styles from './Navbar.module.css'
import Button from '../../atoms/button';
import SearchBar from '../../molecules/searchBar';

interface NavbarProps {
  children: ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <IonMenu side="end" contentId="main-content">
        <IonHeader>
          <div className={Styles.box}>
            <SearchBar>Search Bar</SearchBar>
          </div>
        </IonHeader>
        <IonContent>
          <div className={Styles.container}>
            <div className={Styles.menuItem}>
              <IonItem href='/home'>
                <IonIcon icon={home} slot="start" />
                <IonLabel>Home</IonLabel>
              </IonItem>
              <IonItem href='/about'>
                <IonIcon icon={document} slot="start" />
                <IonLabel>About</IonLabel>
              </IonItem>
              <IonItem href='/contact'>
                <IonIcon icon={call} slot="start" />
                <IonLabel>Contact</IonLabel>
              </IonItem>
              <IonItem href='/settings'>
                <IonIcon icon={settings} slot="start" />
                <IonLabel>Settings</IonLabel>
              </IonItem>
            </div>
            <div className={Styles.button}>
              <Button path='/login' fill='solid'>Login</Button>
              <Button path='/signup' fill='outline'>Sign Up</Button>
            </div>
          </div>
        </IonContent>
      </IonMenu >
      <IonHeader id="main-content" class='ion-padding'>
        <div className={Styles.menu}>
          <IonTitle class='ion-no-padding'>{children}</IonTitle>
          <div className={Styles.content}>
            <div className={Styles.contentItem}>
              <div className={Styles.item}>
                <a href='/home'>Home</a>
              </div>
              <div className={Styles.item}>
                <a href='/about'>About</a>
              </div>
              <div className={Styles.item}>
                <a href='/contact'>Contact</a>
              </div>
              <div className={Styles.item}>
                <a href='/settings'>Settings</a>
              </div>
            </div>
            <SearchBar>Search Bar</SearchBar>
            <div className={Styles.contentItem}>
              <Button path='/login' shape='round' fill='solid'>Login</Button>
              <Button path='/signup' fill='outline'>Sign Up</Button>
            </div>
          </div>
          {isSmallScreen && (
            <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          )}
        </div >
      </IonHeader >
    </>
  );
}

export default Navbar;