import { ReactNode } from 'react';
import { IonSearchbar } from '@ionic/react';
import Styles from './searchBar.module.css';

interface SearchBarProps {
    children: ReactNode;
}

const SearchBar = ({ children }: SearchBarProps) => {

    return (
        <div className={Styles.searchBar}>
            <IonSearchbar placeholder={`${children}`} mode='ios' animated={true} color={"light"} spellCheck={'true'}></IonSearchbar>
        </div>
    );
}
export default SearchBar;
