import React, { useRef, useEffect, useState, CSSProperties } from 'react';

interface TriangleProps {
    initialX: number;
    initialY: number;
    size: number; // Размер катетов прямоугольного треугольника
    rotationSpeed: number; // Скорость вращения
    lifetime: number; // Время жизни треугольника в мс
    onDisappear: (id: string) => void; // Колбэк для удаления треугольника из родителя
    id: string; // Уникальный ID треугольника
}

const Triangle: React.FC<TriangleProps> = ({
                                               initialX,
                                               initialY,
                                               size,
                                               rotationSpeed,
                                               lifetime,
                                               onDisappear,
                                               id,
                                           }) => {
    const [rotation, setRotation] = useState(Math.random() * 360);
    const [lightIntensity, setLightIntensity] = useState(0);
    const [opacity, setOpacity] = useState(0); // Начинаем с 0 для появления
    const [scale, setScale] = useState(0.2); // Начинаем с небольшого размера для появления

    const rotationRef = useRef(rotation);
    const animationFrameId = useRef<number | null>(null);
    const startTimeRef = useRef(performance.now());
    const fadeInDuration = 1000; // 1 секунда для появления
    const fadeOutDuration = 1500; // 1.5 секунды для исчезновения

    useEffect(() => {
        const animate = (currentTime: DOMHighResTimeStamp) => {
            const elapsedTime = currentTime - startTimeRef.current;

            // Фаза появления
            if (elapsedTime < fadeInDuration) {
                setOpacity(elapsedTime / fadeInDuration);
                setScale(0.2 + (elapsedTime / fadeInDuration) * 0.8); // Увеличиваем до 1
            }
            // Фаза существования
            else if (elapsedTime < lifetime - fadeOutDuration) {
                setOpacity(1);
                setScale(1);
            }
            // Фаза исчезновения
            else if (elapsedTime < lifetime) {
                const fadeOutProgress = (elapsedTime - (lifetime - fadeOutDuration)) / fadeOutDuration;
                setOpacity(1 - fadeOutProgress);
                setScale(1 - fadeOutProgress * 0.2); // Немного уменьшаем при исчезновении
            }
            // Треугольник исчез
            else {
                if (animationFrameId.current) {
                    cancelAnimationFrame(animationFrameId.current);
                }
                onDisappear(id); // Сообщаем родителю об удалении
                return;
            }

            // Вращение
            rotationRef.current += rotationSpeed;
            if (rotationRef.current >= 360) {
                rotationRef.current -= 360;
            }
            setRotation(rotationRef.current);

            // Имитация освещения
            const angleInRadians = rotationRef.current * (Math.PI / 180);
            const intensity = Math.abs(Math.sin(angleInRadians)); // sin для имитации света на гранях
            setLightIntensity(intensity);

            animationFrameId.current = requestAnimationFrame(animate);
        };

        animationFrameId.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [id, lifetime, onDisappear, rotationSpeed]);

    const triangleStyle: CSSProperties = {
        position: 'fixed',
        left: `${initialX}px`,
        top: `${initialY}px`,
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
        transformOrigin: 'center center',
        opacity: opacity,
        zIndex: -1,
        // Градиент для имитации освещения
        background: `linear-gradient(to bottom right, 
      hsl(20, 80%, ${30 + lightIntensity * 20}%), 
      hsl(6, 90%, ${60 + lightIntensity * 20}%)
    )`,
        // Прямоугольный треугольник (верхний левый угол)
        clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
        // Можно использовать и другие формы:
        // 'polygon(0% 0%, 100% 0%, 100% 100%)' // Нижний правый
        // 'polygon(0% 0%, 100% 100%, 0% 100%)' // Нижний левый
        // 'polygon(100% 0%, 100% 100%, 0% 100%)' // Верхний правый
    };

    return <div style={triangleStyle}></div>;
};

export default Triangle;