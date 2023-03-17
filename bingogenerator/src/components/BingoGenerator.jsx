import { bingoPrompts } from "../data/bingoPrompt";

let usedOptions = [];
    
const BingoGenerator = () => {
    let optionsArray = bingoPrompts 
    const currentBingoOptions = []
    for (let x = 0; x < 25; x++) {
        const i = Math.floor(Math.random() * optionsArray.length)
        currentBingoOptions.push(optionsArray[i])
        usedOptions.push(optionsArray.splice(i, 1).toString())
    }
    if (optionsArray.length < 25) {
        for (let i = 0; i < usedOptions.length; i++) {
        optionsArray.push(usedOptions[i]).toString()
        }
        usedOptions = []
    } 
    return currentBingoOptions;
};

export default BingoGenerator;