import React, { useEffect, useState } from "react";
import { deleteChurch, getAllChurches } from "../../services/ChurchService";
import { useNavigate } from "react-router-dom";

const ListChurchComponent = () => {
  const [churches, setChurches] = useState([]);

  const navigator = useNavigate([]);

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

  function addNewChurch() {
    navigator("/add-churches");
  }

  function updateChurch(id) {
    navigator(`/edit-church/${id}`);
  }

  function removeChurch(id) {
    deleteChurch(id)
      .then((response) => {
        console.log(response.data);
        listOfChurches();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Churches</h2>
      <button className="btn btn-success" onClick={addNewChurch}>
        Add Church
      </button>
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

              <td>
                <button
                  onClick={() => updateChurch(church._id)}
                  className="btn btn-info"
                >
                  Update
                </button>
                <button
                  onClick={() => removeChurch(church._id)}
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

export default ListChurchComponent;
