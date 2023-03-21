import { bingoPrompts } from "../../data/bingoPrompt";

let usedOptions = [];
let check = 0;

const BingoGenerator = () => {
    // const [refreshedPrompts, SetRefreshedPrompts] = useState(bingoPrompts)
    let optionsArray = bingoPrompts
    const currentBingoOptions = []
    const seperatingOptionsArray = optionsArray.length - 4
    const remainder = 21 % seperatingOptionsArray
    const arrayLength = Math.floor(21 / seperatingOptionsArray)
    let usedArray = []

    if (check === 0) {
        for (let x = 0; x < optionsArray.length; x++) {
            usedOptions.push([])
            check++
        }
    }

    optionsArray.forEach((arr, index) => {
        if (currentBingoOptions.length === 25) {
            return currentBingoOptions;
        }

        if (arr === optionsArray[5] || arr === optionsArray[6] || arr === optionsArray[7] || arr === optionsArray[8]) {
            let i = Math.floor(Math.random() * arr.length)
            currentBingoOptions.push(arr[i])
            usedOptions[index].push(...arr.splice(i, 1))
        } else {
            for (let x = 0; x < arrayLength; x++) {
                let i = Math.floor(Math.random() * arr.length)
                currentBingoOptions.push(arr[i])
                usedArray.push(arr.splice(i, 1).toString())
            }
            usedOptions[index].push(...usedArray)
            usedArray = []
        }

        if (currentBingoOptions.length === 25 - remainder) {
            for (let x = 0; x < remainder; x++) {
                let secondInt = Math.floor(Math.random() * seperatingOptionsArray);
                let i = Math.floor(Math.random() * optionsArray[secondInt].length)
                currentBingoOptions.push(optionsArray[secondInt][i])
                usedOptions[secondInt].push(...optionsArray[secondInt].splice(i, 1))
            }
        }
    })

    if (optionsArray[5].length === 0 || optionsArray[6].length === 0 || optionsArray[7].length === 0 || optionsArray[8].length === 0) {
        for (let i = 0; i < usedOptions.length; i++) {
            optionsArray[i].push(...usedOptions[i])
        }
        usedOptions = []
    }


    for (let x = 0; x < seperatingOptionsArray; x++) {
        if (optionsArray[x].length < seperatingOptionsArray + remainder) {
            for (let i = 0; i < usedOptions.length; i++) {
                optionsArray[i].push(...usedOptions[i])
            }
            usedOptions = []
            check = 0
            break;
        }
    }

    return currentBingoOptions;
};

export default BingoGenerator;