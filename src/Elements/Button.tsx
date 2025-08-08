import React from 'react';
import styles from '../CSS/Button.module.css';
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant: 'primary' | 'secondary';
    type?: 'button' | 'submit' | 'reset';
}
const Button: React.FC<ButtonProps> = ({
                                           children,
                                           onClick,
                                           variant,
                                           type = 'button',
                                       }) => {
    const buttonStyle =
        variant === 'primary' ? styles.primary : styles.secondary;
    return (
        <button type={type} className={styles.button + ' ' + buttonStyle} onClick={onClick}>
            {children}
        </button>
    );
};
export default Button;