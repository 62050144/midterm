import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Compoments/Tables";

export const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all");

    console.log(response.data);

    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("data :", data);
  return (
    <div className="container-lg py-3">
      <Table products ={data} />
    </div>
  );
};

export default App;