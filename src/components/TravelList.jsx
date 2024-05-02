import {useState} from "react"
import travelPlansData from "../assets/travel-plans.json"
import "./TravelList.css"

function TravelList(){
    const [travelList] = useState (travelPlansData)

    return(
        <div >
        {travelList.map(list => (
        <div key = {list.id } className="travelList"> 
            <img src={list.image} alt= "destination image" />
            <div className="travelListInfo">
                <h3>{list.destination}</h3>
                <p>{list.description}</p>
                <p><b>Price:</b> {list.totalCost} €</p>
            </div>
        </div>  
        ))}

        </div>
    )
}

export default TravelList