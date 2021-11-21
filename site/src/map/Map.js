import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { HOST_URL } from '../config/config';

import ShapeFile from './Shapefile';

const Map = () => {
    const mapRef = React.useRef();

    React.useEffect(() => {
        if (mapRef.current) {
            const map = mapRef.current.leafletElement;
            map.setView([34.74161249883172, 18.6328125], 2);
        }
    }, [mapRef.current]);

    const position = [36.545, -96.987];
    return (
        <MapContainer
            center={position}
            zoom={4}
            style={{
                width: '100%',
                height: '80vh'
            }}
            whenCreated={(instance) => {mapRef.current = instance}}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <ShapeFile zipUrl={`${HOST_URL}/tl_2018_us_cd116.zip`}/>
        </MapContainer>
    )
}



export default Map;