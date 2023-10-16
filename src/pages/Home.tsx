import { IonContent, IonHeader,IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="layout">
    <div className="layout-left">
        <div className="brand">Desa Digital.</div>
        <div className="badge">Pemerintah Jawa Barat</div>
        <h1 className="heading">Administrasi Desa Jawa</h1>
        <p className="lead">
            Desa pintar masuk ke dunia digital Administrasi Desa
        </p>
        <form className="invite-form">
            <input type="text" placeholder="Email address" />
            <button type="submit">Sign Me Up</button>
        </form>
    </div>
    <div className="layout-right"></div>
</div>
  );
};

export default Home;
