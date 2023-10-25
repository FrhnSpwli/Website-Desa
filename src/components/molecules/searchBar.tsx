import { ReactNode } from 'react';
import { IonSearchbar } from '@ionic/react';

interface SearchBarProps {
    children: ReactNode;
}

const SearchBar = ({ children }: SearchBarProps) => {

    return (
        <IonSearchbar placeholder={`${children}`} mode='ios' animated={true}></IonSearchbar>
    );
}
export default SearchBar;