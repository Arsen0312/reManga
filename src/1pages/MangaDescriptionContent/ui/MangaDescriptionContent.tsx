import React, {useContext, useEffect, useRef} from 'react';
import {AppContext} from "../../../0app/providers/StoreProvider/Provider";
import {useParams} from "react-router-dom";
import cls from "./MangaDescriptionContent.module.scss"
import BackgroundImg from "./backgroundImg/BackgroundImg";
import CoverManga from "./CoverManga/CoverManga";
import Statistics from "./Statistics/ui/Statistics";

type TUseParams = {
    itemId: string
    mode: string
    scroll: string
}

const MangaDescriptionContent = () => {
    const {oneManga, getOneManga, resetOneManga, loading} = useContext(AppContext)
    const {itemId, mode, scroll} = useParams<TUseParams>()
    const ref = useRef(null)

    useEffect(() => {
        const numberValueScroll = Number(scroll)

        if (itemId) {
            getOneManga?.(itemId)
        }

        if (numberValueScroll) {
            window.scrollTo(numberValueScroll, 0);
        } else if (numberValueScroll === 0) {

        } else {
            console.error("Что то пошло не так в Scroll'е")
        }

        return () => {
            resetOneManga?.()
        }

    }, []);

    return (
        <div className={cls.main} ref={ref}>
            <BackgroundImg src={oneManga.photo + ''}/>
            <div className={cls.allInformation}>
                <CoverManga photo={oneManga.photo + ''}/>
                <div className={cls.descriptions}>
                    <Statistics
                        Type={oneManga.category + ""}
                        Data={oneManga.data + ''}
                        Name={oneManga.name + ""}
                        AllChapters={oneManga.chapters + ""}
                        Like={oneManga.like + ""}
                        Tags={oneManga.tags?.length + ""}
                        Views={oneManga.views + ""}
                        Status={oneManga.status + ""}
                        rating={oneManga.rating + ""}
                    />
                </div>
            </div>
        </div>

    )
};

export default MangaDescriptionContent;