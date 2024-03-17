import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
 import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"



export default function ChiefCard({chief}){


    return(
        <div className="chief-card">
            <img src={chief.img}alt=""></img>
            <div className="chief-card-info">
                <h3 className="chief-card-name">{chief.name}</h3>
                <p className="chief-recipe-count">{chief.recepesCount} <b>10</b></p>
                <p className="chief-cuisine">{chief.cuisine} <b>10</b></p>
                <p className="chief-icons"> 
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faInstagram}/>


                
                 </p>


            </div>
        </div>
   
        
    )


}