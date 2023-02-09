//[STEP 0]: Make sure our document is A-OK
    //what kind of interface we want at the start 
    const APIKEY = "63e279d9478852088da67e71";
    
  
    $("#register").on("click", function (e) {
      e.preventDefault();

      let username = $("#username").val();
      let password = $("#password").val();

      let jsondata = {
        "username": username,
        "password": password,
        "point":0.00
        
      };
  
      //[STEP 4]: Create our AJAX settings. Take note of API key
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://asst2-22ba.restdb.io/rest/profile",
        "method": "POST", //[cher] we will use post to send info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        
      }
      
      //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
      var req=$.ajax(settings)
      req.done(function (response) {
       alert("register successfully")
        
        
      });
      req.fail(function(fail){
        alert("Username Existed")
      });
    });//end click 
    
  
   
    
    
  
  function order()
  {
    if(localStorage.getItem("point") >= document.getElementById("fclaim").value)
    {
      alert("Order Successfully")
      var a=localStorage.getItem("point")-document.getElementById("fclaim").value
      document.getElementById("totalpoint").innerHTML=sessionStorage.getItem("ttotal")-document.getElementById("fclaim").value;
      localStorage.removeItem("point")
      localStorage.setItem("point",a)
      
      let point1 =localStorage.getItem("point");
      let username1 = localStorage.getItem("username")
      let password1= localStorage.getItem("password")
      let id1 = localStorage.getItem("id")
      var jsondata = { 
        "username" : username1,
        "password":password1,
        "point":point1,
        
      }
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://asst2-22ba.restdb.io/rest/profile/${id1}`,
        "method": "PUT",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "63e279d9478852088da67e71",
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
      }
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
       
    }
    else
    {
      alert("Order Failed. Insufficient balance")
    }
    
  }