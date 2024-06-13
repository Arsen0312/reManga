import React, {useContext, useEffect} from 'react';
import {AppContext} from "../../../0app/providers/StoreProvider/Provider";
import {useParams} from "react-router-dom";
import cls from "./MangaDescriptionContent.module.scss"
import BackgroundImg from "./backgroundImg/BackgroundImg";
import CoverManga from "./CoverManga/CoverManga";
import Statistics from "./Statistics/Statistics";

type TUseParams = {
    itemId: string
    mode: string
    scroll: string
}

const MangaDescriptionContent = () => {
    const {oneManga, getOneManga, resetOneManga} = useContext(AppContext)
    const { itemId, mode, scroll } = useParams<TUseParams>()


    useEffect(() => {
        const numberValueScroll = Number(scroll)

        if (itemId) {
            getOneManga?.(itemId)
        }

        if (numberValueScroll) {
            window.scrollTo(numberValueScroll, 0);
        } else if (numberValueScroll === 0 ) {

        } else {
            console.error("Что то пошло не так в Scroll'е")
        }

        return () => {
            resetOneManga?.()
        }

    }, []);

    const { photo } = oneManga
    
    return (
        <div className={cls.main}>
            <BackgroundImg src={photo+''}/>
            <div className={cls.allInformation}>
                <CoverManga photo={photo+''}/>
                <div className={cls.descriptions}>
                    <Statistics mangaType={oneManga.category+""} mangaData={oneManga.data+''}/>
                </div>
            </div>
        </div>
    )
};

export default MangaDescriptionContent;