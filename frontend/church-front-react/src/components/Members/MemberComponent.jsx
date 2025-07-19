import React, { useEffect, useState } from "react";

import { getAllChurches } from "../../services/ChurchService";

const MemberComponent = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("");
  const [baptismdate, setBaptismdate] = useState("");
  const [addmission, setAddmission] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [occupation, setOccupation] = useState("");

  // for churches

  const [church, setChurch] = useState(""); // selecionar a igreja
  const [churches, setChurches] = useState([]); // selecionar a igreja

  useEffect(() => {
    getAllChurches()
      .then((response) => {
        console.log(response.data);
        //setDepartments(response.data.departments);
        setChurches(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [errors, setErrors] = useState({
    church: "",
    status: "",
    role: "",
    baptismdate: "",
    addmission: "",
    name: "",
    gender: "",
    birthdate: "",
    address: "",
    state: "",
    occupation: "",
  });

  function saveMember(e) {
    e.preventDefault();

    const member = {
      church,
      status,
      role,
      baptismdate,
      addmission,
      name,
      gender,
      birthdate,
      address,
      state,
      occupation,
    };

    console.log(member);

    // createPet(pet).then((response) => {
    //   console.log(response.data);
    //   navigator("/pets");
    // });
  }

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card col-md-10 offset-md-1 offset-md-1">
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Select Church:</label>
                <select
                  className={`form-control ${
                    errors.church ? "is-invalid" : ""
                  }`}
                  value={church}
                  onChange={(e) => setChurch(e.target.value)}
                >
                  <option value="Select Church">Select Church</option>
                  {churches.map((church) => (
                    <option key={church._id} value={church._id}>
                      {church.name}
                    </option>
                  ))}
                </select>
                {errors.church && (
                  <div className="invalid-feedback">{errors.church}</div>
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
                  <option value="Active">Active</option>
                  <option value="Disciplined">Disciplined</option>
                  <option value="Deceased">Deceased</option>
                  <option value="Inactive">Inactive</option>
                </select>
                {errors.status && (
                  <div className="invalid-feedback">{errors.status} </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Role:</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={`form-control ${errors.role ? "is-invalid" : ""}`}
                >
                  <option value="">Select Role</option>
                  <option value="Pastor">Pastor</option>
                  <option value="Elder">Elder</option>
                  <option value="Deacon">Deacon</option>
                  <option value="Evangelist">Evangelist</option>
                  <option value="Worker">Worker</option>
                  <option value="Youth Leader">Youth Leader</option>
                  <option value="Children's Department Leader">
                    Children's Department Leader
                  </option>
                  <option value="Prayer Group Leader">
                    Prayer Group Leader
                  </option>
                  <option value="Evangelism Leader">Evangelism Leader</option>
                  <option value="Worship Leader">Worship Leader</option>
                </select>
                {errors.role && (
                  <div className="invalid-feedback">{errors.role} </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Admision:</label>
                <select
                  value={addmission}
                  onChange={(e) => setAddmission(e.target.value)}
                  className={`form-control ${
                    errors.addmission ? "is-invalid" : ""
                  }`}
                >
                  <option value="Acclamation">Acclamation</option>
                  <option value="Baptism">Baptism</option>
                  <option value="Letter">Letter</option>
                  <option value="Recommendation">Recommendation</option>
                  <option value="Transfer">Transfer</option>
                  <option value="others">Others</option>
                </select>
                {errors.addmission && (
                  <div className="invalid-feedback">{errors.addmission} </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Date of Baptism:</label>
                <input
                  type="date"
                  name="baptismdate"
                  value={baptismdate}
                  onChange={(e) => setBaptismdate(e.target.value)}
                  className={`form-control ${
                    errors.baptismdate ? "is-invalid" : ""
                  }`}
                ></input>
                {errors.baptismdate && (
                  <div className="invalid-feedback">{errors.baptismdate} </div>
                )}
              </div>
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
                <label className="form-label">Gender:</label>
                <select
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className={`form-control ${
                    errors.gender ? "is-invalid" : ""
                  }`}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Outro</option>
                </select>
                {errors.gender && (
                  <div className="invalid-feedback">{errors.gender}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Birthdate:</label>
                <input
                  type="date"
                  name="birthDate"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  className={`form-control ${
                    errors.birthdate ? "is-invalid" : ""
                  }`}
                ></input>
                {errors.birthdate && (
                  <div className="invalid-feedback">{errors.birthdate} </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Occupation:</label>
                <input
                  type="text"
                  name="occupation"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  className={`form-control ${
                    errors.occupation ? "is-invalid" : ""
                  }`}
                ></input>
                {errors.occupation && (
                  <div className="invalid-feedback">{errors.occupation} </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Address:</label>
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={`form-control ${
                    errors.address ? "is-invalid" : ""
                  }`}
                ></input>
                {errors.address && (
                  <div className="invalid-feedback">{errors.address} </div>
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

              <button className="btn btn-success" onClick={saveMember}>
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberComponent;
