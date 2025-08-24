import React, { useEffect, useState } from "react";
import { getAllPrayers } from "../../services/PrayService";

const PrayersReport = () => {
  const [prayers, setPrayers] = useState([]);

  useEffect(() => {
    listOfPrayers();
  }, []);

  function listOfPrayers() {
    getAllPrayers()
      .then((response) => {
        // console.log(response.data);
        setPrayers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <br />
      <h2 className="text-center">List of Prayers</h2>

      <table className="table table-striped ">
        <thead>
          <tr>
            <th>id</th>
            <th>Reason</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {prayers.map((pray) => (
            <tr key={pray._id}>
              <td>{pray._id}</td>
              <td>{pray.reason}</td>
              <td>{pray.priority}</td>
              <td>{pray.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrayersReport;
