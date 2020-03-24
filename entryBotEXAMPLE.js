var lastID="";
var text;
var id;
var botName;
var like;
var user;
var created;
console.log("-----------made by ex-----------");
console.log("---지금부터 봇 가동이 시작됩니다--");
alert("BOT - 실행됨");
function comment(a){
  $.ajax({
    url:"/api/comment",
    dataType:"json",
    type:"POST",
    data:{
      content: "["+botName+"] "+a,
      target: id,
      targetSubject: "discuss",
      targetType: "individual"
    }
  });
}
function write(a,b,c){
  $.ajax({
    url:"./api/discuss/",
    type:"POST",
    data:{
      content:a,
      title:b,
      groupNotice:false,
      images:[],
      category:c
    }
  });
}
function same(stringA,stringB){
  if(stringB.length>stringA.length){
    var temp = stringB;
    stringB=stringA;
    stringA=temp;
  }
  var ao=0;
  var af=0;
  ao=stringB.length;
  af=stringA.length;
  var count=0;
  for(var i=0;i<ao;i++){
    for(var j=0;j<af;j++){
      if(stringB.charAt(i)==stringA.charAt(j)){
        count++;
        break;
      }
    }
  }
  return (count/af)*100;
}
setInterval(() => {
  $.get('https://playentry.org/api/discuss/find?category=free', d => {
    text=d.data[0].title;
    id=d.data[0]._id;
    like=d.data[0].likesLength;
    user=d.data[0].owner;
    user=user.username;
    created=d.data[0].created;
    $.get('https://playentry.org/api/discuss/'+id, d => {
      content=d.content;
    })
  })
  if(id != lastID){
    lastID=id;
    run();
  }
},220);
function run(){
  //----------------------여기서부터 코드 시작------------------------------------------------------------------
  botName="기본봇";
  if(text=="핑"){
    comment("퐁!");
  }//예제코드
  //write("","제목","free");
  //comment("내용");
  //text 글 제목
  //id 글 아이디
  //like 글 좋아요 수
  //user 글쓴이
  //created 만들어진 날짜 시간
  //content 글내용
  //same("비교할 대상","비교할 대상 ") 두 문자열에 같은 정도를 백분율로 표시해 줍니다
}
