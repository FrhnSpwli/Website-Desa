import React, { ReactNode } from 'react';
import { IonSearchbar, SearchbarInputEventDetail } from '@ionic/react';
import Styles from './searchBar.module.css';

interface SearchBarProps {
    children: ReactNode;
    onInput: (event: CustomEvent<SearchbarInputEventDetail>) => void;
}

const SearchBar = ({ children, onInput }: SearchBarProps) => {
    return (
        <div className={Styles.searchBar}>
            <IonSearchbar
                debounce={1000}
                placeholder={`${children}`}
                mode='ios'
                animated={true}
                color="light"
                spellCheck={true}
                onIonInput={onInput}
            ></IonSearchbar>
        </div>
    );
}

export default SearchBar;
