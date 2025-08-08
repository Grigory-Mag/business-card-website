import React from 'react';
// 1. Импортируем IconType напрямую из библиотеки react-icons
import { IconType } from 'react-icons';

interface IconProps {
    // 2. Используем IconType вместо React.ElementType
    icon: IconType; // <-- ИЗМЕНЕНИЕ ЗДЕСЬ
    className?: string;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, className }) => {
    // @ts-ignore
    return <IconComponent className={className} />;
};

export default Icon;