import React from "react";
import '../../style.css'

const BingoSqaure = ({ value }) => {
    if (value === undefined) {
        return ( <div className='zone'>
                
        </div>)
    }
    return (
        <div className='zone'>
                <p>{value}</p>
        </div>
    );
};

export default BingoSqaure;

//'tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'