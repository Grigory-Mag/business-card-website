import React, { useState, useEffect } from 'react';
import styles from '../CSS/PortfolioPage.module.css';
import ProjectCard, { Project } from '../Elements/ProjectCard';
import FitnessCrm from '../Images/fitness-crm.png';
import FoodApp from '../Images/food-app.jpg';
import MobileBank from '../Images/mobile-bank.jpg';

import Modal from '../Elements/Modal/Modal';
import ProjectDetailModal from '../Elements/Modal/ProjectDetailModal/ProjectDetailModal';

import placeholder_1 from '../Images/dino.png';
import placeholder_2 from '../Images/hitori_Gotou.jpg';
import placeholder_3 from '../Images/the_rock.jpg';

import { useCustomTranslate } from '../i18n/useCustomTranslate';

const categoryKeys = ['portfolio_page.all', 'portfolio_page.mobile', 'portfolio_page.crm', 'portfolio_page.web'];
const categoryMap = {
    'portfolio_page.mobile': 'Мобильные приложения',
    'portfolio_page.crm': 'CRM',
    'portfolio_page.web': 'Веб-сайты'
};

// Обновляем ВСЕ проекты, чтобы они соответствовали интерфейсу Project
const allProjects: Project[] = [
    {
        id: 1, title: 'portfolio_page.portfolio_projects.voice_sender.title', category: 'portfolio_page.crm',
        imageUrl: FitnessCrm, tags: ['CRM', 'Java', 'Android', 'Kotlin'],
        detailedImages: [ placeholder_1, placeholder_2, placeholder_3 ],
        description: 'portfolio_page.portfolio_projects.voice_sender.description'
    },
    {
        id: 2, title: 'portfolio_page.portfolio_projects.scan_shape.title', category: 'portfolio_page.mobile',
        imageUrl: MobileBank, tags: ['Flutter', 'Android'],
        detailedImages: [ placeholder_1, placeholder_2, placeholder_3 ],
        description: 'portfolio_page.portfolio_projects.scan_shape.description'
    },
    // --- ИСПРАВЛЕНИЯ ЗДЕСЬ ---
    // Добавляем недостающие поля в остальные проекты
    {
        id: 3, title: 'portfolio_page.portfolio_projects.lt_fest.title', category: 'portfolio_page.mobile',
        imageUrl: 'https://via.placeholder.com/400x300/7f8c8d/ffffff?text=Project+3',
        tags: ['Flutter', 'Android', 'iOS'],
        detailedImages: [
            placeholder_1,
            placeholder_2,
            placeholder_3
        ],
        description: 'portfolio_page.portfolio_projects.lt_fest.description'
    },
    {
        id: 4, title: 'portfolio_page.portfolio_projects.prihozane_com.title', category: 'portfolio_page.web',
        imageUrl: FoodApp,
        tags: ['React', 'TypeScript', 'Vite'],
        detailedImages: [
            placeholder_1,
            placeholder_2,
            placeholder_3],
        description: 'portfolio_page.portfolio_projects.prihozane_com.description'
    },
    // {
    //     id: 5, title: 'Система учета для ритейла', category: categories.crm,
    //     imageUrl: 'https://via.placeholder.com/400x300/bdc3c7/ffffff?text=Project+5',
    //     tags: ['CRM', 'PostgreSQL'],
    //     detailedImages: ['https://via.placeholder.com/800x450/bdc3c7/ffffff?text=Inventory'],
    //     description: 'Система для автоматизации складского учета, управления поставками и анализа продаж для розничных сетей.'
    // },
    // {
    //     id: 6, title: 'Лендинг для онлайн-курсов', category: categories.web,
    //     imageUrl: 'https://via.placeholder.com/400x300/8e44ad/ffffff?text=Project+6',
    //     tags: ['Web', 'Tilda'],
    //     detailedImages: ['https://via.placeholder.com/800x450/8e44ad/ffffff?text=Course+Page'],
    //     description: 'Продающий лендинг для запуска образовательных курсов с интеграцией платежной системы и автоматической рассылкой.'
    // },
];

// const categories = ['Все', 'Мобильные приложения', 'CRM', 'Веб-сайты'];

const PortfolioPage: React.FC = () => {
    const { t } = useCustomTranslate();
    const [activeFilter, setActiveFilter] = useState(categoryKeys[0]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        // Если выбрана категория "Все"
        if (activeFilter === categoryKeys[0]) {
            setFilteredProjects(allProjects);
        } else {
            // Сравниваем КЛЮЧ категории проекта с АКТИВНЫМ КЛЮЧОМ фильтра
            const filtered = allProjects.filter(p => p.category === activeFilter);
            setFilteredProjects(filtered);
        }
        // Зависимость теперь только от activeFilter, так как t() не участвует в логике
    }, [activeFilter]);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className={styles.pageWrapper}>
            <header className={styles.header}>
                <h1>{t('portfolio_page.title')}</h1>
                <p>{t('portfolio_page.subtitle')}</p>
            </header>

            <div className={styles.filterContainer}>
                {/* 5. Переводим ключи категорий в момент рендера */}
                {categoryKeys.map(categoryKey => (
                    <button
                        key={categoryKey}
                        className={`${styles.filterButton} ${activeFilter === categoryKey ? styles.active : ''}`}
                        onClick={() => setActiveFilter(categoryKey)}
                    >
                        {t(categoryKey)} {/* <-- ПЕРЕВОД ЗДЕСЬ */}
                    </button>
                ))}
            </div>

            <main className={styles.grid}>
                {filteredProjects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project} // Передаем проект с ключами
                        onClick={() => handleProjectClick(project)}
                    />
                ))}
            </main>

            <Modal isOpen={!!selectedProject} onClose={handleCloseModal}>
                {selectedProject && <ProjectDetailModal project={selectedProject} />}
            </Modal>
        </div>
    );
};

export default PortfolioPage;
