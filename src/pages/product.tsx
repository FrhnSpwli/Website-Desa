import React, { useState } from 'react';
import Styles from '../styles/Product.module.css';
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonImg, IonContent, SearchbarInputEventDetail } from '@ionic/react';
import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';
import SearchBar from '../components/molecules/searchBar';

function Product() {
  const data = [
    {
      title: 'Cimi-Cimi',
      price: 10000,
      description: 'Cimi-cimi memiliki berbagai macam rasa seperti rasa keju, rasa pedas, rasa asin, dan rasa manis. Cimi-cimi memiliki bentuk yang unik dan menarik.',
      Image:'/images/cimicimi.jpg'
    },
    {
      title: 'Pastel Asap',
      price: 60000,
      description: 'Pastel menjadi kudapan yang mengenyangkan karena padat isian. Bentuknya khas, melengkung seperti bulan sabit dengan gelombang gelombang kecil di sisinya.',
      Image:'/images/pastel asap.jpg'
    },
    {
      title: 'Telur Asin',
      price: 2500,
      description: 'Telur asin adalah istilah umum untuk masakan berbahan dasar telur yang diawetkan dengan cara diasinkan. Kebanyakan telur yang diasinkan adalah telur itik, meski tidak menutup kemungkinan untuk telur-telur yang lain.',
      Image:'/images/telur asin.jpg'
    },
    {
      title: 'Marning Jagung',
      price: 20000,
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
                    <h1>Featured Product</h1>
                </div>
                <SearchBar onInput={handleInput}>Search Bar</SearchBar>
                <div className={Styles.responsive}>
                    {results.map((item, index) => (
                        <IonCard key={index}>
                            <IonImg src={item.Image} className={Styles.image} />
                            <IonCardHeader>
                                <IonCardTitle>{item.title}</IonCardTitle>
                                <IonCardSubtitle><p>Rp. {item.price}</p></IonCardSubtitle>
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

export default Product;
