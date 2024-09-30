import { MapContainer } from "react-leaflet"
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
export { StyledMapContainer }