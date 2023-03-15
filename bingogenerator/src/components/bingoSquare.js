import React from "react";

const BingoSqaure = ({ value }) => {
    console.log({ value })
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <div>
                <p>{value}</p>
            </div>
        </div>
    );
};

export default BingoSqaure;
