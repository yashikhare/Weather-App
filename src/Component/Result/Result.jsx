import React from "react";
import './Result.css'
function Result({data}){
return(
        <div id="Result">
        <div className="singleResult"><b>Temperature:</b>{data?.main?.temp}</div>
        <div className="singleResult"><b>Temperature_max:</b>{data?.main?.temp_max}</div>
        <div className="singleResult"><b>Temperature_min:</b>{data?.main?.temp_min}</div>
        <div className="singleResult"><b>Pressure:</b>{data?.main?.pressure}</div>
        <div className="singleResult"><b>Humidity:</b>{data?.main?.humidity}</div>
        <div className="singleResult"><b>feels_like:</b>{data?.main?.feels_like}</div>
    </div>
)
}
export default Result;