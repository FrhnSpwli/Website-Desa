import { IonContent, IonIcon, IonItem, IonPage } from '@ionic/react';
import Footer from '../components/organisms/Footer';
import Input from '../components/atoms/input';
import Navbar from '../components/organisms/Navbar';
import { mail, person } from 'ionicons/icons'
import Textarea from '../components/atoms/textarea';
import Styles from '../styles/Contact.module.css';
import Picture from '/images/contact.svg'
import Button from '../components/atoms/button';


const Contact: React.FC = () => {
  return (
    <IonPage>
      <Navbar>Contact</Navbar>
      <IonContent>
      <div className={Styles.container}>
        <div className={Styles.left}>
          <div className={Styles.header}>
            <h1>Hubungi Kami</h1>
            <p>Ada saran untuk kami? Hubungi kami di bawah ini</p>
          </div>
          <div className={Styles.content}>
            <div className={Styles.item}>
              <IonIcon icon={person} slot='start' color='primary' className={Styles.itemIcon} />
              <Input type='text'>Nama</Input>
            </div>
            <div className={Styles.item}>
              <IonIcon icon={mail} slot='start' color='primary' className={Styles.itemIcon} />
              <Input type='email'>Email</Input>
            </div>
            <div className={Styles.item}>
              <Textarea>Message</Textarea>
            </div>
            <div className={Styles.btn}>
            <Button shape='round'>Kirim</Button>
            </div>
          </div>
        </div>
        <div className={Styles.right}>
          <img src={Picture} alt="Contact" />
        </div>
      </div>
      <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Contact;
