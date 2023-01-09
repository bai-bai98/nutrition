import React from "react";
import "./App.css";
import Arsenal from "./assets/arsenal.png";
import SideBar from "./reusable/SideBar";
import HoneyComb from "../src/assets/honeycomb.png";
import Typography from "@mui/material/Typography";
import { Link } from "react-scroll";
import ResponsiveDrawer from "./reusable/Sidebar2";
import Report from "./Report";
import DonutChart from "./NutritionRequirements";

const Results = () => {
  return (
    <div>
      <Report />
    </div>
  );
};

export default Results;
