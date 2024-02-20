// window.onload = StampsSrc;
// function changeonclick() {
//   element = document.getElementById("")
// }
// addEventListener("click", (event) => { });

// onclick = (event) => { };

// function StampsSrc() {
//   var Stamps = (
//     "./image/Stamps/Stamps1.webp",
//     "./image/Stamps/Stamps2.webp"
//   )
//   var Stampssrc = Math.floor(Math.random() * Stamps.length)
//   document.getElementById("Stamps").src = Stamps[Stampssrc]
// }

// var Stamps = StampsSrc();

// function ShuBiao() {
//   var a_idx = 0;
//   jQuery(document).ready(function ($) {
//     $("body").click(function (e) {
//       var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
//       var $i = $("<span/>").text(a[a_idx]);
//       a_idx = (a_idx + 1) % a.length;
//       var x = e.pageX, y = e.pageY;
//       $i.css({ "z-index": -1, "top": y - 20, "left": x, "position": "absolute", "color": "#FFF", "font-size": "14px" });
//       $("body").append($i);
//       $i.animate({ "top": y - 180, "opacity": 0 }, 1500, function () { $i.remove(); });
//     });
//   });
// }