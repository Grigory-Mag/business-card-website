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

// Обновляем ВСЕ проекты, чтобы они соответствовали интерфейсу Project
const allProjects: Project[] = [
    {
        id: 1, title: 'CRM для фитнес-клуба', category: 'CRM',
        imageUrl: FitnessCrm,
        tags: ['CRM', 'Java', 'React'],
        detailedImages: [
            placeholder_1,
            placeholder_2,
            placeholder_3
        ],
        description: 'Полностью кастомизированная CRM-система для управления клиентами, абонементами и расписанием тренировок. Интеграция с платежными системами и мобильным приложением.'
    },
    {
        id: 2, title: 'Мобильный банк', category: 'Мобильные приложения',
        imageUrl: MobileBank,
        tags: ['iOS', 'Android', 'Fintech'],
        detailedImages: [
             placeholder_1,
             placeholder_2,
             placeholder_3
        ],
        description: 'Современное и безопасное банковское приложение для iOS и Android. Позволяет управлять счетами, совершать переводы и анализировать расходы.'
    },
    // --- ИСПРАВЛЕНИЯ ЗДЕСЬ ---
    // Добавляем недостающие поля в остальные проекты
    {
        id: 3, title: 'Корпоративный сайт "СтройМаш"', category: 'Веб-сайты',
        imageUrl: 'https://via.placeholder.com/400x300/7f8c8d/ffffff?text=Project+3',
        tags: ['Web', 'Next.js'],
        detailedImages: [
            placeholder_1,
            placeholder_2,
            placeholder_3
        ],
        description: 'Информационный портал для крупной строительной компании с каталогом техники и формой обратной связи.'
    },
    {
        id: 4, title: 'Приложение для доставки еды', category: 'Мобильные приложения',
        imageUrl: FoodApp,
        tags: ['iOS', 'Firebase'],
        detailedImages: [
            placeholder_1,
            placeholder_2,
            placeholder_3],
        description: 'Удобное приложение для заказа еды из местных ресторанов с отслеживанием курьера в реальном времени.'
    },
    {
        id: 5, title: 'Система учета для ритейла', category: 'CRM',
        imageUrl: 'https://via.placeholder.com/400x300/bdc3c7/ffffff?text=Project+5',
        tags: ['CRM', 'PostgreSQL'],
        detailedImages: ['https://via.placeholder.com/800x450/bdc3c7/ffffff?text=Inventory'],
        description: 'Система для автоматизации складского учета, управления поставками и анализа продаж для розничных сетей.'
    },
    {
        id: 6, title: 'Лендинг для онлайн-курсов', category: 'Веб-сайты',
        imageUrl: 'https://via.placeholder.com/400x300/8e44ad/ffffff?text=Project+6',
        tags: ['Web', 'Tilda'],
        detailedImages: ['https://via.placeholder.com/800x450/8e44ad/ffffff?text=Course+Page'],
        description: 'Продающий лендинг для запуска образовательных курсов с интеграцией платежной системы и автоматической рассылкой.'
    },
];

const categories = ['Все', 'Мобильные приложения', 'CRM', 'Веб-сайты'];

const PortfolioPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('Все');
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        if (activeFilter === 'Все') {
            setFilteredProjects(allProjects);
        } else {
            const filtered = allProjects.filter(p => p.category === activeFilter);
            setFilteredProjects(filtered);
        }
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
                <h1>Наши проекты</h1>
                <p>Мы гордимся каждой строчкой кода и каждым пикселем в наших работах</p>
            </header>

            <div className={styles.filterContainer}>
                {categories.map(category => (
                    <button
                        key={category}
                        className={`${styles.filterButton} ${activeFilter === category ? styles.active : ''}`}
                        onClick={() => setActiveFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <main className={styles.grid}>
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} onClick={() => handleProjectClick(project)} />
                ))}
            </main>

            {/* Рендерим модальное окно */}
            <Modal isOpen={!!selectedProject} onClose={handleCloseModal}>
                {/* Убеждаемся, что проект выбран, прежде чем рендерить детали */}
                {selectedProject && <ProjectDetailModal project={selectedProject} />}
            </Modal>
        </div>
    );
};

export default PortfolioPage;
