import Styles from '../styles/Product.module.css';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonImg, IonSearchbar } from '@ionic/react';
import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';
import Pic1 from '/images/cimicimi.jpg'
import Pic2 from '/images/pastel asap.jpg'
import Pic3 from '/images/telur asin.jpg'
import Pic4 from '/images/sedang_1668397058_marning.jpg'
import { Style } from '@capacitor/status-bar';
import SearchBar from '../components/molecules/searchBar';

const Product = () => {

    return (
        <IonPage>
            <Navbar>Product</Navbar>
            <IonContent>
                <div className={Styles.container}>
                    <div className={Styles.title}>
                        <h1>Produk Unggulan Desa</h1>
                    </div>
                    <SearchBar>Search Bar</SearchBar>
                    <div className={Styles.responsive}>
                        <IonCard className={Styles.card}>
                          <div className={Styles.cardContent}>
                            <IonImg src={Pic1} className={Styles.image}/>
                            <div className={Styles.desc}>
                              <IonCardHeader>
                                <IonCardTitle>Cimi Cimi</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent> 
                            Cimi cimi, juga dikenal dengan stick bawang, merupakan camilan khas dari Balikapan.
                            Bentuk camilan ini hampir sama seperti camilan stick yang berbentuk panjang, 
                            hanya saja ukuran Stick lebih tipis dibandingkan dengan camilan stick pada umumnya. 
                            Juga tersedia dalam rasa keju.
                            </IonCardContent>
                            </div>
                          </div>
                        </IonCard>
                        <IonCard className={Styles.card}>
                          <div className={Styles.cardContent}>
                            <IonImg src={Pic2} className={Styles.image}/>
                            <div className={Styles.desc}>
                              <IonCardHeader>
                                <IonCardTitle>Pastel Asap</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent> 
                            Pastel merupakan makanan tradisional Indonesia yang sering dicari oleh
                            masyarakat. Bentuknya khas, melengkung seperti bulan sabit dengan gelombang 
                            gelombang kecil di sisinya. Pastel juga menjadi kudapan yang mengenyangkan
                            karena padat isian. 
                            </IonCardContent>
                            </div>
                          </div>
                        </IonCard>
                        <IonCard className={Styles.card}>
                          <div className={Styles.cardContent}>
                            <IonImg src={Pic3} className={Styles.image}/>
                            <div className={Styles.desc}>
                              <IonCardHeader>
                                <IonCardTitle>Telur Asin</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent> 
                            Telur asin adalah istilah umum untuk masakan berbahan dasar telur yang diawetkan 
                            dengan cara diasinkan. Kebanyakan telur yang diasinkan adalah telur itik, 
                            meski tidak menutup kemungkinan untuk telur-telur yang lain.
                            </IonCardContent>
                            </div>
                          </div>
                        </IonCard>
                        <IonCard className={Styles.card}>
                          <div className={Styles.cardContent}>
                            <IonImg src={Pic4} className={Styles.image}/>
                            <div className={Styles.desc}>
                              <IonCardHeader>
                                <IonCardTitle>Marning Jagung</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent> 
                            Marning jagung merupakan jenis makanan yang terbuat dari 
                            olahan dari jagung yang di jadikan makanan (snack) yang 
                            dikonsumsi setelah melalui proses pengolahan sederhana.
                            </IonCardContent>
                            </div>
                          </div>
                        </IonCard>
                      </div>
                </div>
            </IonContent>
            <Footer />
        </IonPage>
    )
}

export default Product;
