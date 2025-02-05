import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/contact">Contact </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <h1>Welcome to home page</h1>
    </div>
  );
};

export default Home;
