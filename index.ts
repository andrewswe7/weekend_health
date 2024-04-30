#!/usr/bin/env ts-node-script

// Main file containing the main function findWords

/* 
    Function to build hashes for any given string
    1. We know all letters are lowercase so only 26 possible characters
    2. We create an array to represent each character count
    3. The index is the ASCII value of the character starting at 0
*/
const buildHash = (s : string): number[] => {
    const hash : number[] = new Array(26).fill(0);

    for(let c of s) {
        // Get the ASCII value of the character 
        // from 0 to 25
        const code: number = c.charCodeAt(0) - 97;

        // We can also validate inputs here to be sure that we are only working with lowercase alphabetical letters
        // 
        if(code < 0 || code > 25) throw 'Invalid Input'
        hash[code]++;
    }

    return hash;
};


/*
    Function to check if permutation is valid
    1. Iterates through the 26 possible characters (indices)
    2. Compares counts of both strings at each index
    3. If the word contains more counts of a letter, we know this can't be a permutation
    4. Successful completion of the loop returns true
*/
const validPermutation = (hash1: number[], hash2: number[]): boolean => {
    const len = 26;

    for(let i = 0; i < len; i++) {
        if(hash1[i] < hash2[i]) {
            return false;
        }
    }
    return true;
};


/*
    Main Function
    1. Creates hash of the input string
    2. Iterates through the input dictionary
    3. Creates hash of each word from the dictionary
    4. Compares the hashes of each word
*/
const findWords = (inputString: string, dictionary : string[]): string[] | Error  => {
    const results: string[] = [];
    let inputHash;
    try {
        inputHash = buildHash(inputString);
    } catch(error){
        return error;
    }

    for(let word of dictionary) {
        let wordHash;

        try {
            wordHash = buildHash(word);
        } catch(error) {
            return error;
        }

        if(validPermutation(inputHash, wordHash)) results.push(word);
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