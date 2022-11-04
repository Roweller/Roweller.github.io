// 点击出字
var a_idx = 0;
jQuery(document).ready(function ($) {
  $("body").click(function (e) {
    // 点击弹出文字数组
    var a = new Array
      ("冲冲冲", "栓Q", "emo", "yyds", "淦", "锦鲤", "冲鸭", "欧克", "安排" ,"皮一下");
    var $i = $("<span/>").text(a[a_idx]);
    a_idx = (a_idx + 1) % a.length;
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 5,
      "top": y - 20,
      "left": x,
      "position": "absolute",
      "font-weight": "bold",
      "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
    });
    $("body").append($i);
    $i.animate({
      "top": y - 180,
      "opacity": 0
    },
      3000,
      function () {
        $i.remove();
      });
  });
  setTimeout('delay()', 2000);
});

function delay () {
  $(".buryit").removeAttr("onclick");
}

