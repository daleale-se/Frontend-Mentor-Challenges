import { useMap } from "react-leaflet";

// eslint-disable-next-line react/prop-types
function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

export default ChangeView