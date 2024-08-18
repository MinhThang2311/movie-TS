import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { publicRoutes } from "./routes";
import Header from "./pages/Header";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchMovies = (title: string) => {
    setSearchTerm(title);
    console.log(`Searching for ${title}`);
  };

  return (
    <Router>
      <div className="app">
        <Header searchMovies={searchMovies} />
        <div className="main-content">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Page searchTerm={searchTerm} searchMovies={searchMovies} />
                  }
                />
              );
            })}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
