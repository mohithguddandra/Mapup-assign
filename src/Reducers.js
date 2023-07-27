const initialState = {
  selectedRegion: "",
  regionInfo: "",
  coordinates: [0, 0],
  darkMode: false,
};

const regionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REGION":
      return {
        ...state,
        selectedRegion: action.payload,
      };
    case "SET_REGION_INFO":
      return {
        ...state,
        regionInfo: action.payload,
      };
    case "SET_COORDINATES": {
      return { ...state, coordinates: action.payload };
    }

    default:
      return state;
  }
};

export default regionReducer;
