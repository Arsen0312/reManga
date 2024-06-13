import {useLocation} from "react-router-dom";
import {useEffect} from "react";

// этот хук нужен для сохранения scroll'а при
// переходе на другие страницы и переходе на прежнюю страницу

export const useSaveScroll = () => {
    const { pathname } = useLocation()
    // Здесь ищем значения scroll'а
    const scroll = pathname.split("/")[pathname.split("/").length - 1]
    const numberValueScroll = Number(scroll)

    let indexEnd = 0
    const URL = pathname.split('')

    for(let i = URL.length; i >= 0; i--) {
        if (URL[i] == '/') {
            indexEnd = i
            break;
        }
    }

    // здесь сделал новый URL адрес для того что бы его вставить его в последний момент в
    // адресную строку что при переходе обратно браузер user'а вёл адрес с указанием scroll'а
    const newURL = pathname.slice(0, indexEnd)

    useEffect(() => {
        // здесь мы scroll'им на место где user остановился
        if (numberValueScroll) window.scrollTo(numberValueScroll, 0)

        return () => {
            // этот код сработает когда user перейдёт в другую страницу грубо говоря
            // некий unmounting из мира функционального react'а
            window.history.pushState({}, '', `${newURL}/${window.scrollX}`)
        }
    }, []);
}
