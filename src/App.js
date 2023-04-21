import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Aboutus from "./components/pages/Aboutus";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUsers";
import EditUser from "./components/users/Edit";
import DisplayUser from "./components/users/DisplayUser";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
          <Route path="/users/add" element={<AddUser />}></Route>
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/users/:id" element={<DisplayUser />} />
          <Route path="*" element= { <NotFound /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
