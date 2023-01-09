import React from "react";
import "./App.css";
import SideBar from "./reusable/SideBar";
import Arsenal from "./assets/arsenal.png";
import River from "./assets/river.jpeg";
import Medium from "./assets/medium.png";
import Ball from "./assets/ball.jpeg";
import Molecule from "./assets/Molecular.png";
import D3 from "./assets/D3.gif";

import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import CircularDeterminate from "./DonutChart";

const DonutChart = () => {
  const imagePicker = (rating) => {
    if (rating == "Low") {
      return River;
    } else if (rating == "High") {
      return Arsenal;
    } else return Medium;
  };

  console.log("image", imagePicker("Low"));

  const listOfPets = [
    {
      picture: River,
      name: "Sacha",
      rating: "26",
    },
    {
      picture: River,
      name: "Sacha",
      rating: "75",
    },
    {
      picture: River,
      name: "Sacha",
      rating: "12",
    },
    {
      picture: River,
      name: "Sacha",
      rating: "78",
    },
    {
      picture: River,
      name: "Sacha",
      rating: "50",
    },
    {
      picture: River,
      name: "bailey",
      rating: "50",
    },
  ];

  const CircularDeterminate = ({ value }) => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= value ? value : prevProgress + 10
        );
      }, 120);

      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
      <Stack direction="row">
        <CircularProgress
          className="background-donut"
          variant="determinate"
          size={150}
          thickness={8}
          value={100}
        />
        <CircularProgress
          className="location"
          variant="determinate"
          color="success"
          size={150}
          thickness={8}
          value={progress}
        />
      </Stack>
    );
  };

  return (
    <div className="results-header">
      <div className="nutrition-report" style={{ backgroundColor: "" }}>
        <div className="menu">
          <h1 className="menuTitleNutrition">
            Your Nutrition Report<img className="Mol" src={Molecule}></img>
            <img className="D3" src={D3}></img>
          </h1>

          <div className="menuList">
            {listOfPets.map((menuItem, key) => {
              return (
                <div className="menuItem">
                  <div className="donut-card">
                    {" "}
                    <CircularDeterminate
                      value={menuItem.rating}
                      className="donut-chart"
                    ></CircularDeterminate>
                    <span className="low">Low</span>
                    <span className="medium">Medium</span>
                    <span className="high">High</span>
                  </div>

                  <h2> {menuItem.name} </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
