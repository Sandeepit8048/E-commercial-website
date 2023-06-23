let username = document.getElementById("us");
let password = document.getElementById("pass");
flag = 1;

function user(event){
 event.preventDefault();
 // console.log("hsahd")
 if(username.value == ""){
    document.getElementById("usererror").innerHTML="invalide";
    flag = 1;
 } 
 else if(username.value.length < 4)
 {
   document.getElementById("usererror").innerHTML="min 4 Letter";
   flag = 1;
 }
 else{
    document.getElementById("usererror").innerHTML=" ";
     flag = 0;
 }
 if(password.value == ""){
    document.getElementById("usercorrect").innerHTML="invalide";
    flag = 1;

 } else if(password.value.length <5){
    document.getElementById("usercorrect").innerHTML="min 5 inputs";
    flag = 1;

 }
 else{
    document.getElementById("usercorrect").innerHTML=" ";
    flag = 0;
 } 
  username.value ="";
  password.value="";
// var regex = /^(\d{1,2}-){2}\d{2}(\d{2})?$/;
// console.log(regex.test('01-01-1990'));
// true
}


//color change

function changeBG(color){
    document.body.style.backgroundColor = color;
    let txt = document.getElementsByClassName("section");
    if(color == "#000000"){
      for(let elm of txt){
        elm.style.color = "white";
      }
    }
    else{
        for(let elm of txt){
            elm.style.color = "black";
        }
    }
}         