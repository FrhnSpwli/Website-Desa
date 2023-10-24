import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import { RouteComponentProps, useHistory } from 'react-router';
import Button from '../components/atoms/button';

const NotFound: React.FC<RouteComponentProps> = ({ location }) => {
    const history = useHistory();

    return (
        <IonPage>
            <IonContent>
                <h2>Sorry, we couldn't find {location.pathname}</h2>
            </IonContent>
            <Button path='goBack'>Go Back</Button>
            <Button path="/home">Go Home</Button>
        </IonPage>
    );
};

export default NotFound;
