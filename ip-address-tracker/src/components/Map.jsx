import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import styled from "styled-components"

const StyledMapContainer = styled(MapContainer)`
    height: calc(100vh - 18rem);
    width: 100%;
    position: relative;
    z-index: 1;

    @media screen and (min-width: 768px) {
      height: calc(100vh - 15rem);
    }
`

const Map = () => {

    const [coordinates, setCoordinates] = useState([-34.7574, -58.4027])

    useEffect(() => {

        navigator.geolocation.getCurrentPosition((position) => {
            setCoordinates([position.coords.latitude, position.coords.longitude])
        })


        fetch("https://geo.ipify.org/api/v2/country?apiKey=at_TcpoddlPwF83b60xBB1xeHFlKH0Kl")
        .then(res => res.json())
        .then(data => console.log(data))

    }, [])

  return (
    <StyledMapContainer center={coordinates} zoom={15} scrollWheelZoom={true} zoomControl={false} >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    </StyledMapContainer>
  )
}

export default Map