import React from 'react';
import cls from "./Statistics.module.scss";


type TDescriptions = {
    mangaType: string
    mangaData: string
}

const Statistics = (props: TDescriptions) => {
    const { mangaType, mangaData } = props

    return (
        <div className={cls.main}>
            <h5 className={cls.mangaType}>{mangaType} <span className={cls.mangaData}>{mangaData}</span></h5>
            <h1></h1>

        </div>
    );
};

export default Statistics;