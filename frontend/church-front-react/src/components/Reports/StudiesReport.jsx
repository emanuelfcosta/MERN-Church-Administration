import React, { useEffect, useState } from "react";
import { getAllStudy } from "../../services/StudyService";

const StudiesReport = () => {
  const [study, setStudy] = useState([]);

  useEffect(() => {
    listOfStudy();
  }, []);

  function listOfStudy() {
    getAllStudy()
      .then((response) => {
        // console.log(response.data);
        setStudy(response.data);
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
      <h2 className="text-center">List of Study</h2>

      <table className="table table-striped ">
        <thead>
          <tr>
            <th>id</th>
            <th>Date</th>
            <th>Subject</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {study.map((theStudy) => (
            <tr key={theStudy._id}>
              <td>{theStudy._id}</td>
              <td>{formatDate(theStudy.theDate)}</td>
              <td>{theStudy.subject}</td>
              <td>{theStudy.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudiesReport;
