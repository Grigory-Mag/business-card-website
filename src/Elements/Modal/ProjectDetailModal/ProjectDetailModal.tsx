import React from 'react';
import styles from '../../../CSS/Modal/ProjectDetailModal.module.css';
import Carousel from '../../Carousel/Carousel';
import { Project } from '../../ProjectCard';
import { useCustomTranslate } from '../../../i18n/useCustomTranslate'

interface ProjectDetailProps {
    project: Project;
}

const ProjectDetailModal: React.FC<ProjectDetailProps> = ({ project }) => {
    const { t } = useCustomTranslate();
    return (
        <div>
            <Carousel images={project.detailedImages} />
            <div className={styles.content}>
                <h2>{t(project.title)}</h2>
                <div className={styles.tags}>
                    {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                </div>
                <p>{t(project.description)}</p>
            </div>
        </div>
    );
};

export default ProjectDetailModal;