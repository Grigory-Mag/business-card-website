import React from 'react';
import styles from '../CSS/Header.module.css';
import Button from '../Elements/Button';
import {Link} from "react-router-dom";

interface HeaderProps {
    onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                {/*<img src="/path-to-your-logo.svg" alt="Koyu.Tech Logo" />*/}
            </div>
            <nav className={styles.nav}>
                {/*<a href="#mobile-apps">Мобильные приложения</a>*/}
                <Link to="/">Главная</Link>
                <Link to="/portfolio">Портфолио</Link>
                <a href="#contacts">Контакты</a>
                {/*<a href="#services">Сервисы</a>*/}
                {/*<a href="#support">Поддержка</a>*/}
                {/*<a href="#contacts">Контакты</a>*/}
            </nav>

            <div className={styles.actions}>
                {/* Привязываем открытие окна к кнопке */}
                <Button variant="primary" onClick={onOpenModal}>Обсудить проект</Button>
            </div>

        </header>
    );
};

export default Header;