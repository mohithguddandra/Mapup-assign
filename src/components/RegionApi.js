import axios from "axios";

export const fetchRegionInfo = async (region) => {
  try {
    let response;

    if (region === "India") {
      response = await axios.get(
        `https://restcountries.com/v2/capital/new%20delhi        `
      );
      console.log("inside");
    } else {
      response = await axios.get(
        `https://restcountries.com/v3.1/name/${region}`
      );
    }

    const countryData = response.data[0];
    console.log(countryData);
    return countryData;
  } catch (error) {
    console.error("Error fetching region information:", error);
    throw new Error(
      "Error fetching region information. Please try again later."
    );
  }
};
