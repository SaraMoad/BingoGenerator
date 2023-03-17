import React from "react";
import '../style.css'

// style with gpn green, add a hover component, hide it when printed, increase size and padding. 

const RegenerateButton = ({ regenerate }) => {
  return (
    <button className="button" onClick={regenerate}>
      GENERATE
    </button>
  );
}

export default RegenerateButton;