import React, { useEffect, useState } from "react";
import { getAllStudy } from "../../services/StudyService";
import { useNavigate } from "react-router-dom";

const ListStudyComponent = () => {
  const [study, setStudy] = useState([]);

  const navigator = useNavigate();

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

  function addNewStudy() {
    navigator("/add-study");
  }

  // shows the date in  dd/mm/yyyy format
  function formatDate(date) {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(date).toLocaleDateString("pt-BR", options);
  }

  return (
    <div className="container">
      <br />
      <h2 className="text-center">List of Study</h2>
      <button className="btn btn-success" onClick={addNewStudy}>
        Add Study
      </button>

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
              <td>{formatDate(theStudy.theDate)}</td>
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
