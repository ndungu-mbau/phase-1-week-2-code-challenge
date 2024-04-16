/**
 * Takes a single character and returns a new character with its case
 * reversed. If the character is a space, it is returned as is. If the
 * character is already uppercase, it is converted to lowercase. If the
 * character is already lowercase, it is converted to uppercase.
 *
 * @param {string} char - The character to reverse its case
 * @returns {string} The character with its case reversed
 */
const checkAndChangeCaseChar = (char) => {
  // If the character is a space, return it as is
  if (char === " ") {
    return " ";
  }

  // If the character is already uppercase, convert it to lowercase
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  }

  // If the character is already lowercase, convert it to uppercase
  if (char === char.toLowerCase()) {
    return char.toUpperCase();
  }
};

/**
 * Takes a string and returns a new string with the case of each character
 * reversed. If a character is a space, it is returned as is. If a character
 * is already uppercase, it is converted to lowercase. If a character is already
 * lowercase, it is converted to uppercase.
 *
 * @param {string} str - The string to convert
 * @returns {string} The new string with reversed case
 */
const checkAndChangeCaseStr = (str) => {
  // Split the string into an array of individual characters
  return (
    str
      .split("")
      // Map each character to its case reversed version
      .map((char) => checkAndChangeCaseChar(char))
      // Join the array of characters back into a string
      .join("")
  );
};

console.log(checkAndChangeCaseStr("Hello World"));
