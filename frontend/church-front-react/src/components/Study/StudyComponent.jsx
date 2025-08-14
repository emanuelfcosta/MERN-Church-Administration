import React, { useState } from "react";

const StudyComponent = () => {
  const [theDate, setTheDate] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState({
    theDate: "",
    subject: "",
    description: "",
    notes: "",
  });

  function saveStudy(e) {
    e.preventDefault();

    const study = {
      theDate,
      subject,
      description,
      notes,
    };

    console.log(study);
  }

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card col-md-10 offset-md-1 offset-md-1">
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Date:</label>
                <input
                  type="date"
                  name="theDate"
                  value={theDate}
                  onChange={(e) => setTheDate(e.target.value)}
                  className={`form-control ${
                    errors.theDate ? "is-invalid" : ""
                  }`}
                ></input>
                {errors.theDate && (
                  <div className="invalid-feedback">{errors.theDate} </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Subject:</label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={`form-control ${
                    errors.subject ? "is-invalid" : ""
                  }`}
                ></input>
                {errors.subject && (
                  <div className="invalid-feedback">{errors.subject} </div>
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
                <label className="form-label">Notes:</label>
                <textarea
                  name="notes"
                  rows="5"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className={`form-control ${errors.notes ? "is-invalid" : ""}`}
                ></textarea>
                {errors.notes && (
                  <div className="invalid-feedback">{errors.notes} </div>
                )}
              </div>

              <button className="btn btn-success" onClick={saveStudy}>
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

export default StudyComponent;
