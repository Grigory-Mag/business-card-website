import React from 'react';
import styles from '../CSS/Footer.module.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import Icon from '../Elements/Icon'; // <-- Импортируем нашу обертку
import { useCustomTranslate } from '../i18n/useCustomTranslate';

const Footer: React.FC = () => {
    const { t } = useCustomTranslate();
    // 1. Определяем полный адрес для карты
    const fullAddress = 'Екатеринбург, Декабристов, д. 45, офис 210-Б';

    // 2. Создаем URL для Google Карт.
    // encodeURIComponent кодирует адрес, заменяя пробелы на %20 и т.д.
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}`;
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* ... другие части футера ... */}
                <div className={styles.contactColumn} id={"contacts"}>
                    <h4>{t('footer.our_contacts')}</h4>
                    <ul className={styles.contactList}>
                        <li>
                            <Icon icon={FaMapMarkerAlt} /> {/* <-- Используем обертку */}
                            <a
                                href={mapUrl}
                                className={styles.addressLink} // Добавляем класс для стилизации
                                target="_blank"                 // Открывает ссылку в новой вкладке
                                rel="noopener noreferrer"       // Рекомендация по безопасности для внешних ссылок
                            >
                                <span>{t('footer.address')}</span>
                            </a>
                        </li>
                        <li>
                            <Icon icon={FaEnvelope} /> {/* <-- Используем обертку */}
                            <a href="mailto:dev@cumorka.ru">dev@cumorka.ru</a>
                        </li>
                        <li>
                            <Icon icon={FaPhoneAlt} /> {/* <-- Используем обертку */}
                            <a href="tel:78005553535">+7 (800) 555-35-35</a>
                        </li>
                        <li>
                            <span><b className={styles.innText}>{t('footer.inn')}</b>540750201300</span>
                        </li>
                    </ul>
                    <div className={styles.socialIcons}>
                        <a href="https://t.me/rybvladislav" aria-label="Telegram">
                            <Icon icon={FaTelegramPlane} /> {/* <-- Используем обертку */}
                        </a>
                        <a href="https://wa.me/78005553535" aria-label="WhatsApp">
                            <Icon icon={FaWhatsapp} /> {/* <-- Используем обертку */}
                        </a>
                    </div>
                </div>
                {/* ... другие части футера ... */}
            </div>
        </footer>
    );
};

export default Footer;