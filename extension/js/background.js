// 現時点でのruleをクリア(removeRules)して
chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  // 新たなruleを追加する
  chrome.declarativeContent.onPageChanged.addRules([
    {
      conditions: [
        // アクションを実行する条件
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: "qin.ovice.in" },
        }),
      ],
      // 実行するアクション
      actions: [new chrome.declarativeContent.ShowPageAction()],
    },
  ]);
});

// 拡張機能がインストールされたときの処理
chrome.runtime.onInstalled.addListener(function () {
  // 親階層のメニューを生成
  const parent_menu2 = chrome.contextMenus.create({
    type: "normal",
    id: "users",
    title: "ユーザー一覧",
  });
  const parent_menu = chrome.contextMenus.create({
    type: "normal",
    id: "parent",
    title: "背景色を変えるメニュー",
  });

  //子階層のメニューを親(parent_menu)に追加
  chrome.contextMenus.create({
    id: "red",
    parentId: parent_menu,
    title: "赤色",
  });

  chrome.contextMenus.create({
    id: "blue",
    parentId: parent_menu,
    title: "青色",
  });
});

/**
 * メニューが選択されたときの処理
 * 選択されたアイテムはこちらの関数の引数に入ってくる(今回は item)
 * menuItemIdでmenuのidが文字列で取得できる
 */
chrome.contextMenus.onClicked.addListener(function (item) {
  console.log("メニューがクリックされたよ");
  if (item.menuItemId === "users") {
    chrome.tabs.executeScript({
      code: "console.log(ovice);",
    });
  } else {
    // 選ばれたメニューのidが item.menuItemId で取得できる
    chrome.tabs.executeScript({
      code: "document.body.style.backgroundColor = '" + item.menuItemId + "'",
    });
  }
});
