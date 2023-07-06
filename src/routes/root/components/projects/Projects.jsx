import { useEffect } from "react";
import "./Projects.css"
import ProjectCard from "../projectCard/ProjectCard";
import githubLogo from "../../imgs/github.png"
import minigeo from "../../imgs/minigeo.png"
import calc from "../../imgs/calc.png"
import { useMemo } from "react";

const Projects = ({lang}) => {

    const cardObj = (header, description, bg, link) => ({
        header,description,bg,link
    });

    const {headerText, gitHubPageHeader} = useMemo(() => (
        lang === "by" ? {
            headerText:"Мае праекты",
            gitHubPageHeader:"Мая Github старонка"
        } : lang === "pl" ? {
            headerText:"Moje projekty",
            gitHubPageHeader:"Moja strona Github" 
        } : lang === "en" ? {
            headerText:"My projects",
            gitHubPageHeader:"My Github account"
        } : {}
    ), [lang]);

    return (
        <>
            <div className="my-projects-block" id="my-projects-block">
                <div className="container">
                    <h2 className="projects-block-header">
                        {headerText}
                    </h2>
                
                <div className="container-flex">
                    {
                        [
                            cardObj("Mini-Geoguessr", "",minigeo, "/mini-geoguessr"),
                            cardObj("React-calculator", "",calc, "/react-calculator"),
                            cardObj(gitHubPageHeader, "",githubLogo, "https://github.com/Un1nstallexe"),
                             
                        ].map(i =>(
                            <ProjectCard
                                header={i.header}
                                description={i.description}
                                link={i.link}
                                bg={i.bg}
                            />
                        ))
                    }
                </div>
                </div>
            </div>
        </>
    )
};

export default Projects 