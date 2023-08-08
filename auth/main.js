
var users = []


function makeUser(email,pass){
    return {
        email : email ,
        pass : pass 
    }
}

function addUser(email,pass){
    users.push(makeUser(email,pass))
}

function check(user,pass){
    for(var i = 0 ; i<users.length ; i++){
        if((users[i].email === user)&&(users[i].pass === pass)){
            return true 
        }else{
            return false 
        }
    }
}

addUser("jesserbenkhiria911@gmail.com","KJKSZPJOKER123j@")

$("#sign").on("click",function(){
    location.href='signup.html'
})

   $("#log").on("click", function() {
    var pass = $("#logpass").val()
    var email = $("#loguser").val()
    var regex = /^(?=.*[a-z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if((email === "")){
        $(".res").text("Please Enter Your Email")
      }else if((email.indexOf("@")=== -1)||(email.length<8)){
        $(".res").text("Check Email")
      }else
   if((pass === "")){
    $(".res").text("Please Enter Your Password")
   }
   else if(regex.test(pass)===false){
    $(".res").text("Check Your Password Please ")
   }else{
    if(check(email,pass)){
        location.href='../context.html'
        $(".res").css("color","green")
    }else{
        $(".res").text("You don't have a account")
        $(".res").css("color","green")
    }

   }
    } )


$("#signup").on("click",function(){
   var email = $("#email").val()
   var user = $("#user").val()
   var pass = $("#pass").val()
   var checkpass = $("#checkpass").val()
   var regex = /^(?=.*[a-z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   if(email === ""){
    $("#sin").text("Please Enter Your real Email")
}else if(user === ""){
    $("#sin").text("Please Enter Your userName")
}
else if(regex.test(pass)===false){
    $("#sin").text("use a strong password")
}else if(pass !== checkpass ){
    console.log("problem")
    $("#sin").text("pass and check should be the same")
}else{
    localStorage.setItem(user,JSON.stringify(makeUser(email,pass)))
    location.href='../context.html'
}


})



