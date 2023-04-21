import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './pages.css'

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    // const result = await axios.get("http://localhost:3002/users");
    // setUsers(result.data.reverse());

    axios.get("http://localhost:3002/users").then(res => {
      setUsers(res.data.reverse());
    }).catch(err => console.log(err));
  };

  const deleteUser = async (id) => {
   await axios.delete("http://localhost:3002/users/"+id).then(res => {
     console.log("Successfully deleted record.")
   }).catch(err => console.log(err));
    loadUsers();
  }

  return (
    <div className="container">
      <div className="py-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to= {"/users/"+user.id} className="btn btn-primary m-2">View</Link>
                  <Link to= { "/users/edit/"+user.id} className="btn btn-outline-primary m-2">Edit</Link>
                  <Link to= "" className="btn btn-danger m-2" onClick={() => deleteUser(user.id)}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
