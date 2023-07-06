import "./Footer.css"
import { useMemo } from "react";


const Footer = ({lang}) => {

    const {phone} = useMemo(() => (
        lang === 'by' ? {
            phone:"нумар тэлефону"
        } : lang === "pl" ? {
            phone:"numer telefonu"
        } : lang === "en" ? {
            phone:"phone number"
        } : {}
    ), [lang]);
    return (
    <footer id="footer">
        <div className="container">
            <div className="contacts-divider">
                <ul className="contacts">
                    <li  className="contact-li">
                        Email: <a  className="contact-link" href="mailto:kirr2156@gmail.com"> kirr2156@gmail.com</a> 
                    </li>
                    <li  className="contact-li">
                        {phone}: <a  className="contact-link" href="tel:+375297700936">+375 (29) 770 09 36</a>
                    </li>   
                </ul>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
