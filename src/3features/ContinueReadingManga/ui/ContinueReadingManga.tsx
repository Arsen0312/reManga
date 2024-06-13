import React from 'react';
import cls from "./ContinueReadingManga.module.scss"
import {Link} from "react-router-dom";
import Button from "../../../5shered/ui/button";
import {PiBookmarkSimpleLight} from "react-icons/pi";
import {RiArrowDropDownLine} from "react-icons/ri";
import {classNames} from "../../../5shered/styleFunction/classNameFn";

type TProps = {
    chaptersLists?: {translator:string,img:string[],like:number,data:string}[] | []
    lastChapter?: number | string
    itemId: string
    toggleSwitch: boolean
}

const ContinueReadingManga = (props: TProps) => {
    const { chaptersLists, lastChapter, itemId, toggleSwitch  } = props

    return (
        <div className={classNames(cls.boxForButton, {[cls.appearances]:toggleSwitch})}>
            {chaptersLists && chaptersLists.length ? (
                <Link
                    to={`/mangaContent/${itemId}/${lastChapter}`}
                    className={cls.buttonA}
                >
                    {lastChapter ? `Продолжить с ${lastChapter}-главы` : "Читать"}
                </Link>
            ) : (
                <button
                    className={cls.buttonNoneChapter}
                >
                    Нет глав
                </button>
            )}
            <Button
                className={cls.buttonZakladkaDesktop}
                content={"Добавить в закладки"}
            />
            <Button
                className={cls.buttonZakladkaMobile}
                content={<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <PiBookmarkSimpleLight size={24} fontWeight={700}/><RiArrowDropDownLine size={18}/></div>}
            />
        </div>
    );
};

export default ContinueReadingManga;