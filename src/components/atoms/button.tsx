import { ReactNode } from 'react';
import { IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

interface ButtonProps {
    children: ReactNode;
    shape?: 'round' | undefined;
    fill?: 'clear' | 'outline' | 'solid' | undefined;
    size?: 'small' | 'large' | undefined;
    color?: 'primary' | 'secondary' | 'light' | 'medium' | 'dark' | undefined;
    path?: string;
}

const Button = ({ children, shape, fill, size, color, path }: ButtonProps) => {
    const history = useHistory();

    const handleButtonClick = () => {
        if (path === 'goBack') {
            history.goBack();
            return;
        }
        if (path) {
            history.push(path);
        }   
    };

    return (
        <IonButton mode='ios' shape={shape} fill={fill} size={size} color={color} onClick={handleButtonClick}>
            {children}
        </IonButton>
    );
};

export default Button;
