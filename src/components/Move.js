import { useEffect } from "react";
import { useMapEvents } from "react-leaflet";
import { useSelector } from "react-redux";

function Move() {
  const regionInfo = useSelector((state) => state.region.coordinates);

  const map = useMapEvents({});

  useEffect(() => {
    // Update the map position whenever the regionInfo changes
    map.flyTo([regionInfo[0], regionInfo[1]], map.getZoom());
  }, [map, regionInfo]);

  return null; // Return null as this component doesn't render anything
}

export default Move;
