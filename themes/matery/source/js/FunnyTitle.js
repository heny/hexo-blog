// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
var iconEl = $('[rel="icon"]')
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      iconEl.attr('href', "https://cdn.jsdelivr.net/gh/Yafine/cdn@2.5/source/favicon.png");
      document.title = 'ヽ(●-`Д´-)ノ你要玩捉迷藏嘛';
      clearTimeout(titleTime);
    }
    else {
      iconEl.attr('href', "https://cdn.jsdelivr.net/gh/Yafine/cdn@2.5/source/favicon.png");
        document.title = 'ヾ(Ő∀Ő3)ノ好哦！' + OriginTitle;
        titleTime = setTimeout(function () {
          iconEl.attr('href', 'https://notecdn.heny.vip/favicon.ico')
          document.title = OriginTitle;
        }, 2000);
    }
});
