let lastID="";
let text;
let id;
let botName;
let like;
let owner;
let created;
console.log("-----------made by ex-----------");
console.log("---지금부터 봇 가동이 시작됩니다--");
alert("BOT - 실행됨");
const comment = (a) => {
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
const write = (a,b,c) => {
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
setInterval(() => {
  $.get('https://playentry.org/api/discuss/find?category=free', d => {
    text=d.data[0].title;
    id=d.data[0]._id;
    like=d.data[0].likesLength;
    owner=d.data[0].owner;
    created=d.data[0].created;
  })
  if(id != lastID){
    lastID=id;
    run();
  }
},220);
const run = () => {
  //----------------------여기서부터 코드 시작------------------------------------------------------------------
  botName="기본봇";
  if(text=="핑"){
    comment("퐁!");
  }//예제코드
  //write("제목","내용",free);
  //comment("내용");
  //text 글 제목
  //id 글 아이디
  //like 글 좋아요 수
  //user 글쓴이
  //created 만들어진 날짜 시간
}
