import React from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import shp from 'shpjs';

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
                        l.bindPopup(`${out.join('<br/>')}`);
                    }
                }
            }
        ).addTo(map)

        shp(zipUrl).then((data) => geo.addData(data));
    }, [])
    return null;
}

export default ShapeFile;