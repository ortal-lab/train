import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({table,setTable}) {
    const options=[
        { label: 'building', year: 1984 },
        { label: 'routes', year: 1984 },
        { label: 'stops', year: 1984 },
        { label: 'station', year: 1984 },
        { label: 'worker', year: 1984 },

    ];

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={(option, value) => option.lable === value.lable}
      onInputChange={(event, newInputValue) => {
        setTable(newInputValue);
      }}
      renderInput={(params) => <TextField {...params} label="Choose Table" />}
    />
  );
}