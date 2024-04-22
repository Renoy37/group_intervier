var reverseWords = function(s) {
    const trimmedString = s.trim();

    const arrayOfWords = trimmedString.split(/\s+/);

    const reversedArray = arrayOfWords.reverse();

    const reversedString = reversedArray.join(" ");

    return reversedString;
};