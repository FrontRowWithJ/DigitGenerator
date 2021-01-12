const getUnique = (value, index, arr = []) => {
    return arr.indexOf(value) == index;
}

const generateR = () => {
    const number = BigInt(+(document.getElementById("student-number").value));
    const numSquared = number * number;
    return ("" + numSquared).split("").map((e) => +e);
}

const isDigitNotPresent = (value, array) => {
    return array.indexOf(value) == -1;
}

const generateDigits = () => {
    const DDigits = generateR();
    const uniques = DDigits.filter(getUnique);
    const remainingDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((value) => isDigitNotPresent(value, uniques));
    const UDigits = uniques.concat(remainingDigits);

    const UDigitsRow = [...document.getElementById("u-digits-row").children];
    UDigitsRow.map((e, i) => e.innerHTML = UDigits[i]);

    const outputs = [...document.getElementsByClassName("output")];
    outputs[0].innerHTML = DDigits.join("");
    outputs[1].innerHTML = UDigits.join("");
}
