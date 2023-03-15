import React from "react";
import BingoSquare from "./bingoSquare";



const BingoGrid = ({ bingoPrompts }) => {
    console.log({ bingoPrompts })
    return (
    <>
        <div className="container">
                {/* <Instructions /> */}
                {bingoPrompts.map((prompt, i) => {
            return <BingoSquare key={i} value={prompt} />
        
        })}
            </div>
    </>
    );   
}

export default BingoGrid;