import React, {useRef, useState} from 'react';
import cls from "../../../1pages/Catalog/ui/Catalog.module.scss";
import {TManga} from "../../../5shered/types/MangaTypes";
import {useClickOutside} from "../../../5shered";
import { Input } from '../../../5shered/ui/input';

interface i {
    mangas: TManga[];
    onSortFn: (arr:TManga[]) => void;
    className: string;
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

type ValueInput ={
    types: string,
    genres: string,
    projectStatus?: string,
    ageRating: string,
    releaseYearFrom: string,
    releaseYearTo: string,
    ratingFrom: number,
    ratingTo: number,

};

const CatalogSelectorsInp = (props:i) => {
    const ref = useRef(null)
    const { mangas, onSortFn, className, setIsCollapsed } = props;
    const [ textInput, setTextInput ] = useState<ValueInput>(
        {
            types: "",
            genres: "",
            projectStatus: "",
            ageRating: "",
            releaseYearFrom: "",
            releaseYearTo: "",
            ratingFrom: 0,
            ratingTo: 0
        }
    );
    const [filteredMangas, setFilteredMangas] = useState<TManga[]>(mangas);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const { id } = e.currentTarget;
        setTextInput((prevTextInput) => ({
            ...prevTextInput,
            [id]: value,
        }));
    }

    const onSort = () => {
        const filteredResult = mangas.filter(manga =>{
            if ( manga.category === textInput.types ) {
                return true
            } else if (manga.genres?.includes(`${textInput.genres}`)) {
                return true
            }else if ( manga.status === textInput.projectStatus ) {
                return true
            }else if (manga.data + "" >= textInput.releaseYearFrom && manga.data + "" <= textInput.releaseYearTo) {
                return true
            }else if (manga && manga.rating && manga.rating.total && manga.rating.people) {
                const ratingValue = manga.rating.total / manga.rating.people;
                if (ratingValue <= textInput.ratingFrom && ratingValue >= textInput.ratingTo) {
                    return true;
                }
            }else {
                return false
            }
        })
        onSortFn(filteredResult)
    }

    useClickOutside(
        ref, () => {
            setIsCollapsed(false)
        }
    )

    return (
        <div className={className} ref={ref}>
        <div className={cls.selectorsInp}>
            <div className={cls.boxInp}>
                <div className={cls.boxTitle}>
                    <span className={cls.filter}>Фильтры</span>
                    <button
                        className={cls.resetBtn}
                        onClick={() => setTextInput({
                            types: "",
                            genres: "",
                            projectStatus: "",
                            ageRating: "",
                            releaseYearFrom: "",
                            releaseYearTo: "",
                            ratingFrom: 0,
                            ratingTo: 0
                        })}
                    >
                        <span className={cls.reset}>ОЧИСТИТЬ <span className={cls.X}>X</span></span>
                    </button>
                </div>
                <div className={cls.firstInputs}>
                    <Input value={textInput.types} className={cls.input} placeholder={"Типы"} id={"types"} onChange={handleInputChange}/>
                </div>
                <div className={cls.firstInputs}>
                    <Input value={textInput.genres} className={cls.input} placeholder={"Жанры"} id={"genres"} onChange={handleInputChange}/>
                </div>

                <div className={cls.boxInp}>
                    <div className={cls.secondInputs}>
                    <Input value={textInput.projectStatus} className={cls.input} placeholder={"Cтатус проекта"} id={"projectStatus"} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className={cls.boxInp}>
                    <h5>Год выпуска</h5>
                    <div className={cls.thirdInputs}>
                        <div className={cls.wrapperInpMini}>
                            <Input value={textInput.releaseYearFrom} className={cls.inputMini} placeholder={"От"} type={"number"} id={"releaseYearFrom"} onChange={handleInputChange}/>
                            <Input value={textInput.releaseYearTo} className={cls.inputMini} placeholder={"До"} type={"number"} id={"releaseYearTo"} onChange={handleInputChange}/>
                        </div>
                    </div>
                </div>
                <div className={cls.boxInp}>
                    <h5>Оценка</h5>
                    <div className={cls.forthInputs}>
                        <div className={cls.wrapperInpMini}>
                            <Input value={textInput.ratingFrom} className={cls.inputMini} placeholder={"От"} type={"number"} id={"ratingFrom"} onChange={handleInputChange}/>
                            <Input value={textInput.ratingTo} className={cls.inputMini} placeholder={"До"} type={"number"} id={"ratingTo"} onChange={handleInputChange}/>
                        </div>
                    </div>
                </div>
                <button className={cls.button} onClick={onSort}>Применить фильтры</button>
            </div>
        </div>
        </div>
    );
};

export default CatalogSelectorsInp;