import { useTranslation } from 'react-i18next';
import { resources } from './i18n'; // Импортируем ресурсы

// Создаем типизированный список языков на основе ключей из `resources`
export const availableLanguages = Object.keys(resources);

export const useCustomTranslate = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return {
        t,
        changeLanguage,
        currentLanguage: i18n.language,
        availableLanguages, // Возвращаем список доступных языков
    };
};