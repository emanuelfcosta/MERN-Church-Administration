import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ListReportComponent() {
  const [selectedReport, setSelectedReport] = useState("");
  const navigate = useNavigate();

  // Function that handles selection change
  const handleRadioChange = (event) => {
    setSelectedReport(event.target.value);
  };

  // Function to display report based on selection
  const handleShowClick = () => {
    if (selectedReport) {
      navigate(selectedReport);
    } else {
      alert("Please select a report type.");
    }
  };

  return (
    <div className="container">
      <h4 className="text-primary">Select a Report:</h4>

      <div>
        <label>
          <input
            type="radio"
            name="report"
            value="/reports/churchesreport"
            onChange={handleRadioChange}
          />
          Churches
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="report"
            value="/reports/membersreport"
            onChange={handleRadioChange}
          />
          Members
        </label>
      </div>

      <div className="mt-3">
        <button
          className="btn btn-primary"
          onClick={handleShowClick}
          disabled={!selectedReport} // Disables the button if no report is selected
        >
          Show
        </button>
      </div>
    </div>
  );
}

export default ListReportComponent;
