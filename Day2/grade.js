function printGrade(grade)
{
    switch(grade)
    {
        case (grade >= "90"):console.log("Grade A");
            break
        default:console.log("Failed");
            break
    }
}
printGrade("95")
printGrade("90")