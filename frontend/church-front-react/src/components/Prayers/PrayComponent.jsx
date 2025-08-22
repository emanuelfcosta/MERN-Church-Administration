import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createPray,
  getPrayById,
  updatePray,
} from "../../services/PrayService";

const PrayComponent = () => {
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  const { id } = useParams();

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getPrayById(id)
        .then((response) => {
          // console.log(response.data);
          setReason(response.data.reason);
          setDescription(response.data.description);
          setPriority(response.data.priority);
          setStatus(response.data.status);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const [errors, setErrors] = useState({
    reason: "",
    description: "",
    priority: "",
    status: "",
  });

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Pray</h2>;
    } else {
      return <h2 className="text-center">Add Pray</h2>;
    }
  }

  function saveOrUpdatePray(e) {
    e.preventDefault();

    if (validateForm()) {
      const pray = {
        reason,
        description,
        priority,
        status,
      };

      // console.log(pray);

      if (id) {
        updatePray(id, pray)
          .then((response) => {
            console.log(response.data);
            navigator("/prayers");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        createPray(pray)
          .then((response) => {
            console.log(response.data);
            navigator("/prayers");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (reason.trim()) {
      errorsCopy.reason = "";
    } else {
      errorsCopy.reason = "Reason is required";
      valid = false;
    }

    if (description.trim()) {
      errorsCopy.description = "";
    } else {
      errorsCopy.description = "Description is required";
      valid = false;
    }

    if (priority.trim()) {
      errorsCopy.priority = "";
    } else {
      errorsCopy.priority = "Select priority";
      valid = false;
    }

    if (status.trim()) {
      errorsCopy.status = "";
    } else {
      errorsCopy.status = "Select Status";
      valid = false;
    }

    setErrors(errorsCopy);

    console.log(errorsCopy);

    return valid;
  } //validateForm

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card col-md-10 offset-md-1 offset-md-1">
          {pageTitle()}
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

              <button className="btn btn-success" onClick={saveOrUpdatePray}>
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
