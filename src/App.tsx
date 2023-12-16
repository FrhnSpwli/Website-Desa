import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Artikel from "./pages/Artikel/Artikel";
import ArtikelDetail from "./pages/Artikel/ArtikelDetail";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import notFound from "./pages/notFound";
import Product from "./pages/Product/Product";
import ProductDetail from "./pages/Product/ProductDetail";
import Pembangunan from "./pages/AdministrasiPembangunan";
import Penduduk from "./pages/AdministrasiPenduduk";
import Kelembagaan from "./pages/AdministrasiKelembagaan";

//AdminPages
import AdminArtikel from "./pages/Admin/Artikel/Artikel";
import ArtikelEdit from "./pages/Admin/Artikel/ArtikelEdit";
import ArtikelCreate from "./pages/Admin/Artikel/ArtikelCreate";
import AdminProduct from "./pages/Admin/Product/Product";
import ProductCreate from "./pages/Admin/Product/ProductCreate";
import ProductEdit from "./pages/Admin/Product/ProductEdit";
import AdminKelembagaan from "./pages/Admin/Kelembagaan/Kelembagaan";
import KelembagaanCreate from "./pages/Admin/Kelembagaan/KelembagaanCreate";
import KelembagaanEdit from "./pages/Admin/Kelembagaan/KelembagaanEdit";
import AdministrasiPembangunan from "./pages/Admin/Pembangunan/Pembangunan";
import PembangunanCreate from "./pages/Admin/Pembangunan/PembangunanCreate";
import PembangunanEdit from "./pages/Admin/Pembangunan/PembangunanEdit";
import AdminPenduduk from "./pages/Admin/Penduduk/Penduduk";
import PendudukCreate from "./pages/Admin/Penduduk/PendudukCreate";
import PendudukEdit from "./pages/Admin/Penduduk/PendudukEdit";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/home" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/artikel" component={Artikel} />
        <Route path="/artikel/:id" component={ArtikelDetail} exact={true} />
        <Route path="/contact" component={Contact} />
        <Route path="/settings" component={Settings} />
        <Route path="/login" component={Login} />
        <Route path="/landing" component={Landing} />
        <Route path="/product" component={Product} />
        <Route path="/product/:id" component={ProductDetail} exact={true} />
        <Route path="/pembangunan" component={Pembangunan} />
        <Route path="/penduduk" component={Penduduk} />
        <Route path="/kelembagaan" component={Kelembagaan} />

        {/* AdminPages */}
        <Route
          exact
          path="/admin"
          render={() => <Redirect to="/admin/artikel" />}
        />
        <Route path="/admin/artikel" component={AdminArtikel} />
        <Route path="/admin/artikel/edit/:id" component={ArtikelEdit} />
        <Route path="/admin/artikel/create" component={ArtikelCreate} />
        <Route path="/admin/product" component={AdminProduct} />
        <Route path="/admin/product/create" component={ProductCreate} />
        <Route path="/admin/product/edit/:id" component={ProductEdit} />
        <Route path="/admin/kelembagaan" component={AdminKelembagaan} />
        <Route path="/admin/kelembagaan/create" component={KelembagaanCreate} />
        <Route path="/admin/kelembagaan/edit/:id" component={KelembagaanEdit} />
        <Route path="/admin/pembangunan" component={AdministrasiPembangunan} />
        <Route path="/admin/pembangunan/create" component={PembangunanCreate} />
        <Route path="/admin/pembangunan/edit/:id" component={PembangunanEdit} />
        <Route path="/admin/penduduk" component={AdminPenduduk} />
        <Route path="/admin/penduduk/create" component={PendudukCreate} />
        <Route path="/admin/penduduk/edit/:id" component={PendudukEdit} />

        <Route component={notFound} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
