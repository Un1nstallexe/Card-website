import { Link } from "react-router-dom";
import "./ProjectCard.css"

const ProjectCard = ({bg, header, description, link}) => {

    

    return ( 
        <Link to={link} className="project-card"> 
            <img src={bg} alt={header} className="project-card-image"/>
            <div className="project-card-text">
                <h3 className="project-card-name">
                    {header}
                </h3>
                <div className="card-description">
                    {description}
                </div>
            </div> 
        </Link>
        
    )
};

export default ProjectCard