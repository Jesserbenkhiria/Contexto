//mix the word 
function mix(word){
    var str=""
   for(var i=0;i<word.length;i++){
     if(i % 2 === 0){
        str = str + word[i]
     }else{
        str = word[i]+str
     }
   }return str 
  }

//get random number 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
 
//check if the word is close 

function check(word,input){
  var simular = 0 
  for(var i = 0 ; i < word.length ; i++){
    if(word[i]===input[i]){
        simular++
    }
  }return simular >= Math.trunc(word.length/2)
}


//check if all the letters like  the given 
function checkexist(word,input){
    var check = true 
    for(var i=0 ; i<word.length;i++){
        if(input.indexOf(word[i])=== -1){
            check = false  
        }
    }
    return check 
}






function StartGame(){
   var  instance = {}
   instance.words = ["music","video","night","topic","entry","blood","entry","buyer","hotel","apple","chest","actor","youth","pizza","child","guest","depth","queen","woman","tooth","death",
    "bicycle",
    "flannel",
    "diamond",
    "perform",
    "sandbox",
    "vitamin",
    "quicken",
    "inflate",
    "luggage",
    "pizzazz",
    "control",
    "freedom",
    "inspect",
    "journey",
    "musical",
    "outdoor",
    "package",
    "quickly",
    "reshape",
    "satisfy",
    "trouble",
    "upgrade",
    "venture",
    "whisper",
    "yankees",
    "zeroes",
    "awesome",
    "balance",
    "capture",
    "density"
  ];
  
   instance.playeroneword 
   instance.playertwoword 
   instance.getplayeroneword = getword1
   return instance
}


var getword1 = function(){
     wordIndex = getRandomInt(this.words.length)
     theWord = this.words[wordIndex]
     mixedWord = mix(theWord)
    this.playeroneword = {i:wordIndex,w:theWord,m:mixedWord,guess:0}
}



// create new instance 
var newGame = StartGame()
newGame.getplayeroneword() // generate player one word 
console.log(newGame.playeroneword.guess)

//SETUP the game for player 1 
$("#theword1").text((newGame.playeroneword.m).toUpperCase())
$("#score").text(newGame.playeroneword.guess)



$("#player1text").on("keypress",function(e){
    if(e.which == 13){
    console.log(newGame.playeroneword.w)
    var nguess = 5
    var playeroneinput = $("#player1text").val()
    var newword =  $("<li></li>").text((playeroneinput).toUpperCase())
    console.log(playeroneinput)
    if(checkexist(newGame.playeroneword.w.toUpperCase(),playeroneinput.toUpperCase())){
        $("#player1text").css("border","solid white 2px")
            //if he surpass the limite 
            if(newGame.playeroneword.guess === nguess){
                 $("#result").text("You Don't guesses it was "+newGame.playeroneword.w)
                 
                 $("#btn1"). attr("disabled", true)
            }
            else
             //he is close
            if(check(newGame.playeroneword.w.toUpperCase(),playeroneinput.toUpperCase())){
                newword.css("background","#EF7D31")
                $("#p1word").append(newword)
        
                // wrong
            } else if(newGame.playeroneword.w.toUpperCase() !== playeroneinput.toUpperCase()){
                newword.css("background"," #F91880")
                $("#p1word").append(newword)
            }
            //he won 
            if(newGame.playeroneword.w.toUpperCase() === playeroneinput.toUpperCase()){
                newword.css("background","#00BA7C")
                $("#player1text").prop( "disabled", true );
                $("#p1word").append(newword)
                $("#result").text("You guesses the word ")
                
            }
            console.log(newGame.playeroneword.guess)
            newGame.playeroneword.guess +=1
            $("#score").text(newGame.playeroneword.guess)
            
    }
    else {console.log("im here")
    $("#player1text").css("border","solid red 1px")}
}
 })



$("#replay").on("click",function(){
    location.reload()
})

$("#surrander").on("click",function(){
    $("#theword1").text((newGame.playeroneword.w).toUpperCase())
    $("#player1text").prop( "disabled", true );
})