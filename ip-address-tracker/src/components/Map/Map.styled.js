import { MapContainer } from "react-leaflet"
import styled from "styled-components"
import { headerHeightFirst, headerHeightSecond } from "../../variables.styled.js"

const StyledMapContainer = styled(MapContainer)`
    height: calc(100vh - ${headerHeightFirst});
    width: 100%;
    position: relative;
    z-index: 1;

    @media screen and (min-width: 768px) {
      height: calc(100vh - ${headerHeightSecond});
    }
`
export { StyledMapContainer }