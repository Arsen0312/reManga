import { useEffect, useRef } from 'react';

export const ComponentA = ({ text }: { text: string }) => {
        const ref = useRef(null)
        // const element = document.querySelector('#lol') as HTMLDivElement;

        /* Каждый раз, когда значение текста меняется, мы записываем ширину контейнера в консоль */
        // if (element) {
        //     console.log(
        //         `текущая ширина контейнера: ${element.offsetWidth || 'неизвестно'}`
        //     );
        // }

        if (ref && ref.current && ref.current) {
            console.log(
                `текущая ширина контейнера: ${ref.current || 'неизвестно'}`
            )
        }

    /* Каждый раз, когда пользователь прокручивает страницу, мы записываем ширину контейнера в консоль */
    window.addEventListener('scroll', function () {
        const element = document.querySelector('#lol') as HTMLDivElement;

        console.log(
            `текущая ширина контейнера: ${element.offsetWidth || 'неизвестно'}`
        );
    });

    useEffect(() => {
        window.addEventListener('scroll', function () {
            const element = document.querySelector('#lol') as HTMLDivElement;

            console.log(
                `текущая ширина контейнера: ${element.offsetWidth || 'неизвестно'}`
            );
        });
    }, []);

    return <div ref={ref}>{text}</div>;
};