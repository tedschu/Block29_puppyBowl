import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <>
      <nav>
        <Link to={"/"} className="puppyLogo">
          <FontAwesomeIcon icon={faDog} size={"3x"} />
        </Link>
        <div className="navLinks">
          <Link to={"/"}>All puppies</Link>
          <Link to={"/newplayerform"}>Add new player</Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
