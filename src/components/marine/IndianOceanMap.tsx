import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface BiodiversityFeature {
  geometry: { coordinates: [number, number] };
  properties: {
    scientificName: string;
    eventDate: string;
    location: string;
    photo?: string;
  };
}

export function IndianOceanMap() {
  const [features, setFeatures] = useState<BiodiversityFeature[]>([]);

  useEffect(() => {
    fetch('/api/biodiversity/map')
      .then(res => res.json())
      .then(data => setFeatures(data.features));
  }, []);

  return (
    <div className="w-full h-[600px]">
      <MapContainer center={[-15, 70] as LatLngExpression} zoom={3} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {features.map((f, i) => (
          <Marker key={i} position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
            <Popup>
              <div>
                <strong>{f.properties.scientificName}</strong><br />
                {f.properties.location}<br />
                {f.properties.eventDate}<br />
                {f.properties.photo && (
                  <img src={f.properties.photo} alt="species" style={{ maxWidth: 200 }} />
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
