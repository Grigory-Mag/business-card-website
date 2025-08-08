import React from 'react';
import '../../CSS/Old/InfoCard.css'; // Импортируем наши стили

interface InfoCardProps {
    title: string;
    children: React.ReactNode; // Для передачи параграфов или другого контента
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children }) => {
    return (
        <div className="info-card">
            <h2 className={"non-selectable"}>{title}</h2>
            {children}
        </div>
    );
};

export default InfoCard;