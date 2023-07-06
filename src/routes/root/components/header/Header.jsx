import './Header.css';
import Nav from "../nav/Nav";
import {useState, useEffect, useMemo} from "react";
import KirillPhoto from "./../../imgs/Kirill photo.jfif";

const Header = ({lang,setLang}) => {     
    const {title, subtitle} = useMemo(() => (
        lang === "en" ? {
            title: "Kiryl Paulouski",
            subtitle: "Web programmer"
        } : lang === "pl" ? {
            title: "Cyryl Pawłowski",
            subtitle: "web programista"
        } : lang === "by" ? {
            title: "Кірыл Паўлоўскі",
            subtitle: "Вэб-праграміст"

        } : {}
    ),[lang]);

    

    return (
        <header id="header">
            
            <Nav lang={lang} setLang={setLang}/>
            <div className="container container-flex">
                    <div className="title-divider">
                        <div className="round"></div>
                        <h1 className="title">
                            {title}
                        </h1>
                        <h2 className="subtitle">
                        {subtitle}
                        </h2>
                    </div>
                    <div className="photo-block">
                        <div className="photo-divider">
                            <img src={KirillPhoto} alt="me" className="photo"/>
                        </div>
                    </div>
            </div>            
        </header>
            
    )
}

export default Header;
