import React, { useState, ChangeEvent, MouseEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../search.svg";
import "../App.css";

interface SearchProps {
  searchMovies: (title: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchMovies }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchMovies(searchTerm);
    navigate(`/`);
  };
  const handleImageClick = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    searchMovies(searchTerm);
    navigate(`/`);
  };

  return (
    <div className="search">
      <form onSubmit={handleFormSubmit}>
        <input
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for movies"
        />
        <img src={SearchIcon} alt="search" onClick={handleImageClick} />
      </form>
    </div>
  );
};

export default Search;
