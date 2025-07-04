var ImgBox = document.querySelector(".img-box"); // ✅ fixed selector
var imgWrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg"); // ✅ typo fixed
 var line = document.getElementById("line"); // you didn’t use it

originalImg.style.width = ImgBox.offsetWidth + "px";
var leftSpace = ImgBox.getBoundingClientRect().left;
// ✅ typo: was OffsetLeft

ImgBox.onmousemove = function (e) {
var boxWidth = e.clientX - leftSpace;          // ✅ just a number
imgWrap.style.width = boxWidth + "px";        // ✅ add px here
line.style.left = boxWidth + "px";            // ✅ add px here too

};
