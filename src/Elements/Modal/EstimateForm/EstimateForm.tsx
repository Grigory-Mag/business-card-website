import React, { useState } from 'react';
import styles from '../../../CSS/Modal/EstimateForm.module.css';
// 1. Импортируем компонент из новой библиотеки
import { IMaskInput } from 'react-imask';

const EstimateForm: React.FC = () => {
    const [message, setMessage] = useState('');
    const MAX_CHARS = 15000;

    return (
        <div className={styles.formContainer}>
            <h2>Быстрая оценка</h2>
            <p>Давайте оперативно оценим вашу задачу</p>
            <form>
                <input type="text" placeholder="Имя" className={styles.input} />
                <input type="email" placeholder="Почта" className={styles.input} />

                {/* 2. Используем новый компонент и передаем маску */}
                <IMaskInput
                    mask="+7 (000) 000-00-00"
                    placeholder="+7 (___) ___-__-__"
                    className={styles.input}
                />

                <textarea
                    placeholder="Текст сообщения"
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