import "./Nav.css";
import {useState} from "react";
const Nav = ({lang,setLang}) => {
    let link1,link2,link3;
    if (lang === "pl") {
        link1 = "bobrze1";
        link2 = "bobrze2";
        link3="bobrze3";
    }
    else if (lang === "by") {
        link1 = "bobryk1";
        link2 = "bobryk2";
        link3="bobryk3";
    }
    else {
        link1 = "Bobrik1";
        link2 = "bobrik2";
        link3="bobrik3";
    }
    const [visible,setVisible] = useState(false);
    const toggleVis = () => setVisible(s=>!s);
    return (
    <nav>
        <button className={"nav-mobile-menu-close " + (visible ? "nav-mobile-menu-close_visible" :  "" )} onClick={toggleVis}/>

        <button className={"nav-mobile-hamburger " + (visible ? "nav-mobile-hamburger_active" : "")} onClick={toggleVis}>
                    <div className="nav-mobile-hamburger-line"></div>
            <div className="nav-mobile-hamburger-line"></div>
            <div className="nav-mobile-hamburger-line"></div>
        </button>
        <div className={"nav-container container container-flex " + (visible ? "nav-mobile-visible" : "")} >
        <div className="nav-li container-flex-element"><a className="nav-link" href="#">{link1}</a></div>
        <div className="nav-li container-flex-element"><a className="nav-link" href="#">{link2}</a></div>
        <div className="nav-li container-flex-element"><a className="nav-link" href="#">{link3}</a></div>
        <div className="lang-choose container-flex-element">
            <div className="lang-choose-option">
                <input type="radio" 
                        name="lang" 
                        id="by" 
                        onClick={()=>setLang("by")}
                        className={"lang-choose-radio "
                            + (lang==="by" ? "lang-choose-radio_active" : null)}/>
                <label htmlFor="by" className={"lang-choose-label " + (lang==="by" ? "lang-choose-label_active" : "")}>
                    BY
                </label>
            </div>
             <div className="lang-choose-option">
                <input type="radio" 
                        name="lang" 
                        id="pl"
                        onClick={()=>setLang("pl")}
                        className={"lang-choose-radio "
                            + (lang==="pl" ? "lang-choose-radio_active" : null)}/>
                <label htmlFor="pl" className={"lang-choose-label " + (lang==="pl" ? "lang-choose-label_active" : "")}>
                    PL
                </label>
            </div>
            <div className="lang-choose-option">
                <input type="radio" 
                        name="lang" 
                        id="en" 
                        onClick={()=>setLang("en")}
                        className={"lang-choose-radio "
                            + (lang==="en" ? "lang-choose-radio_active" : null)}/>
                <label htmlFor="en" className={"lang-choose-label " + (lang==="en" ? "lang-choose-label_active" : "")}>
                    EN
                </label>
            </div>
        </div>
        </div>
    </nav>
    )
}

export default Nav;

