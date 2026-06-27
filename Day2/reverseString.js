function reverseString(word)
{
    let words=word.split("")
    let output=""
    let length=word.length
    for(index =length-1;index>=0;index--)
    {
        output=output+words[index]
    }
    console.log("The reversed word is ", output);
    if(output==word)
        console.log("The given word is a palindrome");
    else
        console.log("The given word is not a palindrome");
}
reverseString("madam")
reverseString("racecar")
reverseString("morning")
