let mklet = document.createElement("script");
mklet.src = "//cti-tl.github.io/mklet/js/mklet.js";
document.body.appendChild(mklet);

let oviceTools = document.createElement("script");
oviceTools.src = "//cti-tl.github.io/mklet/js/oviceTools.js";
document.body.appendChild(oviceTools);

// let axios_cdn = document.createElement("script");
// axios_cdn.src = "//cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
// document.body.appendChild(axios_cdn);

let script = document.createElement("script");
script.innerHTML = `
function testBtn(){
  let userList = [];
  ovice.webrtc.users().forEach((item)=>{
    if(item.name){
      userList.push(item.name + " [" + item.x + "x" + item.y + "]");
    };
  });
  mklet.makeWindow((win, e) => {
    userList.forEach((user)=>{
      let ele = document.createElement('div');
      ele.innerHTML = '<label style="padding-top:3px;font-size:1.5rem;"><input type="checkbox"> ' + user + '</input></label>';
      win.appendChild(ele);
    });
  });
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
  console.log(arr);
  mklet.makeWindow((win, e) => {
    Object.keys(arr).forEach((key)=>{
      if(arr[key].users){
        let ele = document.createElement('div');
        ele.innerHTML = '<img src="' + key + '" width="18px" height="18px">count:' + arr[key].count + '<div>users:</div><div style="display:flex;flex-direction: row;flex-wrap: wrap;"><div style="margin:2px;">' + arr[key].users.join('</div><div style="margin:2px;">') + '</div></div>';
        win.appendChild(ele);
      }
    });
  });
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
<button onClick="badgeBtn();" style="font-size:1.4rem;width:50px;height:50px;" title="アイコンリスト"><i class="fa fa-certificate"></i></button>
<button onClick="archives();" style="font-size:1.4rem;width:50px;height:50px;" title="アーカイブ"><i class="fa fa-archive"></i></button>
<button onClick="IT_daigaku();" style="font-size:1.4rem;width:50px;height:50px;" title="しまぶーのIT大学"><i class="fa fa-graduation-cap"></i></button>
<button onClick="QinTechBoard();" style="font-size:1.4rem;width:50px;height:50px;" title="QinTechBoard"><i class="fa fa-book"></i></button>
`;
document.body.appendChild(btns);
