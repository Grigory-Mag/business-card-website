import React, {CSSProperties} from 'react';
import "../CSS/Theme.css"
import "../CSS/Header.css"

import avito_logo from "../Images/avito-logo.png"

/*
12. Кетцаль (Quetzal)
Сущность: Красивая птица с ярким оперением и длинным хвостом, священная в культурах Мезоамерики, символ свободы и роскоши.

Связь с IT: Красота дизайна, яркий UI, свобода творчества, престиж, уникальность, вдохновение. Отлично для компаний, специализирующихся на премиальном дизайне и уникальном пользовательском опыте.

Ощущение: Красота, свобода, роскошь.

Примеры: Quetzal Design, Quetzal UX, Quetzal Art & Code.
 */

const b: CSSProperties = {
    display: "inline-list-item",
    // background: "red"
};

const textBlock_1 = "asdfa";
const textBlock_2 = "Контакты";


const Header: React.FC = () => {
    return (
        <header className="Header">
            <div className="Container">
                <div className={"content-grid"}>
                    {/*<h1 className={"HeaderTitle"}>Quetzal Design - Art & Code</h1>*/}
                    <h1 className={"HeaderTitle"}>Разработка приложений</h1>
                    <div className={"content-grid no-rows"}>
                        <a href={"https://t.me/chikivladboni"}>
                            <i className="fa-brands fa-telegram"/>
                        </a>

                        <a href={"https://www.avito.ru/4435505235"}>
                            <img className={"avito-logo"} src={avito_logo} alt={"Avito"}/>
                            {/*<i className="fa-brands fa-vk"></i>*/}
                        </a>

                        <a href={"mailto:dev@cumorka.ru?subject=Приветствие"}>
                            <i className="fa-solid fa-envelope"/>
                        </a>

                        <a href={""}>
                            <i className="fa-brands fa-square-whatsapp"></i>
                        </a>

                        <button className={"btn-primary"}>Оставить заявку</button>
                        <p>+7 (800) 555-35-35</p>
                    </div>

                </div>
                <hr/>

                {/*<nav className={"textContainer"}>*/}
                {/*    <a href={""} className={"textP"}>{textBlock_1}</a>*/}
                {/*    <a href={""} className={"textP"}>{textBlock_2}</a>*/}
                {/*</nav>*/}

                <div style={b}>
                    {/*<img src={logo} alt="" width="100" height="100"/>*/}
                </div>
            </div>

        </header>

    );
};

export default Header;