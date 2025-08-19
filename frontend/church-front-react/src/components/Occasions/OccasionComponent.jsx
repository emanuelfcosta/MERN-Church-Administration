import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOccasion } from "../../services/OccasionService";

const OccasionComponent = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const navigator = useNavigate();

  const [errors, setErrors] = useState({
    start: "",
    end: "",
    name: "",
    description: "",
  });

  function saveOccasion(e) {
    e.preventDefault();

    if (validateForm()) {
      const occasion = {
        start,
        end,
        name,
        description,
      };

      // console.log(occasion);

      createOccasion(occasion).then((response) => {
        console.log(response.data);
        navigator("/occasions");
      });
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (start) {
      errorsCopy.start = "";
    } else {
      errorsCopy.start = "Start is required";
      valid = false;
    }

    if (end.trim()) {
      errorsCopy.end = "";
    } else {
      errorsCopy.end = "End is required";
      valid = false;
    }

    if (name.trim()) {
      errorsCopy.name = "";
    } else {
      errorsCopy.name = "Name is required";
      valid = false;
    }

    if (description.trim()) {
      errorsCopy.description = "";
    } else {
      errorsCopy.description = "Description is required";
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
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                ></input>
                {errors.name && (
                  <div className="invalid-feedback">{errors.name} </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Start:</label>
                <input
                  type="date"
                  name="start"
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                  className={`form-control ${errors.start ? "is-invalid" : ""}`}
                ></input>
                {errors.start && (
                  <div className="invalid-feedback">{errors.start} </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">End:</label>
                <input
                  type="date"
                  name="end"
                  value={end}
                  onChange={(e) => setEnd(e.target.value)}
                  className={`form-control ${errors.end ? "is-invalid" : ""}`}
                ></input>
                {errors.end && (
                  <div className="invalid-feedback">{errors.end} </div>
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

              <button className="btn btn-success" onClick={saveOccasion}>
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

export default OccasionComponent;
