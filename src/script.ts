export const arrayGenerator = (min: number, max: number, length: number): number[] => {

    let result = [];

    const randomizer = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    for (let i = 0; i < length; i++) {
        result.push(randomizer(min, max));
    }

    return result;
}



export const arraySort = (inputArr: number[]): number[][] => {

    const iterationTrack = [inputArr];


    const isArrEqual = (arr1: number[], arr2: number[]): boolean => {
        if (arr1.length !== arr2.length) return false;

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false
        }
        return true;
    }


    const arrayShift = (arr: number[]): number[] => {
        let temp: number;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }

        return arr;
    }



    let z = 0;
    while (true) {
        let temp = [...iterationTrack[z]];
        iterationTrack.push(temp);
        z++
        arrayShift(iterationTrack[z])
        if (isArrEqual(iterationTrack[z], iterationTrack[z - 1])) {
            // iterationTrack.pop();
            break
        }
    }

    console.log(iterationTrack)
    return iterationTrack;

}
