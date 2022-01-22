import { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import useLocation from "../hooks/useLocation";

const MapView = () => {
  const { locationData, getLocaton, loading } = useLocation();

  const [defaultcenter] = useState({
    lat: 37.7749295,
    lng: -122.4194155,
  });

  const [center, setcenter] = useState({
    lat: undefined,
    lng: undefined,
  });

  const [zoom] = useState(5);

  useEffect(() => {
    setcenter({
      lat: locationData?.latitude,
      lng: locationData?.longitude,
    });
  }, [locationData]);

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: locationData?.latitude, lng: locationData?.longitude },
      map,
      title: "location details is to be shown here, but the given API key is invalid, which made me used mine that isn't paid yet so the sevice for goecoding is paid",
    });
    return marker;
  };

  const map_key = "AIzaSyAzgNkNwqYRzs3g1C8aRfkCZoip_6R3u2Y";

  return (
    <div>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          key={center.lat === undefined ? 0 : locationData.accuracy}
          bootstrapURLKeys={{ key: map_key }}
          defaultCenter={defaultcenter}
          defaultZoom={zoom}
          center={center.lat === undefined ? defaultcenter : center}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        >
          {locationData === null ? (
            <div className="bnt__canter ">
              {loading ? (
                <div
                  className="spinner-grow text-success  mt-5"
                  role="status"
                />
              ) : (
                <button
                  onClick={() => getLocaton()}
                  type="button"
                  class="btn btn-success mt-5"
                >
                  Find Me
                </button>
              )}
            </div>
          ) : null}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default MapView;
