import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './edit.css';

const EditUser = () => {
  let history = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    isAdmin: false
  });

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3002/users/"+id);
    setUser(result.data)
  };

  useEffect(() => {
    loadUser();
  }, []);

  
  const onSubmitEdit = async (e) => {
    e.preventDefault();
    await axios.put("http://localhost:3002/users/"+id,user).then( res => {
      console.log("Record updated successfully.")
    }).catch(err => console.log(err));
    history("/");
  }

  return (
    <div className="container-page">
      <div className="container-content">
      <h3>Edit User</h3>
      <form onSubmit={(e) => onSubmitEdit(e)}>
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Full Name"
            name="name"
            value={user.name}
            onChange={(e) => setUser({...user, name: e.target.value})}
          />
        </div>
        <div className="form-group mx-sm-3 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
          />
        </div>
        <div className="form-group mx-sm-3 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
          />
        </div>
        <div className="form-group mx-sm-3 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            name="phone"
            value={user.phone}
            onChange={(e) => setUser({...user, phone: e.target.value})}
          />
        </div>
        <div className="form-group mx-sm-3 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Website Name"
            name="website"
            value={user.website}
            onChange={(e) => setUser({...user, website: e.target.value})}
          />
        </div>
        <div className="form-group mx-sm-1 mb-1">
          <input
            type="checkbox"
            name="website"
            checked= {user.isAdmin}
            onChange={() => setUser({...user, isAdmin: !user.isAdmin})}
          /><label style={{fontWeight: 'bold'}}>Admin</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Edit User
        </button>
      </form>
      </div>
    </div>
  );
};

export default EditUser;
