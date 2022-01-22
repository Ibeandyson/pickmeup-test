import { actions, useDispatch, useStore } from "../context/locationStore";
import axios from "axios";

const useLocation = () => {
  const store = useStore();
  const dispatch = useDispatch();

  //func to get loacton
  const getLocaton = () => {
    dispatch({ type: actions.LOADING, payload: true });
    if (!navigator.geolocation) {
      dispatch({ type: actions.LOADING, payload: false });
      console.log("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch({ type: actions.GET_LOCATION, payload: position.coords });
          dispatch({ type: actions.LOADING, payload: false });
          console.log(position);

          // this is to make an api call to google goecoding, for geting location details
          //but the given API key is invalid, which made me used mine that isn't paid yet so the sevice for goecoding is paid
          axios
            .get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&sensor=false&key=AIzaSyAzgNkNwqYRzs3g1C8aRfkCZoip_6R3u2Y`
            )
            .then((res) => {
              dispatch({ type: actions.LOCATION_DETAILS, payload: res.data });
              console.log("res", res.data);
            })
            .catch((err) => {
              console.log("err", err);
            });
        },
        () => {
          console.log("Unable to retrieve your location");
          dispatch({ type: actions.LOADING, payload: false });
        }
      );
    }
  };
  return {
    getLocaton,
    locationData: store.locationData,
    locationDetails: store.locationDetails,
    loading: store.loading,
  };
};
export default useLocation;
