import React from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import shp from 'shpjs';
import Civic from '../civicapi/Civic'
import './map.css';

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
                        // This is the popup
                        l.bindPopup(`${<Civic sid={out[0]} did={out[1]} />}`);
                    }
                }
            }
        ).addTo(map)

        shp(zipUrl).then((data) => geo.addData(data));
    }, [])
    return null;
}

export default ShapeFile;