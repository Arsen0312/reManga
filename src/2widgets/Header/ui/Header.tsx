import React, {useContext, useEffect, useState} from 'react';
import { FaUser } from "react-icons/fa6";
import cls from "./Header.module.scss"
import {Link, useLocation} from "react-router-dom";
import {AppContext} from "../../../0app/providers/StoreProvider/Provider";
import {classNames} from "../../../5shered/styleFunction/classNameFn";

type THeadersProps = {
    setReg?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = (props: THeadersProps) => {
    const { setReg } = props
    const { user } = useContext(AppContext)
    const location = useLocation();
    const [transparentMode, setTransparentMode] = useState<boolean>(false)

        useEffect(() => {

            const toggleBackgroundColor = () => {
                if (window.scrollY >= 30) {
                    setTransparentMode(false)
                } else {
                    setTransparentMode(true)
                }
            }

            if (location.pathname.split('/')[1] === "manga") {
                document.addEventListener("scroll", toggleBackgroundColor)
            } else {
                document.removeEventListener("scroll", toggleBackgroundColor)
                setTransparentMode(false)
                console.log('none')
            }

        }, [location.pathname]);

    console.log(location.pathname)




    return (
        <header className={classNames(cls.header, {[cls.transparent]: transparentMode}, [])}>
            <nav className={cls.nav}>
                <div className={cls.One}>
                    <Link to={'/'}>
                        <img
                            className={cls.logo}
                            src={"/assets/logo.jpeg"}
                            alt={""}
                        />
                    </Link>
                    <Link to={'/Catalog'} className={cls.catalog}>
                        <div>Каталог</div>
                    </Link>
                    <Link to={'/mangaTops'} className={cls.tops}>
                        <div>Топы</div>
                    </Link>
                    <Link to={''} className={cls.select}>
                        <div>Поиск</div>
                    </Link>
                </div>
                <div></div>
                <div className={cls.tree}>
                    <Link to={""} className={cls.bookmarks}>
                        Закладки
                    </Link>
                    <Link to={'/manga/push'} className={cls.push}>
                        Уведомление
                    </Link>

                    {
                        user
                            ?   <button className={cls.userLogo}>
                                        <FaUser color={"white"}/>
                                </button>
                            : <button onClick={() =>
                                      setReg?.(prev => !prev)}
                                      className={cls.login}>
                            Войти
                              </button>
                    }

                </div>
            </nav>
        </header>
    );
};

export default Header;