import "./CardSet.css";
import Card from "../card/Card";
//import { CSSTransition } from "react-transition-group";
import reactLogo from "./react.png";
import reduxLogo from "./redux.png";
import JSLogo from "./javascript.png";
import { useMemo } from "react";

const cardObj = (name, img, descr) => ({name, img, descr});

const CardSet = ({lang}) => { 
    
    const {headerText, jsText, reactText, reduxText} = useMemo(() => (
        lang === "en" ? {
            headerText:"My skills",
            jsText:"Programming language used in every web page",
            reactText:"Powerful framework for making complex web apps",
            reduxText:"Library for making scalable and easy-to-test applications"
        } : lang === "pl" ? {
            headerText:"Moje umiejętności",
            jsText:"Język programowania używany we wszystkich stronach internetowych",
            reactText:"Mocny framework dla stworzenia dużych web applikacji",
            reduxText:"Biblioteka dla stworzenia skalowalnych, prostych do testowania aplikacji" 
        } : lang === "by" ? {
            headerText:"Мае навыкі",
            jsText:"Язык праграмавання, выкарыстываны ў кожнай вэб-старонцы",
            reactText:"Моцны фрэймворк для стварэння вялікіх вэб-аплікацый",
            reduxText:"Бібліатэка для стварэння простых у маштабаваннi і тэставанні аплікацый"
        } : {}
    ),[lang]);

    const cards = [
        cardObj("JavaScript", JSLogo, jsText),
        cardObj("React", reactLogo, reactText),
        cardObj("Redux", reduxLogo, reduxText)
    ]

    return (
        <div className="card-set-block" id="card-set-block" >
            <div className="container">
                <h2 className="card-set-header">
                    {headerText}        
                </h2>
                
            </div>
            <div className="container container-flex">
                {cards.map((item,i)=><div key={i} className="container-flex-element"><Card data={item} lang={lang}/> </div>)}
            </div>
            
        </div>
         
    )
}

export default CardSet;
