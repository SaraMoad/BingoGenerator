import { bingoPrompts } from "../data/bingoPrompt";


const bingoGenerator = () => {
    const optionsArray = bingoPrompts;
    const currentBingoOptions = []
    for (let x = 0; x < 4; x++) {
        const i = Math.floor(Math.random() * optionsArray.length)
        currentBingoOptions.push(optionsArray[i])
        optionsArray.splice(i, 1)
    }

    return currentBingoOptions;
};

export default bingoGenerator;