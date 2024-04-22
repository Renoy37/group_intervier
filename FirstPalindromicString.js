var firstPalindrome = function(words) {
    for(let i=0;i<words.length;i++){
        if(reverse(words[i]) === words[i]){
            return words[i]
        }
    }
    return ""
};
function reverse(str){
   let word = str.split("").reverse().join("")
   return word  
};