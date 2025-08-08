import React from 'react';
import styles from '../CSS/Features.module.css';
import Icon from "./Icon";
import {FaBriefcase, FaChartBar, FaRegClock} from "react-icons/fa";
import {IconType} from "react-icons";

interface FeatureProps {
    icon: IconType;
    title: string;
    description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
    return (
        <div className={styles.feature}>
            <div className={styles.icon}>
                <Icon icon={icon}/>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

const Features: React.FC = () => {
    const featuresData: FeatureProps[] = [
        {
            icon: FaRegClock,
            title: 'Срок разработки — 3 недели',
            description: 'Ставим ваш логотип, помогаем заполнить товары/услуги, варианты доставки и контактную информацию + публикуем приложение',
        },
        {
            icon: FaBriefcase,
            title: 'Идеально для малого бизнеса',
            description: 'Не нужно тратить 1.5+ млн. рублей и полгода / год времени на разработку приложения',
        },
        {
            icon: FaChartBar,
            title: 'Широкие возможности',
            description: 'Базовая версия приложения может очень много',
        },
    ];

    return (
        <section className={styles.features}>
            {featuresData.map((feature, index) => (
                <Feature
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </section>
    );
};

export default Features;