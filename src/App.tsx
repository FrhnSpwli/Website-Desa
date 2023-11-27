import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import About from './pages/About';
import Contact from './pages/Contact';
import Artikel from './pages/Artikel';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/login';
import Settings from './pages/Settings';
import notFound from './pages/notFound';
import Product from './pages/product';
import Pembangunan from './pages/pembangunan';
import Penduduk from './pages/AdministrasiPenduduk';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/artikel" component={Artikel} />
        <Route path="/contact" component={Contact} />
        <Route path="/settings" component={Settings} />
        <Route path="/login" component={Login} />
        <Route path="/landing" component={Landing} />
        <Route path="/product" component={Product} />
        <Route path="/pembangunan" component={Pembangunan} />
        <Route path="/penduduk" component={Penduduk} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route component={notFound} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;