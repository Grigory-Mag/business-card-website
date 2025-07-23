import React, {useEffect, useState, useRef, useCallback, CSSProperties} from 'react';
import AboutUsTextBlock from "../Elements/AboutUs";
import "../CSS/MainContainer.css"
import imageDev from "../Images/image-dev.png";

// Добавляем обработчик события 'scroll' к объекту window
window.addEventListener('scroll', () => {
    // Находим элемент с классом .parallax-img и указываем, что это должен быть HTMLElement.
    // querySelector может вернуть null, если элемент не найден, поэтому тип будет HTMLElement | null.
    const parallaxImg: HTMLElement | null = document.querySelector<HTMLElement>('.parallax-img');

    // Обязательно проверяем, был ли элемент найден, чтобы избежать ошибок.
    if (parallaxImg) {
        // Явно указываем тип number для константы скорости.
        const speed: number = 0.5;

        // window.pageYOffset возвращает числовое значение прокрутки по оси Y.
        const yPos: number = window.pageYOffset;

        // Применяем трансформацию. TypeScript убедился, что parallaxImg - это HTMLElement,
        // поэтому доступ к свойству .style безопасен.
        parallaxImg.style.transform = `translateY(${yPos * speed}px)`;
    }
});

const MainContainer: React.FC = () => {
    return (
        <div className={"MainContainer"}>
            <div className="BackgroundContainer">
                <img src={imageDev} alt={""} className={"parallax-img non-selectable"}/>
                <div className={"Content"}>
                    <p className={"Biba"}>
                        Чтобы добавить в элемент два фоновых изображения с разным наложением цветов, можно использовать свойство background-blend-mode. Оно определяет, как цвета верхнего слоя должны взаимодействовать с цветами нижнего слоя. 12
                        Пример с двумя фоновыми изображениями и цветом фона:
                        background-image: url(first-image.png), url(second-image.png);
                        background-color: orange;
                        background-blend-mode: screen, multiply;
                        В этом примере фон второго изображения (second-image.png) будет смешиваться с фоновым цветом в режиме умножения (multiply), а затем фон первого изображения (first-image.png) будет смешиваться со вторым изображением и фоновым цветом в режиме наложения экрана (screen). 1
                        Также можно указать в свойстве background несколько изображений, при этом они будут накладываться друг на друга, первый по порядку фон будет выводится спереди, а последний сзади.
                    </p>
                    <p className={"Biba"}>
                        Чтобы добавить в элемент два фоновых изображения с разным наложением цветов, можно использовать свойство background-blend-mode. Оно определяет, как цвета верхнего слоя должны взаимодействовать с цветами нижнего слоя. 12
                        Пример с двумя фоновыми изображениями и цветом фона:
                        background-image: url(first-image.png), url(second-image.png);
                        background-color: orange;
                        background-blend-mode: screen, multiply;
                        В этом примере фон второго изображения (second-image.png) будет смешиваться с фоновым цветом в режиме умножения (multiply), а затем фон первого изображения (first-image.png) будет смешиваться со вторым изображением и фоновым цветом в режиме наложения экрана (screen). 1
                        Также можно указать в свойстве background несколько изображений, при этом они будут накладываться друг на друга, первый по порядку фон будет выводится спереди, а последний сзади.
                    </p>
                </div>
            </div>


        </div>
    );
}
export default MainContainer;