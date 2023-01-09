import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Register from "./Register";
import Results from "./Results";
import Logo from "./assets/medium.png";
import Login from "./Login";
import Survey from "./Survey";
import ForgotPassword from "./ForgotPassword";
import ResultSummary from "./ResultSummary";
import Report from "./Report";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ContextProvider from "./Context";
import Overview from "./OverviewNutrition";
import NutritionRequirements from "./NutritionRequirements";
import TrainingPredispositions from "./TrainingPredispositions";

export function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.wiley-nutrition.com/">
        Wiley Nutrition
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

function App() {
  return (
    <>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box>
            <div>
              <AppBar className="response">
                <Toolbar sx={{ height: 120 }}>
                  <Link href="http://localhost:3000/">
                    <img
                      src={Logo}
                      alt="logo"
                      className="logo"
                      style={{ height: 150, width: 150, marginRight: 5 }}
                    />
                  </Link>
                  <Link href="http://localhost:3000/">
                    <Typography
                      variant="h9"
                      color="white"
                      sx={{ mr: 2 }}
                      noWrap
                    >
                      Perform To Your Potential.
                    </Typography>
                  </Link>
                  <div className="navbar-right">
                    <Link href="http://localhost:3000/login">
                      <Typography
                        variant="h6"
                        color="white"
                        sx={{ mr: 2 }}
                        noWrap
                      >
                        Login
                      </Typography>
                    </Link>

                    <Link href="http://localhost:3000/register">
                      <Typography
                        variant="h6"
                        color="white"
                        sx={{ mr: 2 }}
                        noWrap
                      >
                        Register
                      </Typography>
                    </Link>
                    <Link href="http://localhost:3000/survey">
                      <Typography
                        variant="h6"
                        color="white"
                        sx={{ mr: 2 }}
                        noWrap
                      >
                        Survey
                      </Typography>
                    </Link>
                    <Link href="http://localhost:3000/results">
                      <Typography
                        variant="h6"
                        color="white"
                        sx={{ mr: 2 }}
                        noWrap
                      >
                        Results
                      </Typography>
                    </Link>
                  </div>
                </Toolbar>
              </AppBar>
            </div>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/survey" element={<Survey />} />
                <Route path="/results" element={<Results />} />
                <Route path="/forgot" element={<ForgotPassword />} />
                <Route path="/report" element={<Report className="bgb" />} />
                <Route path="/resultsummary" element={<ResultSummary />} />
                <Route path="/overviewn" element={<Overview />} />
                <Route
                  path="/trainingpredispositions"
                  element={<TrainingPredispositions />}
                />
                <Route
                  path="/nutritionrequirements"
                  element={<NutritionRequirements />}
                />
              </Routes>
            </Router>
          </Box>
          {/* Footer */}

          {/* End footer */}
        </ThemeProvider>
      </ContextProvider>
    </>
  );
}

export default App;
