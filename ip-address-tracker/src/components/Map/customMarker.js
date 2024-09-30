import { Icon } from "leaflet"
import customMarker from "../../assets/images/icon-location.svg"

const svgIcon = new Icon({
    iconUrl: customMarker,
    className: "svg-icon",
    iconSize: [30, 40],
});

export default svgIcon