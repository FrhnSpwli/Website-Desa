import React, { ReactNode } from 'react';
import { IonButton } from '@ionic/react';

interface ButtonProps {
    children: ReactNode;
    shape?: 'round' | undefined;
    onClick?: () => void;
}

const Button = ({ children, shape, onClick }: ButtonProps) => {
    return (
        <IonButton shape={shape} onClick={onClick}>
            {children}
        </IonButton>
    );
};

export default Button;