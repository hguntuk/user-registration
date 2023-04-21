import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const DisplayUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    isAdmin: false,
  });
  const { id } = useParams();

  // const loadUserData = async () => {
  //   let result = await axios.get("http://localhost:3002/users/" + id);
  //   setUser(result.data);
  // };

  const loadUserData = async () => {
    axios
      .get("http://localhost:3002/users/" + id)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <div className="container">
      <h1>User Information</h1>
      <center>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.isAdmin ? user.isAdmin.toString() : "false"}</td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default DisplayUser;
