import React from 'react';
import styles from '../CSS/Hero.module.css';
import Button from '../Elements/Button';
import Icon from "./Icon";
import {FaTelegramPlane} from "react-icons/fa";
import MobileApp from '../Images/MobileApp.jpg'
import { useCustomTranslate } from '../i18n/useCustomTranslate';
// Функция для обработки клика
const handleTelegramClick = () => {
    window.open('https://t.me/rybvladislav', '_blank');
};

interface HeaderProps {
    onOpenModal: () => void;
}

const Hero: React.FC<HeaderProps> = ({ onOpenModal }) => {

    const { t } = useCustomTranslate();

    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.breadcrumbs}>
                    {/*<a href="/">Главная</a> <span>Мобильные приложения</span>*/}
                </div>
                <h1>{t('hero.title')}</h1>
                <p>{t('hero.subtitle')}</p>
                <div className={styles.buttons}>
                    <Button variant="primary" onClick={onOpenModal}>{t('hero.calculate_cost')}</Button>

                    <Button variant="secondary" onClick={handleTelegramClick}>
                        <Icon icon={FaTelegramPlane} /> {/* Добавляем иконку */}
                        <span>{t('hero.write_telegram')}</span> {/* Оборачиваем текст в span для стилизации */}
                    </Button>

                </div>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.mockup_img} src={MobileApp} alt="Mobile App Mockups" />
            </div>
        </section>
    );
};

export default Hero;