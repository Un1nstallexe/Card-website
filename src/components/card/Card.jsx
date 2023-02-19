//import imG from "./logo512.png";
import "./Card.css"

const Card = ({data,lang}) => {
    const {img,name,descr} = data;
    return (
        <div className="card">
            <div className="card-image-divider">
                <img src={img} alt={`${name}`} className="card-image"/>
            </div>
            <h3 className="card-name">
                {name}
            </h3>
            <div className="card-description">
                {descr}
            </div>
        </div>
    )
}

export default Card;
