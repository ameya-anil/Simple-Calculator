function butnclick(val)
{
   
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}

function clrdisplay()
{
    document.getElementById("screen").value=""
}
function equalbtn()
{
var text=document.getElementById("screen").value
var result=eval(text)
document.getElementById("screen").value=result
}