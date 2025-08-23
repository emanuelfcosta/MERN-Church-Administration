import React, { useEffect, useState } from "react";
import { getAllFinancial } from "../../services/FinancialService";
import { useNavigate } from "react-router-dom";

const ListFinancialComponent = () => {
  const [financial, setFinancial] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    listOfFinancial();
  }, []);

  function listOfFinancial() {
    getAllFinancial()
      .then((response) => {
        // console.log(response.data);
        setFinancial(response.data);
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

  function addNewFinancial() {
    navigator("/add-financial");
  }

  function updateFinancial(id) {
    navigator(`/edit-financial/${id}`);
  }

  return (
    <div className="container">
      <br />
      <h2 className="text-center"> Cash Flow</h2>
      <button className="btn btn-success" onClick={addNewFinancial}>
        Add Cash Flow
      </button>

      <table className="table table-striped ">
        <thead>
          <tr>
            <th>id</th>
            <th>Type</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {financial.map((theFinancial) => (
            <tr key={theFinancial._id}>
              <td>{theFinancial._id}</td>
              <td>{theFinancial.type}</td>
              <td>{theFinancial.description}</td>
              <td>{theFinancial.amount}</td>
              <td>{formatDate(theFinancial.theDate)}</td>
              <td>
                <button
                  onClick={() => updateFinancial(theFinancial._id)}
                  className="btn btn-info"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListFinancialComponent;
