var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, canvas.width, canvas.height);

var fishArray = [];
var foodArray = [];
var coinArray = [];
var balance = 200
var foodCount = 1
var foodtype = 1


balanceText = document.getElementById("balance")

var xtrue = false
var ytrue = false

