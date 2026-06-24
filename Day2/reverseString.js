function reverseString(word)
{
    let words=word.split("").reverse().join("")
    console.log("The given word is ",word )
    console.log("The reversed word is ",words);
    if(words===word)
        console.log("The given word ",word, "  is a palindrome")
    else
        console.log("The given word ",word," is not a palindrome" );
}
reverseString("madam")
reverseString("racecar")
reverseString("morning")