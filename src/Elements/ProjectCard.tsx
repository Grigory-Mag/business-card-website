import React from 'react';
import styles from '../CSS/ProjectCard.module.css';
import { FaArrowRight } from 'react-icons/fa';
import Icon from "./Icon";
import { useCustomTranslate } from '../i18n/useCustomTranslate';

// 1. Расширяем интерфейс
export interface Project {
    id: number;
    title: string;
    category: string;
    imageUrl: string; // Главное изображение для карточки
    tags: string[];
    detailedImages: string[]; // Массив изображений для карусели
    description: string; // Детальное описание для модального окна
}

// 2. Добавляем проп onClick
interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

// href={`/portfolio/${project.id}`}
const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
    const { t } = useCustomTranslate();
    return (
        <div className={styles.card} onClick={onClick}>
            <img src={project.imageUrl} alt={project.title} className={styles.cardImage} />
            <div className={styles.overlay}>
                <div className={styles.tags}>
                    {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                </div>
                <h3 className={styles.title}>{t(project.title)}</h3>
                <div className={styles.link}>
                    {t('project_card.view_project')} <Icon icon={FaArrowRight} />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;