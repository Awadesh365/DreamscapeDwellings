import LeafletMap from "../components/LeafletMap";
import { useLocation } from "react-router-dom";

export default function Map() {
  const location = useLocation();
  const mapData = location.state?.mapData || [];
  console.log(mapData);
  return (
    <div>
      <LeafletMap mapData={mapData} />
    </div>
  );
}
