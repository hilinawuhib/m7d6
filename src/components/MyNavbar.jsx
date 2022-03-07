import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const MyNavbar = () => {
  const favorite = useSelector((state) => state.favorite.jobset);
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="navtxt" href="/">
          Job search app
        </Navbar.Brand>
        <Button className="navbtn" onClick={() => navigate("/favorite")}>
          Favorites
        </Button>
      </Navbar>
    </>
  );
};

export default MyNavbar;
