import React, { useEffect, useState } from "react";
import { getAllMembers } from "../../services/MemberService";
import { useNavigate } from "react-router-dom";

const ListMemberComponent = () => {
  const [members, setMembers] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    listOfMembers();
  }, []);

  function listOfMembers() {
    getAllMembers()
      .then((response) => {
        // console.log(response.data);
        setMembers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewMember() {
    navigator("/add-member");
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Members</h2>
      <button className="btn btn-success" onClick={addNewMember}>
        Add Member
      </button>

      <table className="table table-striped ">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Occupation</th>
            <th>Church</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member._id}>
              <td>{member._id}</td>
              <td>{member.name}</td>
              <td>{member.occupation}</td>
              <td>{member.church.name}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListMemberComponent;
