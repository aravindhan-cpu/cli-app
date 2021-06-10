var readlinesync=require('readline-sync');

var score=0;

var username=readlinesync.question("what is your name: ")
console.log("welcome "+username+" do you know aravind??")

var highScore={
  name:"aravind",
  score:16
}

function play(que){
  var levelscore=0
  for(i=0;i<que.length;i++){
  var currentQuestion=que[i].question;
  var currentanswer=que[i].answer;
  var useranswer=readlinesync.question(currentQuestion)
  
  if(useranswer== currentanswer){
    console.log("you entered correct answer")
    score+=1
    levelscore+=1
  }  
  else{
    console.log("you entered wrong answer")
  }
  console.log("currentscore= "+score) 
  }
 return levelscore;
}
console.log("------------------")




var questions=[{
  question:"1)where do aravind live???\n a)dindigul \n b)madurai \n c)trichy\n ",
  answer:"a"
},
{
  question:"2)what is aravind age???\n a)20 \n b)22\n c)23\n",
  answer:"a"
},
{
  question:"3)what color aravind like? \n a)red\n b)green\n c)blue\n",
  answer:"c"
},
{
  question:"4)what is aravind favourite food??? \n a)lemon rice\n b)chappathi\n c)vegetable briyani\n",
  answer:"b"
}
]

var questions1=[{
  question:"1)what is aravind favorite game??\n a)pubg \n b)freefire\n c)call of duty\n",
  answer:"a"
},
{
  question:"2)what is aravind dream bike???\n a)rx100 \n b)fazer\n c)ktm\n",
  answer:"a"
},
{
  question:"3)which company phone aravind have now?\n a)vivo \n b)oppo\n c)redmi\n",
  answer:"c"
},
{
  question:"4)what is aravind dream job???\n a)military \n b)software engineer \n c)racer\n",
  answer:"b"
  }
]
var questions2=[{
  question:"1)who is aravind favorite actor??\n a)vijay\n b)ajith\n c)no one\n",
  answer:"c"
},{
  question:"2)what is aravind home colour ???\n a)gray\n b)orange\n c)green\n",
  answer:"a"
},{
  question:"3)which company headphone aravind have now?\na)vivo \n b)oppo\n c)redmi\n",
  answer:"c"
},{
  question:"4)who is aravind favourite character in marvel avengers ??? \na)thor \n b)ironman\n c)antman\n",
  answer:"b"
}]
 
var questions3=[{
  question:"1)what is aravind favorite movie in hollywood?? \na)fast and furiuos\n b)venom\n c)transporter\n",
  answer:"a"
},{
  question:"2)what company laptop aravind have???\na)dell \n b)vivo\n c)redmi\n",
  answer:"a"
},{
  question:"3)which outdoor game does he love to play??\n a)volleyball\n b)cricket\n c)football\n",
  answer:"b"
},{
  question:"4)who is aravind favourite character in justice league ???\na)superman \n b)batman\n c)wonder women\n",
  answer:"c"
}]  

var arr=[questions,questions1,questions2,questions3]

function main(){
  for(var i=0;i<arr.length;i++){
  var currentQuestion=arr[i];
  var levelscore=play(currentQuestion);
  console.log(levelscore);
  if(levelscore<3&&i==4){
    console.log("Your score is <3");
    console.log("You cannot proceed to next level");
    break;
  }
  }
}

main();

console.log("good your score is "+score)
if(highScore.score<=score){
  console.log("name: "+username)
  console.log("score: "+score)
  console.log("super you scored highscore")
}