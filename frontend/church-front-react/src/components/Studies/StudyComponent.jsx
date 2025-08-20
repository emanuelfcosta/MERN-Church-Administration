import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createStudy,
  getStudyById,
  updateStudy,
} from "../../services/StudyService";

const StudyComponent = () => {
  const [theDate, setTheDate] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");

  const navigator = useNavigate();

  const { id } = useParams();

  const [errors, setErrors] = useState({
    theDate: "",
    subject: "",
    description: "",
    notes: "",
  });

  useEffect(() => {
    if (id) {
      getStudyById(id)
        .then((response) => {
          // console.log(response.data);

          // Convert the date to yyyy-MM-dd format
          setTheDate(response.data.theDate.split("T")[0]);
          //  setTheDate(response.data.theDate);
          setSubject(response.data.subject);
          setDescription(response.data.description);
          setNotes(response.data.notes);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Study</h2>;
    } else {
      return <h2 className="text-center">Add Study</h2>;
    }
  }

  function saveOrUpdateStudy(e) {
    e.preventDefault();

    if (validateForm()) {
      const study = {
        theDate,
        subject,
        description,
        notes,
      };

      if (id) {
        updateStudy(id, study)
          .then((response) => {
            console.log(response.data);
            navigator("/study");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        createStudy(study)
          .then((response) => {
            console.log(response.data);
            navigator("/study");
          })
          .catch((error) => {
            console.log(error);
          });
      }

      // console.log(study);
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (theDate) {
      errorsCopy.theDate = "";
    } else {
      errorsCopy.theDate = "Date is required";
      valid = false;
    }

    if (subject.trim()) {
      errorsCopy.subject = "";
    } else {
      errorsCopy.subject = "Subject is required";
      valid = false;
    }

    if (description.trim()) {
      errorsCopy.description = "";
    } else {
      errorsCopy.description = "Description is required";
      valid = false;
    }

    if (notes.trim()) {
      errorsCopy.notes = "";
    } else {
      errorsCopy.notes = "Notes is required";
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

              <button className="btn btn-success" onClick={saveOrUpdateStudy}>
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
