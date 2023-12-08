import React, { ReactNode } from 'react';
import { IonTextarea, IonItem, IonList } from '@ionic/react';

interface TextareaProps {
    children: ReactNode;
}

const Textarea = ({ children }: TextareaProps) => {

    return (
        <IonTextarea mode='ios' label={`${children}`} labelPlacement="floating" fill="solid" placeholder={`Masukkan ${children}`}></IonTextarea>
    );
}
export default Textarea;