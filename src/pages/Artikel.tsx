import React, { useState } from 'react';
import Styles from '../styles/Artikel.module.css';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonImg, IonContent, SearchbarInputEventDetail } from '@ionic/react';
import Navbar from '../components/organisms/Navbar';
import SearchBar from '../components/molecules/searchBar';
import Footer from '../components/organisms/Footer';

function Artikel() {
    const data = [
        {
            title: 'Wilayah Baru?',
            date: '20 Oktober 2023',
            description: 'Fontaine telah memiliki beberapa rumor dan bocoran yang mengisyaratkan apa yang diharapkan dari wilayah baru tersebut.',
            image: '/images/fontaine genim.jpg'
        },
        {
            title: 'Siapa Archon Fontaine Sebenarnya?',
            date: '20 Oktober 2023',
            description: 'Dari berita yang saya dapatkan menurut warga Desa Fontaine archon fontaine yang sebenarnya adalah...',
            image: '/images/fontaine.jpg'
        },
        {
            title: 'Furina De Fontaine',
            date: '20 Oktober 2023',
            description: 'Furina berkata: "Satu kebohongan selalu mengikuti kebohongan yang lain, sehingga "keadilan" pasti menunggu di akhir."',
            image: '/images/fontaine gi.jpg'
        },
        {
            title: 'Bangunan di Desa Fontaine',
            date: '20 Oktober 2023',
            description: 'konstruksi bangunan di Fontaine mengadopsi desain klasik bergaya Eropa dan hadir dengan beberapa bangunan publik utama macam teater Opera Epiclese, pengadilan The Court of Fontaine, dan masih banyak lagi.',
            image: '/images/fonten gi.jpg'
        },
        {
            title: 'Wilayah Baru?',
            date: '20 Oktober 2023',
            description: 'Fontaine telah memiliki beberapa rumor dan bocoran yang mengisyaratkan apa yang diharapkan dari wilayah baru tersebut.',
            image: '/images/fontaine genim.jpg'
        },
        {
            title: 'Siapa Archon Fontaine Sebenarnya?',
            date: '20 Oktober 2023',
            description: 'Dari berita yang saya dapatkan menurut warga Desa Fontaine archon fontaine yang sebenarnya adalah...',
            image: '/images/fontaine.jpg'
        },
        {
            title: 'Furina De Fontaine',
            date: '20 Oktober 2023',
            description: 'Furina berkata: "Satu kebohongan selalu mengikuti kebohongan yang lain, sehingga "keadilan" pasti menunggu di akhir."',
            image: '/images/fontaine gi.jpg'
        },
        {
            title: 'Bangunan di Desa Fontaine',
            date: '20 Oktober 2023',
            description: 'konstruksi bangunan di Fontaine mengadopsi desain klasik bergaya Eropa dan hadir dengan beberapa bangunan publik utama macam teater Opera Epiclese, pengadilan The Court of Fontaine, dan masih banyak lagi.',
            image: '/images/fonten gi.jpg'
        },
    ];

    const [results, setResults] = useState([...data]);

    const handleInput = (event: CustomEvent<SearchbarInputEventDetail>) => {
        const query = event.detail.value ?? "";
        if (query === '') {
            setResults([...data]);
        } else {
            const filteredData = data.filter((item) => {
                return item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase());
            });
            setResults([...filteredData]);
        }
    };

    return (
        <IonPage>
            <Navbar>Artikel</Navbar>
            <IonContent>
                <div className={Styles.container}>
                    <div className={Styles.title}>
                        <h1>Kabar Terbaru</h1>
                    </div>
                    <SearchBar onInput={handleInput}>Search Bar</SearchBar>
                    <div className={Styles.responsive}>
                        {results.map((item, index) => (
                            <IonCard key={index}>
                                <IonImg src={item.image} className={Styles.image} />
                                <IonCardHeader>
                                    <IonCardSubtitle>{item.date}</IonCardSubtitle>
                                    <IonCardTitle>{item.title}</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    {item.description}
                                </IonCardContent>
                            </IonCard>
                        ))}
                    </div>
                </div>
            <Footer />
            </IonContent>
        </IonPage >
    );
}

export default Artikel;
