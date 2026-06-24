function launchBrowser(browserName)
{
    if(browserName==="Chrome")
        console.log("This is ",browserName," browser")
    else if(browserName==="Edge")
        console.log("This is ",browserName," browser")
    else if(browserName==="Safari")
        console.log("This is ",browserName," browser")
    else
        console.log("Unsupported Browser");
}

function runTests(testName)
{
    switch(testName)
    {
    case "Regression":
        console.log("This is ",testName," test");
        break
    case "Sanity":
        console.log("This is ",testName," test");
        break
    case "Smoke":
        console.log("This is ",testName, " test");
        break;
    default:
        console.log("This is Smoke Test");
        break;        
}
}
launchBrowser("Chrome")
launchBrowser("Edge")
launchBrowser("Safari")
launchBrowser("Firefox")
runTests("Smoke")
runTests("Sanity")
runTests("Functional")
runTests("Regression")