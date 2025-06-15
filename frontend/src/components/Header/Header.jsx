import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <h1 className={styles.header__title}>АГРЕГАТОР ШКОЛЬНЫХ МЕДИА</h1>
                <nav className={styles.header__navigation}>
                    <a href="#">События</a>
                    <a href="#">Карта Медиацентров</a>
                    <a href="#">Медиа Алтая</a>
                    <a href="#">Контакты</a>
                </nav>
            </div>
        </header>
    );
};
