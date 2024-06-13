import React, { useContext } from 'react';
import {SubmitHandler, useForm} from "react-hook-form"

import cls from "./Login.module.scss";
import {AppContext} from "../../../0app/providers/StoreProvider/Provider";

type TLoginProps = {
    setHandleModeAuth: React.Dispatch<React.SetStateAction<boolean>>;
    setReg: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ILogin {
    email: string
    password: string
}

const Login = React.memo((props: TLoginProps) => {
    const { setHandleModeAuth, setReg } = props
    const { login } = useContext(AppContext)
    const { register, handleSubmit, formState: {errors} } = useForm<ILogin>({defaultValues:{email:"", password:""}});

    const onSubmit:SubmitHandler<ILogin> = data => {
        console.log(data, errors)
        login?.(data.email, data.password, toggleReg)
    }

    const toggleReg = () => {
        setReg(prev => !prev)
    }

    const HandleModeAuth = () => {
        setHandleModeAuth(prev => !prev)
    }

    return (
            <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
                <h5 className={cls.title}>Войти в аккаунт</h5>
                <div className={cls.boxInp}>
                    <input
                        className={errors?.email?.message == "required" && cls.noneValue || ""}
                        {...register("email", { required: 'required' , minLength:{value:12, message:"minLength"}})}
                        type="email"
                        placeholder={errors?.email?.message == "required" && "Поле Логин/почта обязательное" || "*Логин/почта"}
                        id={"username"}
                    />
                    <input
                        className={errors?.password?.message == "required" && cls.noneValue || ""}
                        {...register("password", { required: "required" ,minLength:{value:12, message:"minLength"}})}
                        type="password"
                        placeholder={errors?.password?.message == "required" && "Поле *Пароль обязательное" || "*Пароль"}
                    />
                </div>
                <div className={cls.forGotPassword}>
                    {/*<span>Забыли пароль??</span>*/}
                </div>
                <div className={cls.boxInp}>
                    <button className={cls.button} onClick={handleSubmit(onSubmit)}>Войти</button>
                </div>
                <div className={cls.boxZaRegistr}>
                    <span>Нет учетной записи??</span>
                    <span className={cls.registr} onClick={HandleModeAuth}>
                        Зарегистрироваться
                    </span>
                </div>
            </form>
    );
})

export default Login;
