const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const getUnique = (value, index, arr = []) => {
    return arr.indexOf(value) == index;
}

const generateR = () => {
    const digits = [];
    for (let i = 0; i < 15; i++) {
        const digit = (Math.random() * 10) | 0;
        digits.push(digit);
    }
    return digits;
}
const isDigitNotPresent = (value, array) => {
    return array.indexOf(value) == -1;
}
const generateDigits = () => {
    const DDigits = generateR();
    const uniques = DDigits.filter(getUnique);
    const remainingDigits = digits.filter((value) => isDigitNotPresent(value, uniques));
    const UDigits = uniques.concat(remainingDigits);
    
    const DDigitsRow = [...document.getElementById("d-digits-row").children];
    DDigitsRow.map((e, i) => e.innerHTML = DDigits[i]);

    const UDigitsRow = [...document.getElementById("u-digits-row").children];
    UDigitsRow.map((e, i) => e.innerHTML = UDigits[i]);

    const outputs = [...document.getElementsByClassName("output")];
    outputs[0].innerHTML = DDigits.join("");
    outputs[1].innerHTML = UDigits.join("");
}