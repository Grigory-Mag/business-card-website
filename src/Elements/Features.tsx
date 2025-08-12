import React from 'react';
import styles from '../CSS/Features.module.css';
import Icon from "./Icon";
import {FaBriefcase, FaChartBar, FaRegClock} from "react-icons/fa";
import {IconType} from "react-icons";
import { useCustomTranslate } from '../i18n/useCustomTranslate';

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
    const { t } = useCustomTranslate();
    const featuresData: FeatureProps[] = [
        {
            icon: FaRegClock,
            title: t('features.development_time_title'),
            description: t('features.development_time_desc'),
        },
        {
            icon: FaBriefcase,
            title: t('features.small_business_title'),
            description: t('features.small_business_desc'),
        },
        {
            icon: FaChartBar,
            title: t('features.wide_possibilities_title') ,
            description: t('features.wide_possibilities_desc'),
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