import React, { useState } from 'react';
import Styles from '../styles/Product.module.css';
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonImg, IonContent, SearchbarInputEventDetail } from '@ionic/react';
import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';
import SearchBar from '../components/molecules/searchBar';

function Product() {
  const data = [
    {
      title: 'Cimi Cimi',
      date: '20 Juli 2023',
      description: 'Cimi cimi, juga dikenal dengan stick bawang, merupakan camilan khas dari Balikapan. Bentuk camilan ini hampir sama seperti camilan stick yang berbentuk panjang, hanya saja ukuran Stick lebih tipis dibandingkan dengan camilan stick pada umumnya. Juga tersedia dalam rasa keju.',
      Image:'/images/cimicimi.jpg'
    },
    {
      title: 'Pastel Asap',
      date: '20 Agustus 2023',
      description: 'Pastel merupakan makanan tradisional Indonesia yang sering dicari oleh masyarakat. Bentuknya khas, melengkung seperti bulan sabit dengan gelombang gelombang kecil di sisinya. Pastel juga menjadi kudapan yang mengenyangkan karena padat isian.',
      Image:'/images/pastel asap.jpg'
    },
    {
      title: 'Telur Asin',
      date: '20 September 2023',
      description: 'Telur asin adalah istilah umum untuk masakan berbahan dasar telur yang diawetkan dengan cara diasinkan. Kebanyakan telur yang diasinkan adalah telur itik, meski tidak menutup kemungkinan untuk telur-telur yang lain.',
      Image:'/images/telur asin.jpg'
    },
    {
      title: 'Marning Jagung',
      date: '20 Oktober 2023',
      description: 'Marning jagung merupakan jenis makanan yang terbuat dari olahan dari jagung yang di jadikan makanan (snack) yang dikonsumsi setelah melalui proses pengolahan sederhana.',
      Image:'/images/sedang_1668397058_marning.jpg'
    }
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
            <Navbar>Product</Navbar>
            <IonContent>
                <div className={Styles.container}>
                    <div className={Styles.title}>
                        <h1>Produk Unggulan Desa</h1>
                    </div>
                    <SearchBar onInput={handleInput}>Search Bar</SearchBar>
                    <div className={Styles.responsive}>
                      {results.map((item, index) => (
                        <IonCard key={index} className={Styles.card}>
                          <IonImg src={item.Image} className={Styles.image} />
                          <div className={Styles.content}>
                            <IonCardHeader>
                              <IonCardSubtitle>{item.date}</IonCardSubtitle>
                              <IonCardTitle>{item.title}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                              {item.description}
                            </IonCardContent>
                          </div>
                        </IonCard>
                      ))}
                    </div>
                </div>
            <Footer />
            </IonContent>
        </IonPage>
    );
}

export default Product;
