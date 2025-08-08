import React from 'react';
import styles from '../../../CSS/Modal/ProjectDetailModal.module.css';
import Carousel from '../../Carousel/Carousel';
import { Project } from '../../ProjectCard';

interface ProjectDetailProps {
    project: Project;
}

const ProjectDetailModal: React.FC<ProjectDetailProps> = ({ project }) => {
    return (
        <div>
            <Carousel images={project.detailedImages} />
            <div className={styles.content}>
                <h2>{project.title}</h2>
                <div className={styles.tags}>
                    {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                </div>
                <p>{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectDetailModal;