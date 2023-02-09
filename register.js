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
    
  
   
    function updatepoint(){
      alert(point)
    let point =localStorage.getItem("point");
    let username = localStorage.getItem("username")
    let password = localStorage.getItem("password")
    let id = localStorage.getItem("id")
    var jsondata = { 
      "username" : username,
      "password":password,
      "point":point,
      
    }
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": `https://asst2-22ba.restdb.io/rest/profile/${id}`,
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
  
