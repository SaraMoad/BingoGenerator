import React from "react";
import BingoSquare from "./bingoSquare";
import Instructions from "./Instructions/instructions";
import '../style.css'


const BingoGrid = ({ bingoPrompts }) => {
    return (
    <>
        <div className="container">
                <Instructions />
                {bingoPrompts.map((prompt, i) => {
             return <BingoSquare key={i} value={prompt} />
        })}
            </div>
    </>
    );   
}

export default BingoGrid;