import React from 'react';
import styles from './styles.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_wrapper}>
                <div className={styles.contact}>
                    <h3>Контакты</h3>
                    <p>Почта</p>
                    <p>Почта</p>
                    <p>Почта</p>
                </div>
            </div>
        </footer>
    );
};
