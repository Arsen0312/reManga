import React from 'react';
import cls from "./CoverManga.module.scss"

type TCoverManga = {
    photo: string
}
const CoverManga = (props: TCoverManga) => {
    const { photo } = props


    return (
        <div className={cls.main}>
            <div className={cls.wrapperCover}>
                <img
                    className={cls.cover}
                    src={photo} alt={""}/>
            </div>
        </div>
    );
};

export default CoverManga;