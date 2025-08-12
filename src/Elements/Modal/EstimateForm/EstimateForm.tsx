import React, { useState } from 'react';
import styles from '../../../CSS/Modal/EstimateForm.module.css';
// 1. Импортируем компонент из новой библиотеки
import { IMaskInput } from 'react-imask';
import { useCustomTranslate } from '../../../i18n/useCustomTranslate'

const EstimateForm: React.FC = () => {
    const [message, setMessage] = useState('');
    const MAX_CHARS = 15000;

    const { t } = useCustomTranslate();

    return (
        <div className={styles.formContainer}>
            <h2>{t('estimate_form.title')}</h2>
            <p>{t('estimate_form.subtitle')}</p>
            <form>
                <input type="text" placeholder={t('estimate_form.name')} className={styles.input} />
                <input type="email" placeholder={t('estimate_form.email')} className={styles.input} />

                {/* 2. Используем новый компонент и передаем маску */}
                <IMaskInput
                    mask="+7 (000) 000-00-00"
                    placeholder="+7 (___) ___-__-__"
                    className={styles.input}
                />

                <textarea
                    placeholder={t('estimate_form.message')}
                    className={`${styles.input} ${styles.textarea}`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={MAX_CHARS}
                />
                {/* ...остальная часть формы остается без изменений... */}
            </form>
        </div>
    );
};

export default EstimateForm;