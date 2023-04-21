import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3002/users", user);
    history("/");
  };

  return (
    <div className="container py-5">
      <h3>Add User</h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Full Name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group mx-sm-3 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group mx-sm-3 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group mx-sm-3 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            name="phone"
            value={phone}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group mx-sm-3 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Website Name"
            name="website"
            value={website}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
