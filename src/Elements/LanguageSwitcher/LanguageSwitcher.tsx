import React, { useState, useRef, useEffect } from 'react';
import styles from '../../CSS//LanguageSwitcher/LanguageSwitcher.module.css'; // Путь к вашим стилям
import { useCustomTranslate } from '../../i18n/useCustomTranslate';
import { FaGlobe } from 'react-icons/fa'; // Иконка глобуса
import Icon from '../Icon';

const LanguageSwitcher: React.FC = () => {
    const { changeLanguage, currentLanguage, availableLanguages } = useCustomTranslate();
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Карта для красивого отображения названий языков
    const languageNames: { [key: string]: string } = {
        ru: 'Русский',
        en: 'English',
        'en-AU': 'English (AU)',
        de: 'Deutsch',
        fr: 'Français',
        es: 'Español',
        it: 'Italiano',
        'zh-CN': '中文 (简体)',
        ja: '日本語',
        'pt-BR': 'Português (BR)',
    };

    // Хук для закрытия меню при клике вне его
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);


    return (
        <div className={styles.switcherWrapper} ref={wrapperRef}>
            <button className={styles.mainButton} onClick={() => setIsOpen(!isOpen)}>
                <Icon icon={FaGlobe} />
                <span>{languageNames[currentLanguage] || currentLanguage.toUpperCase()}</span>
            </button>

            {isOpen && (
                <ul className={styles.dropdownMenu}>
                    {availableLanguages.map(lang => (
                        <li key={lang}>
                            <button
                                className={currentLanguage === lang ? styles.active : ''}
                                onClick={() => {
                                    changeLanguage(lang);
                                    setIsOpen(false);
                                }}
                            >
                                {languageNames[lang] || lang}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageSwitcher;