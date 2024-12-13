import { Button, Form, InputGroup, Nav } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsBookFill } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SideBar() {
  const [find, setFind] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/search/${find}`);
    setFind("");
  };
  return (
    <>
      <Nav
        className="navbar navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="container flex-column align-items-start">
          <a className="navbar-brand" href="index.html">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </a>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <BsHouseDoorFill />
                    &nbsp; Home
                  </a>
                </li>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <BsBookFill />
                    &nbsp; Your Library
                  </a>
                </li>
                <li>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      value={find}
                      onChange={(e) => setFind(e.target.value)}
                    />
                    <Button
                      variant="outline-secondary"
                      id="button-addon2"
                      onClick={handleClick}
                    >
                      Go
                    </Button>
                  </InputGroup>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn">
          <button id="signup-btn" className="btn" type="button">
            Sign Up
          </button>
          <button id="login-btn" className="btn " type="button">
            Login
          </button>
          <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
        </div>
      </Nav>
    </>
  );
}
export default SideBar;
