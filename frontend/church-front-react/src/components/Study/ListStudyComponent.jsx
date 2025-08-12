import React, { useEffect, useState } from "react";
import { getAllStudy } from "../../services/StudyService";

const ListStudyComponent = () => {
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {study.map((theStudy) => (
            <tr key={theStudy._id}>
              <td>{theStudy._id}</td>
              <td>{theStudy.theDate}</td>
              <td>{theStudy.subject}</td>
              <td>{theStudy.description}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListStudyComponent;
