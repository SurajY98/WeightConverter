


// Pounds to other

function poundsToother(valueNum) {
    document.getElementById("inputKilograms").value = valueNum / 2.2046;
    document.getElementById("inputOnces").value = valueNum * 16;
    document.getElementById("inputGrams").value = valueNum / 0.0022046;
    document.getElementById("inputStones").value = valueNum * 0.071429;
}

// Kilo to other
function kiloToOther(valueNumm) {
    document.getElementById("inputPounds").value = valueNumm * 2.2046;
    document.getElementById("inputGrams").value = valueNumm * 1000;
    document.getElementById("inputStones").value = valueNumm * 0.1574;
    document.getElementById("inputOnces").value = valueNumm * 35.274;
}


// onces to other

function oncesToOther(valueNum) {
    document.getElementById("inputPounds").value = valueNum * 0.0625;
    document.getElementById("inputKilograms").value = valueNum / 35.274;
    document.getElementById("inputGrams").value = valueNum / 0.035274;
    document.getElementById("inputStones").value = valueNum * 0.0044643;
}

// Grams To Other
function gramsToOther(valueNum) {
    document.getElementById("inputPounds").value = valueNum * 0.0022046;
    document.getElementById("inputKilograms").value = valueNum / 1000;
    document.getElementById("inputOnces").value = valueNum * 0.035274;
    document.getElementById("inputStones").value = valueNum * 0.00015747;
}

// Stones To Other
function stoneToOther(valueNum) {
    document.getElementById("inputPounds").value = valueNum * 14;
    document.getElementById("inputKilograms").value = valueNum / 0.15747;
    document.getElementById("inputOnces").value = valueNum * 224;
    document.getElementById("inputGrams").value = valueNum / 0.00015747;
}



