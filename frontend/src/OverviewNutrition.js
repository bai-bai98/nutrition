import React from "react";
import "./App.css";
import SideBar from "./reusable/SideBar";
import Arsenal from "./assets/river.jpeg";
import River from "./assets/river.jpeg";
import Medium from "./assets/medium.png";
import Ball from "./assets/ball.jpeg";

const Results = () => {
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
      rating: "Low",
    },
    {
      picture: River,
      name: "Sacha",
      rating: "High",
    },
    {
      picture: River,
      name: "Sacha",
      rating: "Low",
    },
    {
      picture: River,
      name: "Sacha",
      rating: "High",
    },
    {
      picture: River,
      name: "Sacha",
      rating: "Medium",
    },
    {
      picture: River,
      name: "Sacha",
      rating: "Medium",
    },
  ];

  return (
    <div className="results-header">
      <SideBar />
      <div className="results-main" style={{ backgroundColor: "" }}>
        <div className="menu">
          <h1 className="menuTitle">Nutrition Overview</h1>

          <div className="menuList">
            {listOfPets.map((menuItem, key) => {
              return (
                <div className="menuItem">
                  <div
                    style={{
                      backgroundImage: `url(${
                        menuItem.rating == "Medium" ? River : Ball
                      })`,
                    }}
                  ></div>
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

export default Results;
