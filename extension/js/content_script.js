let script = document.createElement("script");
script.innerHTML = `
function testBtn(){
  let userList = [];
  ovice.webrtc.users().forEach((item)=>{
    if(item.name){
      userList.push(item.name + "_[" + item.x + "x" + item.y + "]");
    };
  });
  alert(userList.join('\\n'));
};
function badgeBtn(){
  let arr = [];
  ovice.webrtc.users().forEach((user) => {
    if (user.name && user.badge) {
      if (arr[user.badge]) {
        arr[user.badge]['count'] += 1, arr[user.badge]['users'].push(user.name)
      } else {
        arr.push(user.badge);
        arr[user.badge] = {
          'count': 1,
          'users': [user.name]
        }
      }
    }
  });
  alert(arr.toString());
}
function megaphone(){
  ovice.setMegaphone(!ovice.megaphone());
};
function archives(){
  window.open('https://qin.salon/archives');
}
function IT_daigaku(){
  window.open('https://www.youtube.com/c/shimabu_it/videos');
}
function QinTechBoard(){
  window.open('https://qin-tech-board.vercel.app/');
}
function kanyoKanjiCyusen(){
  let user = ovice.webrtc.getUser(ovice.userId());
  let users = [];
  ovice.webrtc.users().forEach((item) => {
    if (item.name && (item.x < 450 && item.y > 750)) {
      users.push(item.name);
    }
  });
  if(users.length==0){
    alert('幹事希望者が誰もいないッ！！');
    return
  }
  let userList = '@' + users.join('\\n@');
  alert(userList);
  const e = document.createElement('input');
  e.value = userList;
  document.querySelector('body').append(e);
  e.select();
  document.execCommand('copy');
  e.remove();
  console.log(userList);
  window.popup = window.open('https://qin-who-next.netlify.app/');
}
function kanyoCyusen(){
  let user = ovice.webrtc.getUser(ovice.userId());
  let users = [];
  ovice.webrtc.users().forEach((item) => {
    if (item.name && (item.x < 970 && item.y > 750)) {
      users.push(item.name);
    }
  });
  if(users.length==0){
    alert('雑談の間には誰もいないッ！！');
    return
  }
  let userList = '@' + users.join('\\n@');
  alert(userList);
  const e = document.createElement('input');
  e.value = userList;
  document.querySelector('body').append(e);
  e.select();
  document.execCommand('copy');
  e.remove();
  console.log(userList);
  window.popup = window.open('https://qin-who-next.netlify.app/');
}
`;
document.body.appendChild(script);

let btns = document.createElement("div");
btns.style.position = "fixed";
btns.style.zIndex = 9999;
btns.style.top = "10px";
btns.style.right = "10px";
btns.style.display = "flex";
btns.style.flexDirection = "column";
btns.innerHTML = `
<button onClick="kanyoKanjiCyusen();" style="font-size:1.4rem;width:50px;height:50px;" title="Kanyo幹事抽選補助ツール"><i class="fa fa-child"></i></button>
<button onClick="kanyoCyusen();" style="font-size:1.4rem;width:50px;height:50px;" title="Kanyo抽選補助ツール"><i class="fa fa-cube"></i></button>
<button onClick="testBtn();" style="font-size:1.4rem;width:50px;height:50px;" title="ユーザーリスト"><i class="fa fa-users"></i></button>
<button onClick="badgeBtn();" style="font-size:1.4rem;width:50px;height:50px;" title="アイコンリスト"><i class="fa fa-bullseye"></i></button>
<button onClick="megaphone();" style="font-size:1.4rem;width:50px;height:50px;" title="メガホン"><i class="fa fa-bullhorn"></i></button>
<button onClick="archives();" style="font-size:1.4rem;width:50px;height:50px;" title="アーカイブ"><i class="fa fa-archive"></i></button>
<button onClick="IT_daigaku();" style="font-size:1.4rem;width:50px;height:50px;" title="しまぶーのIT大学"><i class="fa fa-graduation-cap"></i></button>
<button onClick="QinTechBoard();" style="font-size:1.4rem;width:50px;height:50px;" title="QinTechBoard"><i class="fa fa-book"></i></button>
`;
document.body.appendChild(btns);
