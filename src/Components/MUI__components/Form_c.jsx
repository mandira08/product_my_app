import React from 'react'
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function Form_c() {
  return (
    <div>
      <Typography variant="subtitle1">Name</Typography>
        <TextField
        name="name"
        variant="outlined"
        fullWidth
        required
        />

<Typography variant="subtitle1">Age</Typography>
<TextField
  name="age"
  type="number"
  variant="outlined"
  fullWidth
/>
      <Typography variant="subtitle1">Password</Typography>
        <TextField
        name="password"
        type="password"
        variant="outlined"
        fullWidth
        required
      />
      <Typography variant="subtitle1">Email</Typography>
        <TextField
         name="email"
         type="email"
         variant="outlined"
         fullWidth
         required
        />
        <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Male" />
  <FormControlLabel control={<Checkbox />} label="Female" />
  <FormControlLabel control={<Checkbox />} label="Others" />
</FormGroup>
        <Typography variant="subtitle1">Message</Typography>
        <TextField
          name="message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          required
        />
      <Typography variant="subtitle1">Submit Form</Typography>
      <Button
       component={Link}
         to="/Cccc"
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
  Submit
        </Button>
    </div>
  )
}

