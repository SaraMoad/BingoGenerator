import { bingoPrompts } from "../../data/bingoPrompt";

// still need to fix for when I make it possible to add your own prompts to the list. 

const BingoGenerator = () => {
    let usedOptions = [];
    let check = 0;
    let optionsArray = bingoPrompts
    const currentBingoOptions = []
    const seperatingOptionsArray = optionsArray.length - 4
    const remainder = 21 % seperatingOptionsArray
    const arrayLength = Math.floor(21 / seperatingOptionsArray)
    let usedArray = []


    for (let x = 0; x < bingoPrompts.length; x++) {
            usedOptions.push([])
        }
 

    bingoPrompts.forEach((arr, index) => {
        if (currentBingoOptions.length === 25) {
            return currentBingoOptions;
        }

        if (arr === bingoPrompts[5] || arr === bingoPrompts[6] || arr === bingoPrompts[7] || arr === bingoPrompts[8]) {
            let i = Math.floor(Math.random() * arr.length)
            currentBingoOptions.push(arr[i])
            usedOptions[index].push(...arr.splice(i, 1))
        } else {
            for (let x = 0; x < arrayLength; x++) {
                let i = Math.floor(Math.random() * arr.length)
                currentBingoOptions.push(arr[i])
                usedArray.push(arr.push(arr[i]).toString())
            }
            usedOptions[index].push(...usedArray)
            usedArray = []
        }

        if (currentBingoOptions.length === 25 - remainder) {
            for (let x = 0; x < remainder; x++) {
                let secondInt = Math.floor(Math.random() * seperatingOptionsArray);
                let i = Math.floor(Math.random() * bingoPrompts[secondInt].length)
                currentBingoOptions.push(bingoPrompts[secondInt][i])
                usedOptions[secondInt].push(...bingoPrompts[secondInt].splice(i, 1))
            }
        }

        
    })

    // if (bingoPrompts[5].length === 0 || bingoPrompts[6].length === 0 || bingoPrompts[7].length === 0 || bingoPrompts[8].length === 0) {
    //     for (let i = 0; i < usedOptions.length; i++) {
    //         bingoPrompts[i].push(...usedOptions[i])
    //     }
    //     usedOptions = []
    // }


    for (let x = 0; x < seperatingOptionsArray; x++) {
        if (optionsArray[x].length < seperatingOptionsArray + remainder) {
            for (let i = 0; i < usedOptions.length; i++) {
                bingoPrompts[i].push(...usedOptions[i])
            }
            usedOptions = []
            check = 0
            break;
        }
    }

    return currentBingoOptions;
};

export default BingoGenerator;