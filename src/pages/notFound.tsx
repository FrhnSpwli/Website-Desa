import React from 'react';
import { IonPage } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import Button from '../components/atoms/button';
import Styles from '../styles/notFound.module.css';

const NotFound: React.FC<RouteComponentProps> = ({ location }) => {

    return (
        <IonPage>
            <div className={Styles.container}>
                <p className={Styles.title}>Oops!</p>
                <div className={Styles.content}>
                <p className={Styles.subtitle}>404 - PAGE NOT FOUND</p>
                <p>Sorry, we couldn't find {location.pathname}. The page that you looking for might have been removed had it's name changed or temprorarily unavailable</p>
                </div>
                <div className={Styles.buttons}>
                    <Button shape='round' path='goBack'>Go Back</Button>
                    <Button shape='round' fill='outline' path="/home">Go Home</Button>
                </div>
            </div>
        </IonPage>
    );
};

export default NotFound;
