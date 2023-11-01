import React, { useState } from 'react';
import Styles from '../styles/Artikel.module.css';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonImg, IonContent } from '@ionic/react';
import Navbar from '../components/organisms/Navbar';
import SearchBar from '../components/molecules/searchBar';

function Artikel() {
    const data = [
        {
            title: 'Card Title 1',
            date: '20 Oktober 2023',
            description: 'This is the description for Card 1',
            image: '/images/cimicimi.jpg'
        },
        {
            date: '20 Oktober 2023',
            title: 'Card Title 2',
            description: 'This is the description for Card 2',
            image: '/images/istockphoto-91633822-612x612.jpg'
        },
        {
            title: 'Card Title 1',
            date: '20 Oktober 2023',
            description: 'This is the description for Card 1',
            image: '/images/cimicimi.jpg'
        },
        {
            date: '20 Oktober 2023',
            title: 'Card Title 2',
            description: 'This is the description for Card 2',
            image: '/images/istockphoto-91633822-612x612.jpg'
        },
        {
            title: 'Card Title 1',
            date: '20 Oktober 2023',
            description: 'This is the description for Card 1',
            image: '/images/cimicimi.jpg'
        },
        {
            date: '20 Oktober 2023',
            title: 'Card Title 2',
            description: 'This is the description for Card 2',
            image: '/images/istockphoto-91633822-612x612.jpg'
        },
        {
            title: 'Card Title 1',
            date: '20 Oktober 2023',
            description: 'This is the description for Card 1',
            image: '/images/cimicimi.jpg'
        },
        {
            date: '20 Oktober 2023',
            title: 'Card Title 2',
            description: 'This is the description for Card 2',
            image: '/images/istockphoto-91633822-612x612.jpg'
        },
    ];

    const [results, setResults] = useState([...data]);

    const handleInput = (event: CustomEvent<{ value: string }>) => {
        const query = event.detail.value;
        if (query === '') {
            setResults([...data]);
        } else {
            const filteredData = data.filter((item) => {
                return item.title.toLowerCase().includes(query.toLowerCase());
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
                        <h1>Berita dan Pengumuman</h1>
                    </div>
                    <SearchBar onIonInput={handleInput}>Search Bar</SearchBar>
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
            </IonContent>
        </IonPage >
    );
}

export default Artikel;
