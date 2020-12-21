import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import "./CountrySelect.css";

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

const onCountrySelectChange = (event, value) => {
  alert(value.name);
};

function CountrySelect({ countries }) {
  const classes = useStyles();

  return (
    <div className="countrySelect">
      <Autocomplete
        id="country-select-demo"
        style={{ width: 300 }}
        options={countries}
        classes={{
          option: classes.option,
        }}
        autoHighlight
        getOptionLabel={(option) => option.name}
        renderOption={(option) => (
          <React.Fragment>
            <span>{}</span>
            {option.name} ({option.value})
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            variant="outlined"
            className="Input"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
        onChange={onCountrySelectChange}
      />
    </div>
  );
}
export default CountrySelect;
