//2. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

function maxOfThreads(num1, num2, num3) {

    let largestNum = 0;

    for (i = 0; i < 3; i++) {
        if (num1 > num2 && num1 > num3) {
            largestNum = num1;
        } else if (num2 > num1 && num2 > num3) {
            largestNum = num2;
        } else {
            largestNum = num3;
        }
    }

    console.log(`Largest number is ${largestNum}`);

}

maxOfThreads(10, 3, 45);


//3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.

const arrayOfVowels = ['a', 'e', 'i', 'o', 'u'];

let isAvowel = false;

isAvowel = isCharAVowel('r');

function isCharAVowel(letter) {
    for (let i = 0; arrayOfVowels.length; i++) {
        if (arrayOfVowels[i].includes(letter)) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(isAvowel);


//4. Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11

const arrayOfNums = [45, 6, 7, 23, 1, 22];

sumOfNums(arrayOfNums);

function sumOfNums(arrayOfNums) {
    let sum = 0;

    for (i = 0; i < arrayOfNums.length; i++) {
        sum += arrayOfNums[i];
    }

    console.log(sum);

}

//5. Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40

//use same array as above


multOfNums(arrayOfNums);

function multOfNums(arrayOfNums) {
    let mult = 1;

    for (i = 0; i < arrayOfNums.length; i++) {
        mult = mult * arrayOfNums[i];
    }

    console.log(mult)

}

//6. Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.

let numOfArgs = numArgs(10, 'Tamara', true, 'another string');

function numArgs(num, str1, bool, str2) {
    return arguments.length;
}

console.log(numOfArgs);


//7. Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

let givenWord = "Breathtaking";

let reversedArray = reverseString(givenWord);

function reverseString(givenWord) {
    let splitString = givenWord.split("");

    let reverseArray = splitString.reverse();

    let joinedWord = reverseArray.join("");

    return joinedWord;
}

console.log(reversedArray);

//8. Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.

let arrayOfStrings = ["I love Javascript", "I also love Javascript", "I really really really love Javascript", "I love tacos!"];

longestStringInArray(arrayOfStrings)

function longestStringInArray(arrayOfStrings) {
    let longestString = 0;
    let str = "";

    for (let count = 0; count < arrayOfStrings.length; count++) {
        if (arrayOfStrings[count].length > longestString) {
            longestString = arrayOfStrings[count].length;
            str = arrayOfStrings[count];
        }
    }

    console.log(`longest string in the array is "${str}". \nLength: ${longestString}`);
}

//9. Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

let longStrings = ['Lorem', 'count', 'hi', 'morning', 'javascript', 'band', 'computer', 'the', 'say'];

let returnedStrings = stringsLongerThan(longStrings, 3)

function stringsLongerThan(longStrings, num) {
    let returnedString = [];

    for (let i = 0; i < longStrings.length; i++) {
        if (longStrings[i].length > num) {
            returnedString.push(longStrings[i]);
        }
    }

    return returnedString;
}

console.log(returnedStrings);
