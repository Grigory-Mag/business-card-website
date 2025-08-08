import React, {useState} from 'react';
import Hero from '../Elements/Hero';
import Features from '../Elements/Features';
import Modal from "../Elements/Modal/Modal";
import EstimateForm from "../Elements/Modal/EstimateForm/EstimateForm";

const HomePage: React.FC = () => {
    // Состояние для управления видимостью модального окна
    const [isModalOpen, setIsModalOpen] = useState(false);

// Функции для открытия и закрытия окна
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Hero onOpenModal={openModal}/>
            <Features />
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <EstimateForm />
            </Modal>
        </>
    );
};

export default HomePage;