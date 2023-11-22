import { ReactNode, useState, useEffect } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonItem, IonLabel, IonIcon, IonAccordion, IonAccordionGroup } from '@ionic/react';
import { call, open, document, home, settings, cube, help, people, peopleCircle, peopleCircleOutline, informationCircle, build } from 'ionicons/icons';
import Styles from './Navbar.module.css'
import Button from '../../atoms/button';
import { HolidayVillageTwoTone } from '@mui/icons-material';

interface NavbarProps {
  children: ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  const [isAdminPopupVisible, setAdminPopupVisible] = useState(false);

  const showAdminPopup = () => {
    setAdminPopupVisible(true);
  };

  const hideAdminPopup = () => {
    setAdminPopupVisible(false);
  };

  const adminPopupContent = (
    // Your admin popup content goes here
    <div className={Styles.adminPopup}>
      <div>
      <IonItem href='/kelembagaan'>
        <IonLabel>Administrasi Kelembagaan</IonLabel>
      </IonItem>
      <IonItem href='/pembangunan'>
        <IonLabel>Administrasi Pembangunan</IonLabel>
      </IonItem>
      <IonItem href='/penduduk'>
        <IonLabel>Administrasi Penduduk</IonLabel>
      </IonItem>
      </div>
      <button onClick={hideAdminPopup}>Close</button>
    </div>
  );

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const [activePage, setActivePage] = useState('/home');

  const isActive = (path: string) => {
    return activePage === path;
  }

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, []);

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
      <IonMenu side="end" contentId="main-content" >
        <IonHeader>
          <div className={Styles.box}>
            <p>Logo</p>
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
                <IonIcon icon={open} slot="start" />
                <IonLabel>About</IonLabel>
              </IonItem>
              <IonItem href='/artikel'>
                <IonIcon icon={document} slot="start" />
                <IonLabel>News</IonLabel>
              </IonItem>
              <IonItem href='/product'>
                <IonIcon icon={cube} slot="start" />
                <IonLabel>Products</IonLabel>
              </IonItem>
              <IonItem href='/contact'>
                <IonIcon icon={call} slot="start" />
                <IonLabel>Contact</IonLabel>
              </IonItem>
              <IonItem href='/settings'>
                <IonIcon icon={settings} slot="start" />
                <IonLabel>Settings</IonLabel>
              </IonItem>
              <IonAccordionGroup>
                <IonAccordion value="first">
                  <IonItem slot="header">
                    <IonIcon icon={people} slot="start" />
                    <IonLabel>Administrasi</IonLabel>
                  </IonItem>
                  <div className={Styles.accordionItem} slot="content">
                    <IonItem href='/penduduk'>
                      <IonLabel>Penduduk</IonLabel>
                    </IonItem>
                    <IonItem href='/kelembagaan'>
                      <IonLabel>Kelembagaan</IonLabel>
                    </IonItem>
                    <IonItem href='/pembangunan'>
                      <IonLabel>Pembangunan</IonLabel>
                    </IonItem>
                  </div>
                </IonAccordion>
              </IonAccordionGroup>
            </div>
            <div className={Styles.button}>
              <Button path='/login' fill='solid'>Login</Button>
            </div>
          </div>
        </IonContent>
      </IonMenu >
      <IonHeader id="main-content" className={Styles.nav}>
        <div className={Styles.menu}>
          <IonTitle class='ion-no-padding'>{children}</IonTitle>
          <div className={Styles.content}>
            <div className={Styles.contentItem}>
              <div className={`${Styles.item} ${isActive('/home') ? Styles.active : ''}`}>
                <a href='/home'>Home</a>
              </div>
              <div className={`${Styles.item} ${isActive('/about') ? Styles.active : ''}`}>
                <a href='/about'>About</a>
              </div>
              <div className={`${Styles.item} ${isActive('/artikel') ? Styles.active : ''}`}>
                <a href='/artikel'>News</a>
              </div>
              <div className={`${Styles.item} ${isActive('/product') ? Styles.active : ''}`}>
                <a href='/product'>Products</a>
              </div>
              <div className={`${Styles.item} ${isActive('/contact') ? Styles.active : ''}`}>
                <a href='/contact'>Contact</a>
              </div>
              <div className={`${Styles.item} ${isActive('/settings') ? Styles.active : ''}`}>
                <a href='/settings'>Settings</a>
              </div>
              <div className={`${Styles.item} ${isActive('/admin') ? Styles.active : ''}`} onClick={showAdminPopup}>
                <a>Admin</a>
              </div>
            </div>
            <div className={Styles.contentItem}>
              <Button path='/login' shape='round' fill='solid'>Login</Button>
            </div>
            {isAdminPopupVisible && adminPopupContent}
          </div>
          {isSmallScreen && (
            <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          )}
        </div>
      </IonHeader >
    </>
  );
}

export default Navbar;
