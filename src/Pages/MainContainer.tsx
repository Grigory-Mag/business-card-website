import React, {useEffect, useState, useRef, useCallback, CSSProperties} from 'react';
import AboutUsTextBlock from "../Elements/AboutUs";
import "../CSS/MainContainer.css"
import imageDev from "../Images/image-dev.png";
import imageDevStages from "../Images/dev-stages.png";
import InfoCard from "../Elements/InfoCard";
import mobile from "../Images/mobile_app.png"

// Добавляем обработчик события 'scroll' к объекту window
window.addEventListener('scroll', () => {
    // Находим элемент с классом .parallax-img и указываем, что это должен быть HTMLElement.
    // querySelector может вернуть null, если элемент не найден, поэтому тип будет HTMLElement | null.
    const parallaxImg = document.querySelectorAll<HTMLElement>('.parallax-img');

    // Обязательно проверяем, был ли элемент найден, чтобы избежать ошибок.
    if (parallaxImg) {
        // Явно указываем тип number для константы скорости.
        const speed: number = 0.5;

        // window.pageYOffset возвращает числовое значение прокрутки по оси Y.
        const yPos: number = window.pageYOffset;

        // Применяем трансформацию. TypeScript убедился, что parallaxImg - это HTMLElement,
        // поэтому доступ к свойству .style безопасен.
        parallaxImg.forEach((el) : void => {
            if (el) {
                el.style.transform = `translateY(${yPos * speed}px)`;
            }
        })

    }
});

const MainContainer: React.FC = () => {
    return (
        <div className={"MainContainer"}>

                <div className={"Content"}>
                    <div>
                        <InfoCard title={"Чем мы занимаемся"}>
                            <p>Пoэтaпно разрабатываем мобильныe приложeния любой cложноcти.
                                Наша команда разработала мобильные приложения для агентства недвижимости, калькулятор расходов автомобиля, и многое другое!</p>
                            {/*<img className={"mobile_app"} src={mobile} alt={""}/>*/}
                            <div className={"Content-inner"}>
                                <button className={"btn-primary"}>Подробнее о наших продуктах</button>
                            </div>
                        </InfoCard>
                        <img src={imageDev} alt={""} className={"parallax-img non-selectable"}/>
                    </div>


                    <div>
                        <div className={"Content-inner"}>
                            <InfoCard title={"Бесплатная консультация"}>
                                <div className={"Content-inner"}>
                                    <i className="fa-solid fa-comments"/>
                                </div>
                            </InfoCard>

                            <InfoCard title={"Обширный стек технологий"}>
                                <div className={"Content-inner"}>
                                    <i className="fa-solid fa-layer-group"/>
                                </div>
                            </InfoCard>

                            <InfoCard title={"По 3 проекта каждый месяц"}>
                                <div className={"Content-inner"}>
                                    <i className="fa-solid fa-user-group"/>
                                </div>
                            </InfoCard>

                            <InfoCard title={"Отклик без выходных"}>
                                <div className={"Content-inner"}>
                                    <i className="fa-solid fa-calendar"/>
                                </div>
                            </InfoCard>

                        </div>
                    </div>

                    {/*<img src={imageDev} alt={""} className={"parallax-img non-selectable"}/>*/}
                    {/*<img src={imageDev} alt={""} className={"parallax-img non-selectable"}/>*/}
                    <InfoCard title="Используемый стек технологий">
                        <ul>
                            <li>Figma для создания UX/UI дизайна</li>
                            <li>Kotlin совместно с Jetpack Compose</li>
                            <li>для написания мобильных приложений</li>
                            <li>Надёжно храним данные в СУБД PostgreSQL</li>
                            <li>Обрабатываем запросы клиентов через FastAPI</li>
                            <li>Помогаем защитить сервер от DDoS атак</li>
                        </ul>
                        {/*<img src="..." className="card-image non-selectable" alt="" />*/}
                    </InfoCard>
                    <InfoCard title="Этапы разработки">
                        <ul>
                            <li>Обсуждение и составление технического задания</li>
                            <li>Проектирование и согласование макетов</li>
                            <li>Разработка мобильного приложение</li>
                            <li>Тестирование и внедрение приложения</li>
                        </ul>
                        {/*<img src="..." className="card-image non-selectable" alt="" />*/}
                    </InfoCard>

                    <img src={imageDevStages} alt={""} className={"parallax-img non-selectable"}/>
            </div>


        </div>
    );
}
export default MainContainer;