var email="raju@gmail.com"
var pass="1234"
var form=document.forms
function loginPage()
{
    var userDefEmail=document.getElementById("email").value
    var userDefPassw=document.getElementById("password").value
    var divbor=document.getElementsByClassName("borderDiv")
    if(email!=userDefEmail && pass!=userDefPassw)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,red)"
        divbor[0].style.borderColor="red"
        divbor[1].style.borderColor="red"
        document.getElementById("result").innerHTML="Email id and Password is Wrong"
    }
    else if(email==userDefEmail && pass!=userDefPassw)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,rgb(201,0,134),red)"
        divbor[0].style.borderColor="royalblue"
        divbor[1].style.borderColor="red"
        document.getElementById("result").innerHTML="Password is Wrong"
    }
    else if(email!=userDefEmail && pass==userDefPassw)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,purple)"
        divbor[0].style.borderColor="red"
        divbor[1].style.borderColor="royalblue"
        document.getElementById("result").innerHTML="Email id is Wrong"

    }
    else{
    form[0].action="./header.html"
    form[0].elements[2].type="submit"
    }
}
function visible()
{
    form[0].elements[1].type="text"
    document.getElementById("passVisible").src="./Asset/logo/visible.png"
    document.getElementById("passVisible").style.transform="rotateY(360deg)"
    document.getElementById("passVisible").style.transition="transform 0.5s"
}
function invisible()
{
    form[0].elements[1].type="password"
    document.getElementById("passVisible").src="./Asset/logo/invisible.png"
    document.getElementById("passVisible").style.transform="rotateY(0deg)"
    document.getElementById("passVisible").style.transition="transform 0.5s"

}