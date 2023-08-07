import "antd/dist/reset.css";
import { Select, Button, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setRegion, setRegionInfo, setCoordinates } from "../actions";
import "../App.css";

const { Option } = Select;

const Floating = () => {
  const selectedRegion = useSelector((state) => state.region.selectedRegion);
  const regionInfo = useSelector((state) => state.region.regionInfo); // Assuming regionInfo is stored in the 'region' slice of the Redux store
  let countryData; // Use 'let' instead of 'const' since we might update its value later
  let coordinates = useSelector((state) => state.region.coordinates);
  const dispatch = useDispatch();

  const fetchRegionInfo = async (region) => {
    try {
      let response;
      if (region === "India") {
        response = await axios.get(
          `https://restcountries.com/v3.1/currency/INR`
        );
      } else {
        response = await axios.get(
          `https://restcountries.com/v3.1/name/${region}`
        );
      }

      countryData = response.data[0];

      if (countryData) {
        const { name, latlng, timezones, cca2 } = countryData;
        const regionInfoText = `Region: ${name.common}\nCoordinates: (${
          latlng[0]
        }, ${latlng[1]})${timezones ? `\nTimezone: ${timezones}` : ""}${
          cca2 ? `\nCountry Code: ${cca2}` : ""
        }`;
        coordinates = [latlng[0], latlng[1]];
        dispatch(setCoordinates(coordinates));

        dispatch(setRegionInfo(regionInfoText)); // Update the 'regionInfo' in the Redux store
      } else {
        dispatch(setRegionInfo("Error: Region information not found."));
      }
    } catch (error) {
      console.error("Error fetching region information:", error);
      dispatch(
        setRegionInfo(
          "Error fetching region information. Please try again later."
        )
      );
    }
  };

  const handleLoadClick = () => {
    switch (selectedRegion) {
      case "usa":
        fetchRegionInfo("United States");
        break;
      case "india":
        fetchRegionInfo("India");

        break;
      case "uk":
        fetchRegionInfo("United Kingdom");
        break;
      default:
        dispatch(setRegionInfo("Please select a region."));
    }
  };

  const handleRegionChange = (value) => {
    dispatch(setRegion(value));
  };

  return (
    <div className="floating-controls">
      <Select
        style={{ width: 200, marginRight: 16 }}
        placeholder="Select a region"
        onChange={handleRegionChange}
        value={selectedRegion || undefined}
      >
        <Option value="usa">United States</Option>
        <Option value="india">India</Option>
        <Option value="uk">United Kingdom</Option>
      </Select>
      <Button type="primary" onClick={handleLoadClick}>
        Load
      </Button>
      {regionInfo ? (
        <div className="card-container">
          <Card>
            <b>
              <p>{regionInfo}</p>
            </b>
          </Card>
        </div>
      ) : null}
    </div>
  );
};

export default Floating;
