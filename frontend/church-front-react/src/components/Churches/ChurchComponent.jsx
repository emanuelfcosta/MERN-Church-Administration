import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createChurch,
  getChurchById,
  updateChurch,
} from "../../services/ChurchService";

const ChurchComponent = () => {
  const [name, setName] = useState("");
  const [responsible, setResponsible] = useState("");
  const [website, setWebsite] = useState("");
  const [type, setType] = useState("");
  const [foundationdate, setFoundationdate] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("AC");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    responsible: "",
    website: "",
    type: "",
    foundationdate: "",
    cnpj: "",
    address: "",
    city: "",
    state: "",
    phone: "",
  });

  const { id } = useParams();

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getChurchById(id)
        .then((response) => {
          //console.log(response.data.name);
          // setName(response.data.department.name);
          setName(response.data.name);
          setResponsible(response.data.responsible);
          setWebsite(response.data.website);
          setType(response.data.type);
          // date to format yyyy-MM-dd

          setFoundationdate(response.data.foundationdate.split("T")[0]);
          setCnpj(response.data.cnpj);
          setAddress(response.data.address);
          setCity(response.data.city);
          setState(response.data.state);
          setPhone(response.data.phone);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  function saveorUpdateChurch(e) {
    e.preventDefault();
    if (validateForm()) {
      const church = {
        name,
        responsible,
        website,
        type,
        foundationdate,
        cnpj,
        address,
        city,
        state,
        phone,
      };

      //  console.log(church);

      if (id) {
        updateChurch(id, church)
          .then((response) => {
            console.log(response.data);
            navigator("/churches");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createChurch(church)
          .then((response) => {
            console.log(response.data);
            navigator("/churches");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (name.trim()) {
      errorsCopy.name = "";
    } else {
      errorsCopy.name = "Name is required";
      valid = false;
    }

    if (responsible.trim()) {
      errorsCopy.responsible = "";
    } else {
      errorsCopy.responsible = "Responsible is required";
      valid = false;
    }

    if (website.trim()) {
      errorsCopy.website = "";
    } else {
      errorsCopy.website = "Website is required";
      valid = false;
    }

    if (type.trim()) {
      errorsCopy.type = "";
    } else {
      errorsCopy.type = "Type is required";
      valid = false;
    }

    if (foundationdate.trim()) {
      errorsCopy.foundationdate = "";
    } else {
      errorsCopy.foundationdate = "Date of Foundation  is required";
      valid = false;
    }

    if (cnpj.trim()) {
      errorsCopy.cnpj = "";
    } else {
      errorsCopy.cnpj = "CNPJ is required";
      valid = false;
    }

    if (address.trim()) {
      errorsCopy.address = "";
    } else {
      errorsCopy.address = "Address is required";
      valid = false;
    }

    if (city.trim()) {
      errorsCopy.city = "";
    } else {
      errorsCopy.city = "City is required";
      valid = false;
    }

    if (state.trim()) {
      errorsCopy.state = "";
    } else {
      errorsCopy.state = "State is required";
      valid = false;
    }

    if (phone.trim()) {
      errorsCopy.phone = "";
    } else {
      errorsCopy.phone = "Phone is required";
      valid = false;
    }

    setErrors(errorsCopy);

    console.log(errorsCopy);

    return valid;
  } //validateForm

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Church</h2>;
    } else {
      return <h2 className="text-center">Add Church</h2>;
    }
  }

  return (
    <div className="container">
      <br></br>
      <div className="row">
        <div className="card col-md-10 offset-md-1 offset-md-1">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  onChange={(e) => setName(e.target.value)}
                ></input>
                {errors.name && (
                  <div className="invalid-feedback">{errors.name} </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Responsible:</label>
                <input
                  type="text"
                  name="responsible"
                  value={responsible}
                  className={`form-control ${
                    errors.responsible ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setResponsible(e.target.value)}
                ></input>
                {errors.responsible && (
                  <div className="invalid-feedback">{errors.responsible} </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Site:</label>
                <input
                  type="text"
                  name="website"
                  value={website}
                  className={`form-control ${
                    errors.website ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setWebsite(e.target.value)}
                ></input>
                {errors.website && (
                  <div className="invalid-feedback">{errors.website} </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Type:</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className={`form-control ${errors.type ? "is-invalid" : ""}`}
                >
                  <option value="Church">Church</option>
                  <option value="Cell">Cell</option>
                  <option value="Headquarters">Headquarters</option>
                  <option value="Congregation">Congregation</option>
                  <option value="Community">Community</option>
                  <option value="Family">Family</option>
                  <option value="Group">Group</option>
                </select>
                {errors.type && (
                  <div className="invalid-feedback">{errors.type} </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Date of Foundation:</label>
                <input
                  type="date"
                  name="foundationdate"
                  value={foundationdate}
                  onChange={(e) => setFoundationdate(e.target.value)}
                  className={`form-control ${
                    errors.foundationdate ? "is-invalid" : ""
                  }`}
                ></input>
                {errors.foundationdate && (
                  <div className="invalid-feedback">
                    {errors.foundationdate}{" "}
                  </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">CNPJ:</label>
                <input
                  type="text"
                  name="cnpj"
                  value={cnpj}
                  className={`form-control ${errors.cnpj ? "is-invalid" : ""}`}
                  onChange={(e) => setCnpj(e.target.value)}
                ></input>
                {errors.cnpj && (
                  <div className="invalid-feedback">{errors.cnpj} </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={address}
                  className={`form-control ${
                    errors.address ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
                {errors.address && (
                  <div className="invalid-feedback">{errors.address} </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">City:</label>
                <input
                  type="text"
                  name="city"
                  value={city}
                  className={`form-control ${errors.city ? "is-invalid" : ""}`}
                  onChange={(e) => setCity(e.target.value)}
                ></input>
                {errors.city && (
                  <div className="invalid-feedback">{errors.city} </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">State:</label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className={`form-control ${errors.state ? "is-invalid" : ""}`}
                >
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AP">AP</option>
                  <option value="AM">AM</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PR">PR</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RS">RS</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="SC">SC</option>
                  <option value="SP">SP</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
                </select>
                {errors.state && (
                  <div className="invalid-feedback">{errors.state} </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone} </div>
                )}
              </div>

              <button className="btn btn-success" onClick={saveorUpdateChurch}>
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChurchComponent;
