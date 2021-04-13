let email = document.getElementById("Email");
let error = document.getElementById("error");
let phonenum = document.getElementById("phonenum");
let pherror = document.getElementById("pherror");
let emailnav = document.getElementById("Emailnav");
let erroremailnav = document.getElementById("errornav");
let password = document.getElementById("password");
let passerror = document.getElementById("passerror");
let confirmpwd = document.getElementById("confirmpwd");
let conpwderror = document.getElementById("confirm-pwd-error");
let pwdnav = document.getElementById("pwdnav");
let pwdnaverror = document.getElementById("pwdnaverror");
function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)[.]([a-z]{2,3})(.[a-z]{2,3})?$/g;
    if(regexp.test(email.value)){
        error.innerHTML ="";
        error.style.color ="green";
        email.style.border="1px solid green";
        error.style.fontWeight ="thin";
        return true;
    }
    else if(email.value==""){
        error.innerHTML ="Please give your Email";
        error.style.color ="red";
        error.style.fontWeight ="thin";
        email.style.border ="1px solid red";
        return false;
    }
    else{
        error.innerHTML = "invalid Email";
        error.style.color ="red";
        error.style.fontWeight ="thin";
        email.style.border ="1px solid red";
        return false;
    }
}
function validateph(){
    let regexpph =/^\(?[0-9]{3}\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regexpph.test(phonenum.value)){
        pherror.innerHTML ="";
        pherror.style.color ="green";
        phonenum.style.border ="1px solid green";
        return true;
    }
    else if(phonenum.value==""){
        pherror.innerHTML ="Please give Phone number";
        pherror.style.color ="red";
        pherror.style.fontWeight ="thin";
        phonenum.style.border ="1px solid red";
        return false;

    }
    else{
        pherror.innerHTML ="Please give valid Phone number";
        pherror.style.color ="red";
        pherror.style.fontWeight ="thin";
        phonenum.style.border ="1px solid red";
        return false;
    }
}
function validateemailnav(){
    let regexpemail =  /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)[.]([a-z]{2,3})(.[a-z]{2,3})?$/g;
    if(regexpemail.test(emailnav.value)){
        erroremailnav.innerHTML ="";
        emailnav.style.border="1px solid green";
        return true;
    }
    else if(emailnav.value==""){
        erroremailnav.innerHTML ="Please give your Email";
        erroremailnav.style.color ="red";
        emailnav.style.border ="1px solid red";
        return false;
    }
    else{
        erroremailnav.innerHTML ="Invalid Email";
        erroremailnav.style.color ="red";
        emailnav.style.border ="1px solid red";
        return false;
    }
}
function validatepassword(){
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])(?=.*\\W))|((?=.*[a-z])(?=.*[0-9])(?=.*\\W))|((?=.*[A-Z])(?=.*[a-z])(?=.*\\W))).*$", "g");
    var enoughRegex = new RegExp("(?=.{3,}).*", "g");
    if(password.value== ""){
        passerror.innerHTML ="Type password";
        password.style.border="1px solid red";
        passerror.style.color="red";   
    }
   else if(false == enoughRegex.test(password.value)){
     passerror.innerHTML="Too Short";
     passerror.style.color="black";
     password.style.border="2px solid black";
   }
   else if(strongRegex.test(password.value)){
       passerror.innerHTML="Strong";
       passerror.style.color="green";
       password.style.border="2px solid green"
       return true;
   }
   else if(mediumRegex.test(password.value)){
       passerror.innerHTML="Medium";
       passerror.style.color="orange";
       password.style.border="2px solid orange";
       return false;
   }
   else{
       passerror.innerHTML="Poor";
       passerror.style.color="red";
       password.style.border="2px solid red";
       return false;
   }
   
    
}
function validateconfirmpwd(){
    if(password.value==confirmpwd.value){
        return true;
    }
    else if(confirmpwd.value==""){
        conpwderror.innerHTML="Please confirm your Password ";
        confirmpwd.style.border="1px solid red";
        conpwderror.style.color="red";
    }
    else{
        conpwderror.innerHTML="Password doesn't match";
        conpwderror.style.color="red";
        confirmpwd.style.border="2px solid red";
        return false;
    }
}
function validatenavpass(){
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$", "g");
    if(strongRegex.test(pwdnav.value)){
        return true;
    }
    else if(pwdnav.value==""){
        pwdnaverror.innerHTML="Type Password";
        pwdnav.style.border="1px solid red";
        pwdnaverror.style.color="red";
        return false;
    }
    else{
        pwdnaverror.innerHTML="Wrong Password";
        pwdnaverror.style.color="red";
        pwdnav.style.border="1px solid red";
        return false;
    }
}
