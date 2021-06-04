/*
    CIT 281 Project 2
    Name: Rose Carroll
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");


//console.log(result);

//Returns one random lowercase letter from alphabet
const getRandomLetter= function(){
    const alaphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let output = "";
    output += alphabet[getRandomInteger(1, alphabet.length-1)];
    return output;
    }


    // will output a random length string
    const getRandomString = function(minLength, maxLength){
        let result = "";
        for(let i = 0; i < getRandomInteger(minLength, maxLength); i++){
            result += getRandomLetter();
        }
        return result;
    }

    console.log(getRandomString(10,20));

    const getSortedString = function(string){return string.split("").sort().join("");}
        //Steps given by Sam - 1. convert string to array
        //2. sort array
        //3. convert array back to string
        // Test comment
        
    

console.log(getSortedString("sam"));

