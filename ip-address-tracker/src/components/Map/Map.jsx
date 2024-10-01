import { TileLayer, Marker } from "react-leaflet"
import { StyledMapContainer } from "./Map.styled"
import svgIcon from "./customMarker"
import { useLocation } from "../../context/LocationContext"
import ChangeView from "./ChangeView"

const Map = () => {

  const { coordinates } = useLocation()

  return (
    <StyledMapContainer center={coordinates} zoom={11} scrollWheelZoom={true} zoomControl={false} >
        <ChangeView center={coordinates} zoom={11} />
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates} icon={svgIcon}>
        </Marker>
    </StyledMapContainer>
  )
}

export default Map