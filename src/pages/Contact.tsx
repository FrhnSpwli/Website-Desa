import { IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Footer from '../components/organisms/Footer';
import Header from '../components/organisms/Header';
import Button from '../components/atoms/button';
import Input from '../components/atoms/input';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <div className='contact-container'>
        <h1>Contact</h1>
        <p>Have a question or want to work together?</p>
        <Button>Get In Touch</Button>
        <Input type='email'>Email</Input>
        <Input type='text'>Name</Input>
        <Input type='password'>Password</Input>
      </div>
      <Footer />
    </IonPage>
  );
};

export default Contact;