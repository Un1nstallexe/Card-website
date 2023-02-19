import "./Footer.css"

const Footer = ({lang}) => {
    return (
    <footer>
        <div className="container">
            <div className="contacts-divider">
                <ul className="contacts">
                    <li  className="contact-li">
                        Email: <a  className="contact-link" href="mailto:kirr2156@gmail.com"> prikol@gmail.com</a> 
                    </li>
                    <li  className="contact-li">
                        phone: <a  className="contact-link" href="tel:+375297700936">+22888005553535</a>
                    </li>   
                </ul>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
