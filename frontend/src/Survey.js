import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/lab";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Pre-Workout", "Intra-Workout", "Post-Workout"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function InputAdornments() {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeSelect = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Box
      className="survey"
      sx={{
        background: "linear-gradient(to right bottom, #36EAEF, #6B0AC9)",
        paddingBottom: "-300px",
        height: "200vh",
        paddingTop: "10px",
      }}
    >
      <Typography
        className="survey-title"
        component="h3"
        variant="h4"
        align="center"
        color="white"
        gutterBottom
      >
        Wiley Nutrition Customer Survey
      </Typography>
      <Box
        sx={{
          width: "50%",
          position: "relative",
          left: "30%",
          top: "3%",
        }}
      >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={10}>
            <Typography
              component="h3"
              variant="h7"
              align="center"
              color="white"
              gutterBottom
            >
              How much do you Weigh?
            </Typography>
            <Item>
              {" "}
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  value={values.weight}
                  onChange={handleChange("weight")}
                  endAdornment={
                    <InputAdornment position="end">kg</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                <FormHelperText id="outlined-weight-helper-text">
                  Weight
                </FormHelperText>
              </FormControl>
            </Item>
          </Grid>
          <Grid item xs={10}>
            <Typography
              component="h3"
              variant="h7"
              align="center"
              color="white"
              gutterBottom
            >
              What is your gender?
            </Typography>
            <Item>
              {" "}
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Item>
          </Grid>
          <Grid item xs={10}>
            <Typography
              component="h3"
              variant="h7"
              align="center"
              color="white"
              gutterBottom
            >
              What is your date of birth?
            </Typography>
            <Item>
              {" "}
              <FormControl>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    openTo="day"
                    views={["year", "month", "day"]}
                    label="Year, month and date"
                    value={selectedDate}
                    onChange={(newValue) => {
                      setSelectedDate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} helperText={null} />
                    )}
                  />
                </LocalizationProvider>
              </FormControl>
            </Item>
          </Grid>
          <Grid item xs={10}>
            <Typography
              component="h3"
              variant="h7"
              align="center"
              color="white"
              gutterBottom
            >
              Which supplement cover would you like?
            </Typography>
            <Item>
              <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                <Select
                  multiple
                  displayEmpty
                  value={personName}
                  onChange={handleChangeSelect}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Which Supplement Cover</em>;
                    }

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value="">
                    <em>Which Supplement Cover</em>
                  </MenuItem>
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
