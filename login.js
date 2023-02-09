//[STEP 0]: Make sure our document is A-OK
    //what kind of interface we want at the start 
    $(document).ready(function(){

    const APIKEY = "63e279d9478852088da67e71";
    
  
    $("#register").on("click", function (e) {
      e.preventDefault();

      let username1 = $("#username").val();
      let password = $("#password").val();

      let jsondata = {
        "username": username1,
        "password": password,
        
      };
  
      //[STEP 4]: Create our AJAX settings. Take note of API key
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://asst2-22ba.restdb.io/rest/profile",
        "method": "GET", //[cher] we will use post to send info
        "headers": {
          "content-type": "application/json",
          "x-apikey": "63e279d9478852088da67e71",
          "cache-control": "no-cache"
        },
        
        
      }
      
      //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
      var req=$.ajax(settings)
      req.done(function (response) {
        let content = "";
        for (var i = 0; i < response.length; i++) {
            if(response[i].username == username1){
                if(response[i].password == password){
                    alert("Login Successful")
                    localStorage.setItem("username",username1)
                    localStorage.setItem("id",response[i]._id)
                    localStorage.setItem("password",response[i].password)
                    localStorage.setItem("point",response[i].point)

                }
            }
            
            else{
                console.log("Incorrect username or password.")
            }
        }

        
      });
      
    });//end click 
  
    });
  
    function openForm() {
      document.getElementById("myForm").style.display = "block";
      document.getElementById("displayname").innerHTML="user "+ localStorage.getItem("username")+"\n"
      document.getElementById("point").innerHTML="point "+ localStorage.getItem("point")
    }
    
    function closeForm() {
      document.getElementById("myForm").style.display = "none";
      document.getElementById("myForm2").style.display = "none";


    }
  
   
  