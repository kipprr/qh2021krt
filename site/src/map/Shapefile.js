import React from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import shp from 'shpjs';
import ReactDOMServer from 'react-dom/server';

import './map.css';
import { GAPI_KEY_2 } from '../config/config';
import { STATES, BASE_URL } from '../civicapi/constants';

const ShapeFile = ({ zipUrl }) => {
    const map = useMap();
    React.useEffect(() => {
        const geo = L.geoJSON(
            { features: [] },
            {
                onEachFeature: (f, l) => {
                    let out = [];
                    if (f.properties) {
                        for (let key in f.properties) {
                            out.push(f.properties[key])
                        }
                    }
                    l.on("click", async (e) => {
                        // Get number
                        let district = out[3].substring(out[3].lastIndexOf(" ") + 1);
                        let state = parseInt(out[0]);
                        let ocdID = `ocd-division%2Fcountry%3Aus%2Fstate%3A${STATES[state]}`
                        if (!out[3].includes("at Large")) {
                            ocdID = `${ocdID}%2Fcd%3A${district}`
                        }

                        if (l.getPopup()) {
                            l.openPopup()
                        } else {
                            let data = await fetch(`${BASE_URL}/${ocdID}?key=${GAPI_KEY_2}&levels=country`)
                            .then(res => {
                                return res.json();
                            })

                            console.log(data);

                            // Don't want the app crashing on us
                            if (data.error) {
                                l.bindPopup("No data available").openPopup();
                                return;
                            }

                            let rep;
                            if (out[3].includes("at Large")) {
                                rep = data.officials[2];
                            } else {
                                rep = data.officials[0];
                            }

                            let site = (rep.urls) ? rep.urls[0] : undefined

                            l.bindPopup(ReactDOMServer.renderToString(buildData(`${rep.name} (${rep.party.charAt(0)})`, site, rep.phones[0], `${STATES[state].toUpperCase()} ${out[3]}`))).openPopup()
                        }
                    })
                }
            }
        ).addTo(map)

        shp(zipUrl).then((data) => geo.addData(data));
    }, [])
    return null;
}

const buildData = (name, url, phone, district) => {
    if (url) {
        return (
            <div>
                <h3>{district}</h3>
                <a href={url} target="_blank" rel="noreferrer">
                    {name}
                </a>
                <div className="phone">
                    <i className="fas fa-phone-alt"></i>
                    <div className="phone-number">
                        {phone}
                    </div>   
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h3>{district}</h3>
                <p>
                    {name}
                </p>
                <div className="phone">
                    <i className="fas fa-phone-alt"></i>
                    <div className="phone-number">
                        {phone}
                    </div>    
                </div>
            </div>
        );
    }
}

export default ShapeFile;