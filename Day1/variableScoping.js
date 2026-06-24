function getbrowserName()
{
    if(browserName==="Chrome")
        var  browserName="Edge"
    console.log("BrowserName inside the function is ",browserName)
}
const browserName="Chrome"
console.log("Global browserName is ",browserName)
getbrowserName()