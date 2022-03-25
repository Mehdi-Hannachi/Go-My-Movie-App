import React from "react";
import Filter from "../Filter/Filter";
import MovieForm from "../MovieForm/MovieForm";
import Stars from "../Stars/Stars";
import "./header.css";

const Header = ({ setSearchTxt, setSearchRate, searchRate }) => {
  return (
    <div className="header">
      <h1>Go My Movie</h1>

      <MovieForm isEdit={false} />

      <div className="filter">
        <Stars
          isEdit={true}
          setSearchRate={setSearchRate}
          searchRate={searchRate}
        />
        <Filter setSearchTxt={setSearchTxt} />
      </div>
    </div>
  );
};

export default Header;
