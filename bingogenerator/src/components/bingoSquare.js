import React from "react";

const BingoSqaure = ({ bingoprompts }) => {
    console.log(bingoprompts)
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>'
                <div>
                <p>{bingoprompts}</p>
            </div>
        </div>
    )
}

export default BingoSqaure;
