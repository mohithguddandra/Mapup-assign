// src/actions.js

export const setRegion = (region) => {
  return {
    type: "SET_REGION",
    payload: region,
  };
};

export const setRegionInfo = (regionInfo) => {
  return {
    type: "SET_REGION_INFO",
    payload: regionInfo,
  };
};
export const setCoordinates = (coordinates) => {
  return {
    type: "SET_COORDINATES",
    payload: coordinates,
  };
};

