import React from "react";
import Button from '@mui/material/Button';
// style with gpn green, add a hover component, hide it when printed, increase size and padding. 

const RegenerateButton = ({ regenerate }) => {
  return (
    <Button sx={{ margin: '10px' }} color="success" variant="contained" onClick={regenerate}>
      GENERATE
    </Button>
  );
}

export default RegenerateButton;