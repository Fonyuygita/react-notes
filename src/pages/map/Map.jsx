import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import "./map.css";
import "leaflet/dist/leaflet.css";
import { listData } from '../../data';
import Pin from '../../components/pin/Pin';


const Map = () => {
    const position = [5.9597, 10.1460];

    return (
        <div className="mapContainer">
            <MapContainer center={position} zoom={14} scrollWheelZoom={false} className='map'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {listData.map(item => (
                    <Pin key={item.id} item={item} />

                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
