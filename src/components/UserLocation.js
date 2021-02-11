import React from 'react'

export default function UserLocation(props) {

    const { temperature, description, localisation, pays, vit_vent, pression, humidite} = props.weather;

    return (
        <div className="user-weather">
            <div className="row">
                <div className="col-md-3 weather-temp">
                    <h1>{temperature}<sup>o</sup>C {description}</h1>
                    <p>{localisation}, {pays}</p>
                </div>


            </div>

            <div className="row">
                <div className="col-md-3 weather-info">
                    <p><b>Vitesse du vent</b>(km/h)</p>
                    <h2>{vit_vent}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Pression</b></p>
                    <h2>{pression}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Humidité</b>(%)</p>
                    <h2>{humidite}</h2>
                </div>

            </div>
        </div>
    )
}
