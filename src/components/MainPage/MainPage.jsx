import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MainPage.module.css';

const MainPage = () => {
    const navigate = useNavigate();

    const handleButtonClick = (type) => {
        // Adjust routing based on button type
        let route;
        switch (type) {
            case 'Give mail':
                route = '/form-mail';
                break;
            case 'Get mail':
                route = '/search2';
                break;
            case 'Give a passenger':
                route = '/form';
                break;
            case 'Get a passenger':
                route = '/search';  // Route to SearchPage
                break;
            default:
                route = '/';
        }
        navigate(route);
    };

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => handleButtonClick('Give a passenger')}>Give a passenger</button>
            <button className={styles.button} onClick={() => handleButtonClick('Get a passenger')}>Get a passenger</button>
            <button className={styles.button} onClick={() => handleButtonClick('Give mail')}>Give mail</button>
            <button className={styles.button} onClick={() => handleButtonClick('Get mail')}>Get mail</button>
        </div>
    );
};

export default MainPage;
