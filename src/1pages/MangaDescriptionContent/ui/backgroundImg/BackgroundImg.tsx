import React from 'react';
import cls from "./BackgroundImg.module.scss"

type TBackgroundImgProps = {
    src: string
}

const BackgroundImg = (props: TBackgroundImgProps) => {
    const { src } = props

    return (
        <div className={cls.main}>
            <img
                className={cls.img}
                src={src} alt={"Ошибка отсутствует src для картинки"}
            />
        </div>
    );
};

export default BackgroundImg;