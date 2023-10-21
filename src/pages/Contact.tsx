import { IonPage } from '@ionic/react';
import Footer from '../components/organisms/Footer';
import Input from '../components/atoms/input';
import Navbar from '../components/organisms/Navbar';
import Textarea from '../components/atoms/textarea';
import Styles from '../styles/Contact.module.css';

const Contact: React.FC = () => {
  return (
    <IonPage>
      <Navbar>Contact</Navbar>
      <div className={Styles.container}>
        <div className={Styles.header}>
          <h1>Hubungi Kami</h1>
          <p>Ada saran untuk kami? Hubungi kami di bawah ini</p>
        </div>
        <div className={Styles.content}>
          <Input type='email'>Email</Input>
          <Input type='text'>Nama</Input>
          <Textarea>Saran Kamu</Textarea>
        </div>
      </div>
      <Footer />
    </IonPage>
  );
};

export default Contact;
