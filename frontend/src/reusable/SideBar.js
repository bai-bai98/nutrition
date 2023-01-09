import React from "react";
import "../App.css";
import { Link } from "@mui/material";
import Typography from "@mui/material/Typography";

const Sidebar = () => {
  return (
    <>
      <div className="results-sidebar">
        <div className="sidebar-home">
          <h1>HOME</h1>
        </div>
        <div className="sidebar-nutrition">
          <div className="side-bar-title">
            <h1>Nutrition</h1>
          </div>
          <div className="side-bar-text">
            <ul className="side-bar-styles">
              <li>
                {" "}
                <Link href="http://localhost:3000/overviewn">
                  <Typography variant="p" color="white" sx={{ mr: 2 }} noWrap>
                    Overview
                  </Typography>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="http://localhost:3000/vitamina">
                  <Typography variant="p" color="white" sx={{ mr: 2 }} noWrap>
                    Vitamin A
                  </Typography>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="http://localhost:3000/vitamin2a">
                  <Typography variant="p" color="white" sx={{ mr: 2 }} noWrap>
                    Vitamin A2
                  </Typography>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="http://localhost:3000/more">
                  <Typography variant="p" color="white" sx={{ mr: 2 }} noWrap>
                    More
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-training">
          <div className="side-bar-training-title">
            <h1>Training</h1>
          </div>
          <div className="side-bar-training-text ">
            <ul className="side-bar-styles">
              <li>
                <Link href="http://localhost:3000/overviewt">
                  <Typography variant="p" color="white" sx={{ mr: 2 }} noWrap>
                    Overview
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="http://localhost:3000/lowerback">
                  <Typography variant="p" color="white" sx={{ mr: 2 }} noWrap>
                    Lower Back
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="http://localhost:3000/achillies">
                  <Typography variant="p" color="white" sx={{ mr: 2 }} noWrap>
                    Achillies
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="http://localhost:3000/moret">
                  <Typography variant="p" color="white" sx={{ mr: 2 }} noWrap>
                    More
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
