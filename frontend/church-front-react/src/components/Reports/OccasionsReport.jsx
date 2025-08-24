import React, { useEffect, useState } from "react";
import { getAllOccasions } from "../../services/OccasionService";

const OccasionsReport = () => {
  const [occasions, setOccasions] = useState([]);

  useEffect(() => {
    listOfOccasions();
  }, []);

  function listOfOccasions() {
    getAllOccasions()
      .then((response) => {
        // console.log(response.data);
        setOccasions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // shows the date in  dd/mm/yyyy format
  function formatDate(isoString) {
    const myDate = new Date(isoString);

    const day = String(myDate.getUTCDate()).padStart(2, "0");
    const month = String(myDate.getUTCMonth() + 1).padStart(2, "0");
    const year = myDate.getUTCFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <div className="container">
      <br />
      <h2 className="text-center">List of Occasions</h2>

      <table className="table table-striped ">
        <thead>
          <tr>
            <th>id</th>
            <th>Start</th>
            <th>End</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {occasions.map((occasion) => (
            <tr key={occasion._id}>
              <td>{occasion._id}</td>
              <td>{formatDate(occasion.start)}</td>
              <td>{formatDate(occasion.end)}</td>
              <td>{occasion.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OccasionsReport;
