/*
    CIT 281 Project 2
    Name: Rose Carroll
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//let result = "";

//for (let i = 0; i < getRandomInteger(5, 26); i++) {
    //result += alphabet[getRandomInteger(1,alphabet.length-1)];
//}

//console.log(result);

//Returns one random lowercase letter from alphabet
function getRandomLetter(){
    const alaphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let output = "";
    output += alphabet[getRandomInteger(1, alphabet.length-1)];
    return output;
    }


    // will output a random length string
    function getRandomString(minLength, maxLength){
        let result = "";
        for(let i = 0; i < getRandomInteger(minLength, maxLength); i++){
            result += getRandomLetter();
        }
        return result;
    }

    console.log(getRandomString(10,20));

    function getSortedString(string){return string.split("").sort().join("");}
        //Steps given by Sam - 1. convert string to array
        //2. sort array
        //3. convert array back to string
        // Test comment
        
    

console.log(getSortedString("sam"));

