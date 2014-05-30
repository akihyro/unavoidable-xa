// xaと書いて草と読む

// 草の生え具合を調整する定数
var XA_STYLE = "color:green";
var XA_LETTERS = [ "ｗ", "Ｗ" ];
var XA_MIN_LENGTH = 1;
var XA_MAX_LENGTH = 3;

// 草を生むファンクション
function make_xa() {
  var xa = "";
  var length = Math.floor(
    Math.random() * (XA_MAX_LENGTH - XA_MIN_LENGTH + 1) + XA_MIN_LENGTH
  );
  while (length-- > 0)
    xa += XA_LETTERS[Math.floor(Math.random() * XA_LETTERS.length)];
  return "<span style='" + XA_STYLE + "'>" + xa + "</span>";
}

// HTML中に草を生やすファンクション
function grow_xa(html) {
  return html.replace(
    /[、。]/g,
    function() { return make_xa(); }
  ).replace(
    /([）])/g,
    function() { return make_xa() + RegExp.$1; }
  ).replace(
    /([^>\s]+)(\s*<)/g,
    function() { return RegExp.$1 + make_xa() + RegExp.$2; }
  );
}

// 画面全体に草を生やす
document.body.innerHTML = grow_xa(document.body.innerHTML);
