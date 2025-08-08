import React, {useEffect, useState, useRef, useCallback, CSSProperties} from 'react';
import "../../CSS/Old/AboutUsBlock.css";

interface AboutUsTextBlockProps {
    textBlock_1 : string;
    textBlock_2 : string;
}

const AboutUsTextBlock:React.FC<AboutUsTextBlockProps> = ({ textBlock_1, textBlock_2 }) => {

    return (
        <div className={"textContainer"}>
            <h2 className={"textP"}>{textBlock_1}</h2>
            <h2 className={"textP"}>{textBlock_2}</h2>
        </div>
    )
}
export default AboutUsTextBlock;