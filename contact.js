function validate(){
    var name = document.getElementById("txt_name").value;
    var subject = document.getElementById("txt_subject").value;
    var phone = document.getElementById("txt_phone").value;
    var email = document.getElementById("txt_email").value;
    var message = document.getElementById("txt_message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 1){
      text = "Please enter your name";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please enter valid email address";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 8){
      text = "Please enter valid phone number";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 1){
      text = "Please enter a subject";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length == 0){
      text = "Please enter your message";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }
