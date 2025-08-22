import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPray } from "../../services/PrayService";

const PrayComponent = () => {
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  const navigator = useNavigate();

  const [errors, setErrors] = useState({
    reason: "",
    description: "",
    priority: "",
    status: "",
  });

  function savePray(e) {
    e.preventDefault();

    const pray = {
      reason,
      description,
      priority,
      status,
    };

    // console.log(pray);

    createPray(pray)
      .then((response) => {
        console.log(response.data);
        navigator("/prayers");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card col-md-10 offset-md-1 offset-md-1">
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Reason:</label>
                <input
                  type="text"
                  name="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className={`form-control ${
                    errors.reason ? "is-invalid" : ""
                  }`}
                ></input>
                {errors.reason && (
                  <div className="invalid-feedback">{errors.reason} </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Description:</label>
                <textarea
                  name="description"
                  rows="5"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className={`form-control ${
                    errors.description ? "is-invalid" : ""
                  }`}
                ></textarea>
                {errors.description && (
                  <div className="invalid-feedback">{errors.description} </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Priority:</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className={`form-control ${
                    errors.priority ? "is-invalid" : ""
                  }`}
                >
                  <option value="">Select Priority</option>
                  <option value="urgent">urgent</option>
                  <option value="high">high</option>
                  <option value="medium">medium</option>
                  <option value="low">low</option>
                </select>
                {errors.priority && (
                  <div className="invalid-feedback">{errors.priority} </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Status:</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className={`form-control ${
                    errors.status ? "is-invalid" : ""
                  }`}
                >
                  <option value="">Select Status</option>
                  <option value="done">done</option>
                  <option value="not done">not done</option>
                </select>
                {errors.status && (
                  <div className="invalid-feedback">{errors.status} </div>
                )}
              </div>

              <button className="btn btn-success" onClick={savePray}>
                {" "}
                Save{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayComponent;
