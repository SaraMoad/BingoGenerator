// has the prewritten instructions for GPN but create the ability to edit and change the value.
import './instructions.css'

const instructionString = `Rules: 1) Read each square. 2) Find a new friend who can complete any of the squares. 3) One friend can fill in one square only. 4) The first person to fill in every square wins!`;
const Instructions = () => {
   return (
        <div className='textbox'>
        <p>{instructionString}</p>
        </div>
   ) 
}

export default Instructions; 
