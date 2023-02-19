import "./CardSet.css";
import Card from "../card/Card";
//import { CSSTransition } from "react-transition-group";
import reactLogo from "./react.png";
import reduxLogo from "./redux.png";
import JSLogo from "./javascript.png";

const cardObj = (name, img, descr) => ({name, img, descr});

const CardSet = ({lang}) => {
    const cards = [
        cardObj("JavaScript", JSLogo, "lorem"),
        cardObj("React", reactLogo, "ipsum"),
        cardObj("Redux", reduxLogo, "dolor")
    ]
    let headerText;
    if (lang==="by") {
        headerText = "Jernoseque";
    }
    else if (lang === "pl") {
        headerText = "Bóbr kurwa jaki bydło esteś";
    }
    else {
        headerText = "HEHE eee boiii";
    }

    return (
        <div className="card-set-block">
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
