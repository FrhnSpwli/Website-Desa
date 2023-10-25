import React, { useState } from 'react';
import { IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonToggle, IonSelect, IonSelectOption, IonRange, IonIcon } from '@ionic/react';
import { chevronDownOutline, chevronUpOutline, personCircleOutline, notificationsOutline, colorPaletteOutline, lockClosedOutline, helpCircleOutline, informationCircleOutline } from 'ionicons/icons';
import './Settings.css';
import Navbar from '../components/organisms/Navbar';

const Settings: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const [showHeader, setShowHeader] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const handleMouseEnter = () => {
    setShowHeader(true);
    setShowFooter(true);
  };

  const handleMouseLeave = () => {
    setShowHeader(false);
    setShowFooter(false);
  };

  const renderMenuItems = (menuName: string) => {
    switch (menuName) {
      case 'Account':
        return (
          <div className='menuItems'>
            <IonItem>
              <IonLabel position='floating'>Name:</IonLabel>
              <IonInput type='text' />
            </IonItem>
            <IonItem>
              <IonLabel position='floating'>Email:</IonLabel>
              <IonInput type='email' />
            </IonItem>
            <IonItem>
              <IonLabel position='floating'>Password:</IonLabel>
              <IonInput type='password' />
            </IonItem>
          </div>
        );
      case 'Notifications':
        return (
          <div className='menuItems'>
            <IonItem>
              <IonLabel>Push Notifications:</IonLabel>
              <IonToggle slot='end' />
            </IonItem>
            <IonItem>
              <IonLabel>Email Notifications:</IonLabel>
              <IonToggle slot='end' />
            </IonItem>
          </div>
        );
      case 'Appearance':
        return (
          <div className='menuItems'>
            <IonItem>
              <IonLabel>Theme:</IonLabel>
              <IonSelect>
                <IonSelectOption value='light'>Light</IonSelectOption>
                <IonSelectOption value='dark'>Dark</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Font Size:</IonLabel>
              <IonRange min={12} max={24} />
            </IonItem>
          </div>
        );
      case 'Privacy':
        return (
          <div className='menuItems'>
            <IonItem>
              <IonLabel>Privacy Policy:</IonLabel>
              <a href='#'>View</a>
            </IonItem>
            <IonItem>
              <IonLabel>Terms of Service:</IonLabel>
              <a href='#'>View</a>
            </IonItem>
          </div>
        );
      case 'Help':
        return (
          <div className='menuItems'>
            <IonItem>
              <IonLabel>FAQ:</IonLabel>
              <a href='#'>View</a>
            </IonItem>
            <IonItem>
              <IonLabel>Contact Us:</IonLabel>
              <a href='#'>View</a>
            </IonItem>
          </div>
        );
      case 'About':
        return (
          <div className='menuItems'>
            <IonItem>
              <IonLabel>Version:</IonLabel>
              <span>121211097</span>
            </IonItem>
            <IonItem>
              <IonLabel>Company:</IonLabel>
              <span>Nadya Still Learning</span>
            </IonItem>
          </div>
        );
      default:
        return null;
    }
  };

  const renderMenuIcon = (menuName: string) => {
    switch (menuName) {
      case 'Account':
        return personCircleOutline;
      case 'Notifications':
        return notificationsOutline;
      case 'Appearance':
        return colorPaletteOutline;
      case 'Privacy':
        return lockClosedOutline;
      case 'Help':
        return helpCircleOutline;
      case 'About':
        return informationCircleOutline;
      default:
        return null;
    }
  };

  return (
    <IonPage>
      <Navbar>Settings</Navbar>
      <IonContent onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {showHeader && (
          <div className='header' style={{ marginBottom: showFooter ? '50px' : '0' }}>
            <h1>!!!UNDER DEVELOPMENT!!!</h1>
          </div>
        )}
        <IonList>
          <IonItem button className={activeMenu === 'Account' ? 'active' : ''} onClick={() => setActiveMenu(activeMenu === 'Account' ? '' : 'Account')}>
            <IonIcon slot='start' icon={personCircleOutline} />
            <IonLabel className={activeMenu === 'Account' ? 'active' : ''}>Account</IonLabel>
            {activeMenu === 'Account' ? <IonIcon slot='end' icon={chevronUpOutline} /> : <IonIcon slot='end' icon={chevronDownOutline} />}
          </IonItem>
          {activeMenu === 'Account' && renderMenuItems('Account')}
          <IonItem button className={activeMenu === 'Notifications' ? 'active' : ''} onClick={() => setActiveMenu(activeMenu === 'Notifications' ? '' : 'Notifications')}>
            <IonIcon slot='start' icon={notificationsOutline} />
            <IonLabel className={activeMenu === 'Notifications' ? 'active' : ''}>Notifications</IonLabel>
            {activeMenu === 'Notifications' ? <IonIcon slot='end' icon={chevronUpOutline} /> : <IonIcon slot='end' icon={chevronDownOutline} />}
          </IonItem>
          {activeMenu === 'Notifications' && renderMenuItems('Notifications')}
          <IonItem button className={activeMenu === 'Appearance' ? 'active' : ''} onClick={() => setActiveMenu(activeMenu === 'Appearance' ? '' : 'Appearance')}>
            <IonIcon slot='start' icon={colorPaletteOutline} />
            <IonLabel className={activeMenu === 'Appearance' ? 'active' : ''}>Appearance</IonLabel>
            {activeMenu === 'Appearance' ? <IonIcon slot='end' icon={chevronUpOutline} /> : <IonIcon slot='end' icon={chevronDownOutline} />}
          </IonItem>
          {activeMenu === 'Appearance' && renderMenuItems('Appearance')}
          <IonItem button className={activeMenu === 'Privacy' ? 'active' : ''} onClick={() => setActiveMenu(activeMenu === 'Privacy' ? '' : 'Privacy')}>
            <IonIcon slot='start' icon={lockClosedOutline} />
            <IonLabel className={activeMenu === 'Privacy' ? 'active' : ''}>Privacy & Security</IonLabel>
            {activeMenu === 'Privacy' ? <IonIcon slot='end' icon={chevronUpOutline} /> : <IonIcon slot='end' icon={chevronDownOutline} />}
          </IonItem>
          {activeMenu === 'Privacy' && renderMenuItems('Privacy')}
          <IonItem button className={activeMenu === 'Help' ? 'active' : ''} onClick={() => setActiveMenu(activeMenu === 'Help' ? '' : 'Help')}>
            <IonIcon slot='start' icon={helpCircleOutline} />
            <IonLabel className={activeMenu === 'Help' ? 'active' : ''}>Help & Support</IonLabel>
            {activeMenu === 'Help' ? <IonIcon slot='end' icon={chevronUpOutline} /> : <IonIcon slot='end' icon={chevronDownOutline} />}
          </IonItem>
          {activeMenu === 'Help' && renderMenuItems('Help')}
          <IonItem button className={activeMenu === 'About' ? 'active' : ''} onClick={() => setActiveMenu(activeMenu === 'About' ? '' : 'About')}>
            <IonIcon slot='start' icon={informationCircleOutline} />
            <IonLabel className={activeMenu === 'About' ? 'active' : ''}>About</IonLabel>
            {activeMenu === 'About' ? <IonIcon slot='end' icon={chevronUpOutline} /> : <IonIcon slot='end' icon={chevronDownOutline} />}
          </IonItem>
          {activeMenu === 'About' && renderMenuItems('About')}
        </IonList>
        {showFooter && (
          <div className='footer' style={{ marginTop: showHeader ? '50px' : '0' }}>
            !!!UNDER DEVELOPMENT!!!
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Settings;
