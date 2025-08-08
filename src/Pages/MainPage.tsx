import React, {useState} from 'react';
import Header from '../Elements/Header';
import BackgroundGraphics from "../Elements/BackgroundGraphics";
import Footer from "../Elements/Footer";
import Modal from "../Elements/Modal/Modal";
import EstimateForm from "../Elements/Modal/EstimateForm/EstimateForm";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PortfolioPage from "./PortfolioPage";
import HomePage from "./HomePage";

const MainPage: React.FC = () => {
    // Состояние для управления видимостью модального окна
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Функции для открытия и закрытия окна
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="app-container">
            <BrowserRouter>

                <BackgroundGraphics />

                <div className="content-wrapper">
                    {/* Передаем функцию открытия в Header */}
                    <Header onOpenModal={openModal} />
                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/portfolio" element={<PortfolioPage/>}/>
                        </Routes>
                    </main>
                    <Footer />
                </div>

                {/* Рендерим модальное окно, если isModalOpen === true */}
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <EstimateForm />
                </Modal>
            </BrowserRouter>
        </div>
    );
};

export default MainPage;