import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonItem,
  IonLabel,
  IonIcon,
  IonAccordion,
  IonAccordionGroup,
} from "@ionic/react";
import { businessOutline, cubeOutline, documentsOutline, logOutOutline, newspaperOutline } from "ionicons/icons";
import Styles from "./Sidebar.module.css";
import { signOut } from "../../../../config/firebase";

const Sidebar = () => {
  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/login";
  };

  return (
    <>
      <IonMenu side="start" contentId="main-content">
        <IonHeader>
          <div className={Styles.box}>
            <p>Admin Page</p>
          </div>
        </IonHeader>
        <IonContent>
          <div className={Styles.container}>
            <div className={Styles.menuItem}>
              <IonAccordionGroup>
                <IonAccordion value="first">
                  <IonItem slot="header">
                    <IonIcon icon={newspaperOutline} slot="start" />
                    <IonLabel>Artikel</IonLabel>
                  </IonItem>
                  <div className={Styles.accordionItem} slot="content">
                    <IonItem href="/admin/artikel">
                      <IonLabel>Artikel</IonLabel>
                    </IonItem>
                    <IonItem href="/admin/artikel/create">
                      <IonLabel>Create Artikel</IonLabel>
                    </IonItem>
                  </div>
                </IonAccordion>
              </IonAccordionGroup>
              <IonAccordionGroup>
                <IonAccordion value="first">
                  <IonItem slot="header">
                    <IonIcon icon={cubeOutline} slot="start" />
                    <IonLabel>Product</IonLabel>
                  </IonItem>
                  <div className={Styles.accordionItem} slot="content">
                    <IonItem href="/admin/product">
                      <IonLabel>Product</IonLabel>
                    </IonItem>
                    <IonItem href="/admin/product/create">
                      <IonLabel>Create Product</IonLabel>
                    </IonItem>
                  </div>
                </IonAccordion>
              </IonAccordionGroup>
              <IonAccordionGroup>
                <IonAccordion value="first">
                  <IonItem slot="header">
                    <IonIcon icon={documentsOutline} slot="start" />
                    <IonLabel>Kelembagaan</IonLabel>
                  </IonItem>
                  <div className={Styles.accordionItem} slot="content">
                    <IonItem href="/admin/kelembagaan">
                      <IonLabel>Kelembagaan</IonLabel>
                    </IonItem>
                    <IonItem href="/admin/kelembagaan/create">
                      <IonLabel>Create Kelembagaan</IonLabel>
                    </IonItem>
                  </div>
                </IonAccordion>
              </IonAccordionGroup>
              <IonAccordionGroup>
                <IonAccordion value="first">
                  <IonItem slot="header">
                    <IonIcon icon={businessOutline} slot="start" />
                    <IonLabel>Pembangunan</IonLabel>
                  </IonItem>
                  <div className={Styles.accordionItem} slot="content">
                    <IonItem href="/admin/pembangunan">
                      <IonLabel>Pembangunan</IonLabel>
                    </IonItem>
                    <IonItem href="/admin/pembangunan/create">
                      <IonLabel>Create Pembangunan</IonLabel>
                    </IonItem>
                  </div>
                </IonAccordion>
              </IonAccordionGroup>
              <IonAccordionGroup>
                <IonAccordion value="first">
                  <IonItem slot="header">
                    <IonIcon icon={documentsOutline} slot="start" />
                    <IonLabel>Penduduk</IonLabel>
                  </IonItem>
                  <div className={Styles.peopleOutline} slot="content">
                    <IonItem href="/admin/penduduk">
                      <IonLabel>Penduduk</IonLabel>
                    </IonItem>
                    <IonItem href="/admin/penduduk/create">
                      <IonLabel>Create Penduduk</IonLabel>
                    </IonItem>
                  </div>
                </IonAccordion>
              </IonAccordionGroup>
              <IonItem onClick={handleSignOut} href="/">
                <IonIcon icon={logOutOutline} slot="start" />
                <IonLabel>Sign Out</IonLabel>
              </IonItem>
            </div>
          </div>
        </IonContent>
      </IonMenu>
      <IonHeader id="main-content" className={Styles.nav}>
        <IonButtons slot="end">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
      </IonHeader>
    </>
  );
};

export default Sidebar;
