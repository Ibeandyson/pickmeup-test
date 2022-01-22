import Store from "./Store";

const initial_state = {
  locationData: null,
  loading: false,
  locationDetails: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.LOADING:
        return {
          ...state,
          loading: action.payload,
        };
    case actions.GET_LOCATION:
      return {
        ...state,
        locationData: action.payload,
      };
      case actions.LOCATION_DETAILS:
      return {
        ...state,
        locationDetails: action.payload,
      };
    default:
      return state;
  }
};

export const { Provider, useStore, useDispatch } = Store(
  initial_state,
  reducer
);

export const actions = {
  GET_LOCATION: "GET_LOCATION",
  LOADING: "LOADING", 
  LOCATION_DETAILS: "LOCATION_DETAILS"
};
