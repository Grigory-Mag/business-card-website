import React, { useEffect, ReactNode } from 'react';
import styles from '../../CSS/Modal/Modal.module.css';
import { FaTimes } from 'react-icons/fa';
import Icon from "../Icon";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    // Эффект для блокировки прокрутки фона при открытом окне
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        // Очистка эффекта при размонтировании компонента
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        // Оверлей, при клике на который окно закрывается
        <div className={styles.modalOverlay} onClick={onClose}>
            {/* Контейнер окна, клики по которому не должны его закрывать */}
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose} aria-label="Закрыть окно">
                    <Icon icon={FaTimes} />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;