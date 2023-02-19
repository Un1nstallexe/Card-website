import './Header.css';
import Nav from "../nav/Nav";
import {useState, useEffect} from "react";


const Header = ({lang,setLang}) => {     
    const [title, setTitle] = useState("Pepepup");
    let titleStack;
    if (lang === "by") {
        titleStack = "BY-title";
    }
    else if (lang === "pl") {
        titleStack = "Pl-title";
        
    }
    else {
        titleStack = "EN-title";
        
    }
    /*useEffect(()=>{
        setTimeout(()=>{
            if (titleStack.length!==0) {

            }
            setTitle(t=>{
                title
            })
        },0.3);
    },[]);*/

    return (
        <header>
            
            <Nav lang={lang} setLang={setLang}/>
            <div className="container container-flex">
                    <div className="title-divider">
                        <div className="round"></div>
                        <h1 className="title">
                            {title}
                        </h1>
                        <h2 className="subtitle">
                        another placeholder
                        </h2>
                    </div>
                    <div className="photo-block">
                        <div className="photo-divider">
                            <img src="#" alt="me" className="photo"/>
                        </div>
                    </div>
            </div>            
        </header>
            
    )
}

export default Header;
