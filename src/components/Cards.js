import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "antd";
import "../App.css";
import { setCoordinates } from "../actions";

const Cards = () => {
  const [regionInfo, setRegionInfo] = useState("");
  const selectedRegion = useSelector((state) => state.region.selectedRegion);
  const regionInfoFromRedux = useSelector((state) => state.region.regionInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    const { name, latlng, timezones, cca2 } = regionInfoFromRedux;
    if (name && name.common) {
      const regionInfoText = `Region: ${name.common}
        ${timezones ? `\nTimezone: ${timezones}` : ""}
        ${cca2 ? `\nCountry Code: ${cca2}` : ""}`;
      setRegionInfo(regionInfoText);
    } else {
      setRegionInfo(false);
    }

    const coordinates = [latlng?.[0] ?? 0, latlng?.[1] ?? 0];
    console.log(coordinates);

    dispatch(setCoordinates(coordinates));
  }, [selectedRegion, dispatch, regionInfoFromRedux]);

  return (
    <div>
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

export default Cards;
