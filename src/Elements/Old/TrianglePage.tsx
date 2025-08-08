import React, {useEffect, useState, useRef, useCallback, CSSProperties} from 'react';
import Triangle from './TriangleElement';
import '../../CSS/Old/Triangle.css'; // Для базовых стилей контейнера

const CONTAINER_WIDTH = window.innerWidth - 20;
const CONTAINER_HEIGHT = window.innerHeight - 20;
const SPAWN_CENTER_X = CONTAINER_WIDTH / 2 + 50; // Центр появления по X
const SPAWN_CENTER_Y = CONTAINER_HEIGHT / 2 + 50; // Центр появления по Y

const MAX_TRIANGLES = 600; // Максимальное количество треугольников на экране
const TRIANGLE_LIFETIME = 7000; // Время жизни каждого треугольника в мс (7 секунд)
const SPAWN_INTERVAL = 10; // Интервал между попытками спавна новых треугольников в мс
const SPREAD_FACTOR = 0.8; // Как далеко треугольники могут отклоняться от центра

interface TriangleData {
    id: string;
    x: number;
    y: number;
    size: number;
    rotationSpeed: number;
    lifetime: number;
}

const TrianglePage: React.FC = () => {
    const [activeTriangles, setActiveTriangles] = useState<TriangleData[]>([]);
    const nextTriangleId = useRef(0);
    const spawnTimerId = useRef<number | null>(null);

    // Колбэк для удаления треугольника, когда его время жизни истекло
    const handleTriangleDisappear = useCallback((id: string) => {
        setActiveTriangles((prevTriangles) => prevTriangles.filter((t) => t.id !== id));
    }, []);

    // Логика спавна треугольников
    useEffect(() => {
        const spawnTriangle = () => {
            // Чтобы не перегружать систему, ограничиваем количество
            if (activeTriangles.length >= MAX_TRIANGLES) {
                return;
            }

            // Генерируем треугольники вокруг центральной точки с постепенным "разбросом"
            const currentId = `tri-${nextTriangleId.current++}`;

            // Чтобы треугольники "распространялись" от центра
            // Мы можем использовать ID как фактор для увеличения разброса
            const maxSpreadDistance = Math.min(nextTriangleId.current * 10, Math.max(CONTAINER_WIDTH, CONTAINER_HEIGHT) * SPREAD_FACTOR);

            const offsetX = (Math.random() - 0.5) * 2 * maxSpreadDistance;
            const offsetY = (Math.random() - 0.5) * 2 * maxSpreadDistance;

            const newTriangle: TriangleData = {
                id: currentId,
                x: SPAWN_CENTER_X + offsetX,
                y: SPAWN_CENTER_Y + offsetY,
                size: 10 + Math.random() * 20, // Размер от 30 до 50px
                rotationSpeed: (Math.random() - 0.5) * 0.8 + 0.1, // От 0.1 до 0.5 или -0.1 до -0.5
                lifetime: TRIANGLE_LIFETIME,
            };

            // Проверяем, чтобы не выходили за границы контейнера
            if (newTriangle.x > 0 && newTriangle.x < CONTAINER_WIDTH &&
                newTriangle.y > 0 && newTriangle.y < CONTAINER_HEIGHT) {
                setActiveTriangles((prevTriangles) => [...prevTriangles, newTriangle]);
            }
        };

        // Запускаем таймер для спавна
        spawnTimerId.current = window.setInterval(spawnTriangle, SPAWN_INTERVAL);

        // Очистка при размонтировании компонента
        return () => {
            if (spawnTimerId.current) {
                clearInterval(spawnTimerId.current);
            }
        };
    }, [activeTriangles.length, handleTriangleDisappear]); // Добавляем activeTriangles.length в зависимости

    return (
        <div className="BackgroundTriangle">
            {activeTriangles.map((triangle) => (
                <Triangle
                    key={triangle.id}
                    id={triangle.id}
                    initialX={triangle.x}
                    initialY={triangle.y}
                    size={triangle.size}
                    rotationSpeed={triangle.rotationSpeed}
                    lifetime={triangle.lifetime}
                    onDisappear={handleTriangleDisappear}
                />
            ))}
        </div>
    );
};

export default TrianglePage;