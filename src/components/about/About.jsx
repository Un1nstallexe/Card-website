import "./About.css";
import shit from "./logo512.png"

const About = () => {
        
    return (
        <div className="about-me-divider">
            <div className="container">
                  <h2 className="about-me-header"> Zagolovok</h2>
            </div>
            <div className="container container-flex">
                <div className="about-me-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At cupiditate et ullam, necessitatibus reiciendis quidem explicabo perferendis reprehenderit eveniet nisi incidunt dicta modi repellendus dolor quibusdam officia debitis soluta quia.
                </div>
                <div className="about-me-img-divider">
                    <img src={shit} alt="oh shit" className="about-me-img"/>
                </div>
            </div>
        </div>
    )
}

export default About;
