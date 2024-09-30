import { useEffect, useState } from "react"
import { TileLayer, Marker } from "react-leaflet"
import { StyledMapContainer } from "./Map.styled"
import svgIcon from "./customMarker"

const Map = () => {

    const [coordinates, setCoordinates] = useState([-34.7574, -58.4027])

    useEffect(() => {

        // fetch("https://api.geoapify.com/v1/ipinfo?ip=206.22.56.21&apiKey=24bf8e1b008141ff85a00eb61b9be9c9")
        // .then(res => res.json())
        // .then(data => console.log(data.location))

        // fetch("https://geo.ipify.org/api/v2/country?apiKey=at_TcpoddlPwF83b60xBB1xeHFlKH0Kl")
        // .then(res => res.json())
        // .then(data => {
        //     const { ip, location, isp} = data
        //     console.log(ip);
        //     console.log(location.country, location.region);
        //     console.log("UTC" + location.timezone);
        //     console.log(isp);
        // })

    }, [])

  return (
    <StyledMapContainer center={coordinates} zoom={15} scrollWheelZoom={true} zoomControl={false} >
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