// import {
//   MapContainer,
//   TileLayer,
// } from 'https://cdn.esm.sh/react-leaflet'
import { MapContainer, TileLayer,useMap, Marker, Popup } from "react-leaflet";
import "./leaflet_map.css";
import 'leaflet/dist/leaflet.css';

function Leafletmap() {
  //   return (
  //     <MapContainer center={[27.700769, 85.300140]} zoom={259} scrollWheelZoom={false}>
  //     <TileLayer
  //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //   />
  //   </MapContainer>

  // )
  return (
    <div className="re">
    <MapContainer 
      center={[27.6195, 85.5386]}
      zoom={30}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "50vh", zoom: '0',  }}
      
      
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
     </MapContainer>
     </div>
  );
}
setTimeout(function () {
  window.dispatchEvent(new Event("resize"));
}, 500);

export default Leafletmap;
