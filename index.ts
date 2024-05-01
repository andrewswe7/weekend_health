#!/usr/bin/env ts-node-script

// Main file containing the main function findWords

/* 
    Function to build hashes for any given string
    1. We know all letters are lowercase so only 26 possible characters
    2. We create an object keep track of the count of each character in the string
    3. Returns "Invalid Input" if the character is not an alphabetical lowercase character
*/
const buildHash = (s : string): Object => {
    const counts: Object = {};

    for(let c of s) {
        const code: number = c.charCodeAt(0) - 97;
        // We can also validate inputs here to be sure that we are only working with lowercase alphabetical letters
        if(code < 0 || code > 25) throw 'Invalid Input'
        counts[c] = counts[c] || 0;
        counts[c]++;
    }
    return counts;
};


/*
    Function to check if permutation is valid
    1. Iterates each character of the word string to compare to the input string
    2. Compares counts of both strings of each character
    3. If the word contains more counts of a letter, we know this can't be a permutation
    4. Successful completion of the loop returns true
*/
const validPermutation = (chars1: number[], chars2: number[]): boolean => {
    const chars = Object.keys(chars2);

    for(let c of chars) {
        if(!chars1[c] || chars1[c] < chars2[c]) return false;
    }
    return true;
};


/*
    Main Function
    1. Gets the counts of characters of the input string
    2. Iterates through the input dictionary words
    3. Creates counts for each character of each word from the dictionary
    4. Compares the counts of each character in each word
*/
const findWords = (inputString: string, dictionary : string[]): string[] | Error  => {
    const results: string[] = [];
    let inputCharacterCounts;
    try {
        inputCharacterCounts = buildHash(inputString);
    } catch(error){
        return error;
    }

    for(let word of dictionary) {
        let wordCharacterCount;

        try {
            wordCharacterCount = buildHash(word);
        } catch(error) {
            return error;
        }

        if(validPermutation(inputCharacterCounts, wordCharacterCount)) results.push(word);
    }

    return results;
};

const TEST_CASES = [
    findWords("ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]),
    findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]),
    findWords("a", ["a", "b", "c", "aa", "aaaa", "baba"]),
    findWords("", ["", " ", "abc"]),
    findWords("123", ["12", "21"])
];


// Function to test the findWords function
const runTests = () => {
    for(let testCase of TEST_CASES) {
        console.log(testCase)
    }
};

runTests();