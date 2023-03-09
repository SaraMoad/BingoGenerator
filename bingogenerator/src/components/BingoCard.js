import React from "react";
import BingoSquare from "./bingoSquare";



const BingoGrid= ({ bingoprompts }) => {
    return (
            <>
        <div className="container">
                <Instructions />
                {bingoprompts.map((prompt, i) => {
            console.log(bingoprompts[i], i);
            return (
                <BingoSquare
                    key={i}
                    value={bingoprompts[i]} />
            );
        })}
        </div></>
    );   
}

export default BingoGrid;