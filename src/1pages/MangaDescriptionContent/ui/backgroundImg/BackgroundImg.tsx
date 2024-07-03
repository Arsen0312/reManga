import React, { useState, useEffect } from 'react';
import cls from "./BackgroundImg.module.scss";

type TBackgroundImgProps = {
    src: string;
};

const BackgroundImg = (props: TBackgroundImgProps) => {
    const { src } = props;
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (src) {
            const img = new Image();
            img.onload = () => {
                setLoaded(true);
            };
            img.src = src;
        }
    }, [src]);

    return (
        <div className={cls.main}>
            <img
                alt={"Ошибка: отсутствует src для картинки"}
                src={src}
                className={`${cls.img} ${loaded ? cls.imgVisible : ''}`}
                style={{ opacity: loaded ? 1 : 0 }}
            />
            <div className={cls.overlay}></div>
            <div className={cls.linearGradient}></div>
        </div>
    );
};

export default BackgroundImg;
