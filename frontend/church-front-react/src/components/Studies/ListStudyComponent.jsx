import React, { useEffect, useState } from "react";
import { deleteStudy, getAllStudy } from "../../services/StudyService";
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

  function updateStudy(id) {
    navigator(`/edit-study/${id}`);
  }

  function removeStudy(id) {
    deleteStudy(id)
      .then((response) => {
        console.log(response.data);
        listOfStudy();
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
              <td>
                <button
                  onClick={() => updateStudy(theStudy._id)}
                  className="btn btn-info"
                >
                  Update
                </button>

                <button
                  onClick={() => removeStudy(theStudy._id)}
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListStudyComponent;
