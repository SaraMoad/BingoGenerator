import { bingoPrompts } from "./bingoPrompt";

const optionsArray = bingoPrompts;
const currentBingoOptions = []

export default function BingoMaker() {
        for (let x = 0; x < 4; x++) {
            const i = Math.floor(Math.random() * optionsArray.length)
            console.log(optionsArray[i]) 
            currentBingoOptions.push(optionsArray[i])
            optionsArray.splice(i, 1)
        }
}
