function validate(form_id,email_id){

var reg = /^([A-Za-z0-9_\-\.]+){1,}\@([A-Za-z0-9_\-\.]+){1,}\.([A-Za-z]+){2,4}$/;

var address = document.forms[form_id].elements[email_id].value;
if(reg.test(address) == false){

alert("inavlid email please enter valid email id");
return false;

}


}
