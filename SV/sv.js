const validSolution = (arr) => {
    arr.forEach(element => {
        const validArr = [];
        const zeroesArr = [];
        element.forEach(el => {
            if (!validArr.includes(el)) {
                validArr.push(el)
            }
            if (el === 0) {
                zeroesArr.push(el)
            }
        })
        if (zeroesArr.length > 0 || validArr.length !== 9) {
            return false;
        } else {
            return true;
        }
    });
}