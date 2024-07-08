function reverseString(str) {
  // Initialize an empty string to hold the reversed string
  let reversedStr = '';

  // Iterate through the input string from the end to the beginning
  for (let i = str.length - 1; i >= 0; i--) {
    // Append each character to the reversed string
    reversedStr += str[i];
  }

  // Return the reversed string
  return reversedStr;
}

if (require.main === module) {
  // Add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: ''");
  console.log("=>", reverseString(""));

  console.log("");

  console.log("Expecting: 'a'");
  console.log("=>", reverseString("a"));

  console.log("");

  console.log("Expecting: 'dcba'");
  console.log("=>", reverseString("abcd"));
}

module.exports = reverseString;
