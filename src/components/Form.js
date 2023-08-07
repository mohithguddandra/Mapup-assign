import React, { useState } from "react";
import { Select, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegionInfo } from "./RegionApi";
import { setRegion, setRegionInfo } from "../actions";
import Cards from "./Cards";
import "../App.css";

const { Option } = Select;

const Form = () => {
  const [loading, setLoading] = useState(false);
  const selectedRegion = useSelector((state) => state.region.selectedRegion);
  const regionInfo = useSelector((state) => state.region.regionInfo);
  const dispatch = useDispatch();

  const handleLoadClick = async () => {
    try {
      setLoading(true);
      let cardData;
      switch (selectedRegion) {
        case "usa":
          cardData = await fetchRegionInfo("United States");
          break;
        case "india":
          cardData = await fetchRegionInfo("India");
          break;
        case "uk":
          cardData = await fetchRegionInfo("United Kingdom");
          break;
        default:
          dispatch(setRegionInfo("Please select a region."));
      }

      if (cardData) {
        dispatch(setRegionInfo(cardData));
      }
    } catch (error) {
      dispatch(setRegionInfo(error.message));
    } finally {
      setLoading(false);
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
      <Button type="primary" onClick={handleLoadClick} loading={loading}>
        Load
      </Button>
      <Cards cardData={regionInfo} />
    </div>
  );
};

export default Form;
