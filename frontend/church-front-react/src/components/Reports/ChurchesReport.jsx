import React, { useEffect, useState } from "react";
import { getAllChurches } from "../../services/ChurchService";

const ChurchesReport = () => {
  const [churches, setChurches] = useState([]);

  function listOfChurches() {
    getAllChurches()
      .then((response) => {
        console.log(response.data);
        setChurches(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    listOfChurches();
  }, []);

  return (
    <div className="container">
      <br />
      <h2 className="text-center">List of Churches</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Type</th>
            <th>Responsible</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {churches.map((church) => (
            <tr key={church._id}>
              <td>{church._id}</td>
              <td>{church.name}</td>
              <td>{church.type}</td>
              <td>{church.responsible}</td>
              <td>{church.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChurchesReport;
