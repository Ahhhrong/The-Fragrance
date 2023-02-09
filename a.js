function myFunction1() {
    // Get the value of the input field with id="numb"
    let a = document.getElementById("name").value;
    let b = document.getElementById("number").value;
    let c = document.getElementById("email").value;
    let d = document.getElementById("sms").value;

    // If x is Not a Number or less than one or greater than 10
    let text1;
    let text2;
    let text3;
    let text4;
    if (a.length==0) 
    {
        text1= "Please Enter Your Name";

    }
    else
    {
        text1 =" "
    }
    if (b.length!=8) 
    {
        text2= "Please Enter Valid Phone Number ";

    }
    else
    {
        text2 =" "
    } 
    if (c.length==0) 
    {
        text3= "Please Enter Ur Message";

    }
    else
    {
        text3 =" "
    }
    if (d.length==0) 
    {
        text4= "Please Enter Ur Message";

    }
    else
    {
        text4 =" "
    }
    document.getElementById("name").placeholder =text1;
    document.getElementById("number").placeholder =text2;
    document.getElementById("sms").placeholder =text4;
    document.getElementById("email").placeholder =text3;


}
function burger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") 
    {
      x.style.display = "none";
    } else 
    {
      x.style.display = "block";
    }
  }


function ChkList(chk) {
var chkList = chk.parentNode.parentNode.parentNode;
var chks = chkList.getElementsByTagName("input");
for (var i = 0; i < chks.length; i++) 

    if (chks[i] != chk && chk.checked) 
    {
        chks[i].checked = false;
    }
}
function Validate() {
    var radio = rb.getElementsByTagName("input");
    var isChecked = false;
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            isChecked = true;
            break;
        }
    }

    return isChecked;
}
function checkout1()
{

    let a1 = document.getElementById("fcname").value;
    let a2 = document.getElementById("fcard").value;
    let a3 = document.getElementById("fmonth").value;
    let a4 = document.getElementById("fcvv").value;
    let a5 = document.getElementById("fyear").value;
    let a6 = document.getElementById("fname").value;
    let a7 = document.getElementById("femail").value;
    let a8 = document.getElementById("faddress").value;
    let a9 = document.getElementById("fcity").value;
    let a10 = document.getElementById("fzip").value;
    let a11 = document.getElementById("fstate").value;
  
    if (a6.length ==0||a7.length ==0||a8.length ==0||a9.length ==0||a10.length ==0||a11.length ==0)
    {
        alert( "Fill in Billing Address Details");
        return false;

    }
    else if (a1.length ==0||a2.length ==0||a3.length ==0||a4.length ==0||a5.length ==0)
    {
        alert( "Fill in payment Details");

        return false;
    }
    else{return true;}  
    

   
}
