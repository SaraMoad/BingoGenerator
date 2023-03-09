import React from "react";



const RegenerateButton = ({ regenerate }) => {
    return (
        <button onClick={regenerate}>
          Generate
        </button>
    );   
}

export default RegenerateButton;