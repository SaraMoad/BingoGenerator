import { bingoPrompts } from "../data/bingoPrompt";


const bingoGenerator = () => {
    const optionsArray = bingoPrompts;
    const currentBingoOptions = []
    console.log(optionsArray.length, bingoPrompts, "length")
    for (let x = 0; x < 4; x++) {
            console.log(x)
            const i = Math.floor(Math.random() * optionsArray.length)
            console.log(optionsArray[i]) 
            currentBingoOptions.push(optionsArray[i])
            optionsArray.splice(i, 1)
            console.log(optionsArray, 'leftover')
    }
        console.log(currentBingoOptions)
        return currentBingoOptions
}

export default bingoGenerator;