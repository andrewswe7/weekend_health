# Weekend Health Take-home Challenge
## High Level Approach
### What Makes a Permutation?
  We know that two strings of equal length are permutations of eachother if they both consist of the same exact characters. These two strings can be sorted alphabetically
  and then compared. If the two strings are the same, that means that they are permutations of eachother. In the case of two strings of unequal length, this would introduce
  more complex logic as counts of each character may be unequal. This means we'll have to take the approach of counting the appearance of each character in the string and 
  comparing the counts to those in the inputString. 

  In the approach, we'll build maps of characters to counts of said characters for the inputString and every word in the dictionary. As we iterate through each word in the
  dictionary, we'll build the map of counts and compare to the map of counts of the inputString. If at any point we find that the count of the character in the dictionary word
  is less than the count of the same character in the inputString, we know that this cannot be a possible permutation as we don't have enough of that character in the inputString.
  If we find that every character meets the required minimum count, then we know that the permutation is possible. 

### Time and Space Complexities
  It's inevitable that we'll have to go through each character in both the inputString and the total count of characters of all the dictionary words.

  k = length of inputString
  m = number of words in the dictionary
  n = length of a dictionary word
  26 = number of possible characters in an input string

  We can see that our run time will look like O(n) = k + m(n + 26) ==> O(n) = k + mn. At each dictionary word, we iterate the keys in the object which can be any letter from a-z, which
  adds a loop of up to 26 characters at each dictionary word, which amortizes to 0 in big O analysis. 
  
  
  For space complexity, we build our inputString map with up to 26 characters (k = 26) and each word in the dictionary (m words) builds a map as well of up to 26 keys. 

  O(n) = k + mn where both k and n is 26, so O(n) = m.

### Running the function
  To run the project, use the follow commands below.
  
    npm i  
    npm start

  More test cases can be added to the TEST_CASES array. 
    

  
