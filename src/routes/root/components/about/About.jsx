import "./About.css";
import logo from "./react.png"
import { useMemo } from "react";

const About = ({lang}) => {
    
    const {title, text} = useMemo(() => (
        lang === "en" ? {
            title: "About me",
            text:"I am interested not only in web programming, but also in solving algorithmic problems, olympiad programming. For these purposes, I have learnt C++ and Python at a basic level. I really like mathematics, it helps in solving many problems that may come my way, I am always interested in exploring something new in it."
        } : lang === "pl" ? {
            title: "O mnie",
            text:"Interesuje mnie nie tylko web programowanie, ale także rozwiązywanie problemów algorytmicznych, programowanie olimpijskie. W tym celu opanowałem C++ i Python na poziomie podstawowym. Bardzo lubię matematykę, pomaga w rozwiązywaniu wielu problemów, które mogą pojawić się na mojej drodze, zawsze ciekawi mnie poznawać czegoś nowego w tej nauce."
        } : lang === "by" ? {
            title: "Пра мяне",
            text:"Я захапляюся не толькі вэб-праграмаваннем, але і рашэннем алгарытмічных задач, алімпіядных праграмаваннем. Для гэтых мэтаў я асвоіў C++ і Python на базавым узроўні. Мне вельмі падабаецца матэматыка, яна дапамагае ў вырашэнні многіх праблем, якія могуць сустрэцца на маім шляху, у ёй мне заўсёды цікава даследаваць нешта новае."

        } : {}
    ),[lang]);

    return (
        <div className="about-me-divider" id="about">
            <div className="container">
                  <h2 className="about-me-header">{title}</h2>
            </div>
            <div className="container container-flex">
                <div className="about-me-text">
                    {text}
                </div>
                <div className="about-me-img-divider">
                    <img src={logo} alt="oh shit" className="about-me-img"/>
                </div>
            </div>
        </div>
    )
}

export default About;
