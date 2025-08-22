import React, { useEffect, useState } from "react";

import { deletePray, getAllPrayers } from "../../services/PrayService";

import { useNavigate } from "react-router-dom";

const ListPrayComponent = () => {
  const [prayers, setPrayers] = useState([]);

  const navigator = useNavigate();

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

  function addNewPray() {
    navigator("/add-pray");
  }

  function updatePray(id) {
    navigator(`/edit-pray/${id}`);
  }

  function removePray(id) {
    deletePray(id)
      .then((response) => {
        console.log(response.data);
        listOfPrayers();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <br />
      <h2 className="text-center">List of Prayers</h2>

      <button className="btn btn-success" onClick={addNewPray}>
        Add Pray
      </button>

      <table className="table table-striped ">
        <thead>
          <tr>
            <th>id</th>
            <th>Reason</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {prayers.map((pray) => (
            <tr key={pray._id}>
              <td>{pray._id}</td>
              <td>{pray.reason}</td>
              <td>{pray.priority}</td>
              <td>{pray.status}</td>
              <td>
                <button
                  onClick={() => updatePray(pray._id)}
                  className="btn btn-info"
                >
                  Update
                </button>
                <button
                  onClick={() => removePray(pray._id)}
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

export default ListPrayComponent;
