import React from 'react';
import './style.css'

const Weather = (props) => {
    return(
        <div>
            {
                props.city && <p>{props.city} , {props.country}</p>
            }
            {
                props.temp && <p>{props.temp} ºC</p>
            }
            {
                props.weather_description && <p>{props.weather_description}</p>
            }
            {
                props.temp_min && <p>{props.temp_min} ºC / {props.temp_max} ºC</p>
            }
            {
                props.error_msg && <p>{props.error_msg}</p>
            }
        </div>
    )
}

export default Weather;