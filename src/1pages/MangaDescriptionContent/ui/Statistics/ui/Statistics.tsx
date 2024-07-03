import React from 'react';
import cls from "./Statistics.module.scss";
import {numberConverter} from "../../../../../5shered";
import StarIcons from "./icons/StarIcons";


type TDescriptions = {
    Type: string
    Data: string
    Name: string
    AllChapters: string
    Like: string
    Tags: string
    Views: string
    Status: string
    rating: string
}

const Statistics = (props: TDescriptions) => {
    const {Type, Data, Name, AllChapters, Like, Tags, Views, Status, rating} = props

    return (
        <div className={cls.main}>
            <h5 className={cls.mangaType}>{Type} <span className={cls.mangaData}>{Data}</span></h5>
            <h1>{Name}</h1>
            <div className={cls.statisticsDate}>
                <div className={cls.date}>
                    <div>Главы</div>
                    <div>{AllChapters}</div>
                </div>
                <div className={cls.date}>
                    <div>Лайков</div>
                    <div>{numberConverter(+Like)}</div>
                </div>
                <div className={cls.date}>
                    <div>В закладках</div>
                    <div>{Tags}</div>
                </div>
                <div className={cls.date}>
                    <div>Просмотров</div>
                    <div>{numberConverter(+Views)}</div>
                </div>
                <div className={cls.date}>
                    <div>Выпуск</div>
                    <div>{Status}</div>
                </div>
                <div className={cls.date}>
                    <div>Перевод</div>
                    <div>Продолжается</div>
                </div>
                <div className={cls.date}>
                    <div>PG</div>
                    <div>0+</div>
                </div>
            </div>
            <div className={cls.rating}>
                <div className={cls.wrapperGrades}>
                    <StarIcons size={22} color={"gold"}/>
                    <span className={cls.ratingValue}>{rating}</span>
                </div>
                <button className={cls.button}>
                    Оценить
                </button>
            </div>

        </div>
    );
};

export default Statistics;