// // import { LatLngExpression } from 'leaflet';
// import "leaflet/dist/leaflet.css"
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// const Map = () => {
//   // const markers = [
//   //   {
//   //     geocode: [45.86,2.3522] as LatLngExpression,
//   //     popUp:"Hello"
//   //   },
//   //   {
//   //     geocode: [48.85,2.3522],
//   //     popUp:"Hello"
//   //   },
//   // ]

//   return(
//     <>
//       <MapContainer center={[48.8566, 2.3522]} zoom={13}>
//         <TileLayer
//           attribution='&copy;
//           <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         <Marker position={[54.369616, 29.049932]}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </>
//   )
// }

// export default Map;

import { useEffect } from "react";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {Geocoder, geocoders} from 'leaflet-control-geocoder';
import {motion as m} from "framer-motion"


const MapComponent = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    new Geocoder({
      geocoder: new geocoders.Nominatim(),
      position: 'topleft',
    }).addTo(map);
  }, [])

  return(
    <>
      <m.div
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:0.8, delay:0.5}}}
      id="map" style={{ height: '400px', background:'none'}}></m.div>
    </>
  )
}

export default MapComponent;
