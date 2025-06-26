import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

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
                    <Link to="/events">События</Link>
                    <Link to="/mediacenters">Карта Медиацентров</Link>
                    <a href="#">Медиа Алтая</a>
                    <Link to="/about">Контакты</Link>
                </nav>
            </div>
        </header>
    );
};
