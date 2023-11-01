import React, { ReactNode } from 'react';
import { IonSearchbar } from '@ionic/react';
import Styles from './searchBar.module.css';

interface SearchBarProps {
    children: ReactNode;
    onIonInput: (event: CustomEvent<void>) => void;
}

const SearchBar = ({ children, onIonInput }: SearchBarProps) => {
    return (
        <div className={Styles.searchBar}>
            <IonSearchbar
                debounce={1000}
                placeholder={`${children}`}
                mode='ios'
                animated={true}
                color="light"
                spellCheck={true}
                onIonInput={onIonInput}
            ></IonSearchbar>
        </div>
    );
}

export default SearchBar;
