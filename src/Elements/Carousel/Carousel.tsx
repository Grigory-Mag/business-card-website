import React, { useState } from 'react';
import styles from '../../CSS/Carousel/Carousel.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Icon from '../Icon';

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className={styles.carouselContainer}>
            <button onClick={goToPrevious} className={`${styles.navButton} ${styles.left}`}>
                <Icon icon={FaChevronLeft} />
            </button>
            <div className={styles.imageWrapper}>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className={styles.image} />
            </div>
            <button onClick={goToNext} className={`${styles.navButton} ${styles.right}`}>
                <Icon icon={FaChevronRight} />
            </button>
            <div className={styles.dotsContainer}>
                {images.map((_, slideIndex) => (
                    <div
                        key={slideIndex}
                        className={`${styles.dot} ${currentIndex === slideIndex ? styles.activeDot : ''}`}
                        onClick={() => setCurrentIndex(slideIndex)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;