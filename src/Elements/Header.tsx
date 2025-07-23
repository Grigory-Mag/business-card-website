import React, {CSSProperties} from 'react';
import "../CSS/Theme.css"
import "../CSS/Header.css"

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
const textBlock_2 = "asdfa2";


const Header: React.FC = () => {
    return (
        <header className="Header">
            <div className="Container">
                <div>
                    <h1 className={"Pupa"}>Quetzal Design - Art & Code</h1>
                </div>

                <hr/>

                <nav className={"textContainer"}>
                    <a href={""} className={"textP"}>{textBlock_1}</a>
                    <a href={""} className={"textP"}>{textBlock_2}</a>
                </nav>

                <div style={b}>
                    {/*<img src={logo} alt="" width="100" height="100"/>*/}
                </div>
            </div>

        </header>

    );
};

export default Header;