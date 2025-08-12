import React from 'react';
import styles from '../CSS/Header.module.css';
import Button from '../Elements/Button';
import { Link } from "react-router-dom";
// 1. Импортируем хук useTranslation
import { useCustomTranslate } from '../i18n/useCustomTranslate';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';

interface HeaderProps {
    onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
    // 2. Инициализируем хук. Он дает нам функцию 't' и инстанс 'i18n'
    const { t, changeLanguage, currentLanguage } = useCustomTranslate();


    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                {/* Логотип */}
            </div>
            <nav className={styles.nav}>
                <Link to="/">{t('header.main')}</Link>
                <Link to="/portfolio">{t('header.portfolio')}</Link>
                <a href="#contacts">{t('header.contacts')}</a>
            </nav>

            <div className={styles.actions}>
                <div className={styles.langSwitcher}>
                    <LanguageSwitcher />
                </div>
                <Button variant="primary" onClick={onOpenModal}>
                    {t('header.discuss_project')}
                </Button>
            </div>
        </header>
    );
};

export default Header;