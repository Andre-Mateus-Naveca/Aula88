var canvas = new fabric.Canvas('myCanvas');
var blockImageWidth = 30;
var blockImageHeigth = 30;
var playerX = 10;
var playerY = 10;
var playerObject = "";
var blockImageObject = "";

function playerUpdate()
{
    fabric.Image.fromURL("player.png", function(Img) {
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,left:playerX
        });
        canvas.add(playerObject);
    });
}

function newImage(getImage)
{
    fabric.Image.fromURL(getImage, function(Img) {
        blockImageObject = Img;

        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeigth);
        blockImageObject.set({
            top:playerY,left:playerX
        });
        canvas.add(blockImageObject);
    });
}
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
keyPressed = e.keyCode;
console.log(keyPressed)
if(e.shiftKey == true && keyPressed == '80')
{
    console.log("as teclas p e shist pressionadas juntas");
    blockImageWidth = blockImageWidth + 10;
    blockImageHeigth = blockImageHeigth + 10;
    document.getElementById("currentWidth").innerHTML = blockImageWidth;
    document.getElementById("currentHeight").innerHTML = blockImageHeigth;
}

if(e.shiftKey == true && keyPressed == '77' )
{blockImageWidth = blockImageWidth - 10;
    blockImageHeigth = blockImageHeigth - 10;
    document.getElementById("currentWidth").innerHTML = blockImageWidth;
    document.getElementById("currentHeight").innerHTML = blockImageHeigth;
    
}
if(keyPressed == '38')
{
    up();
    console.log("up");
}

if(keyPressed == '40')
{
    down();
    console.log("down");
}
if(keyPressed == '39')
{
    right();
    console.log("right");
}
if(keyPressed == '37')
{
    left();
    console.log("left");
}
if(keyPressed == '87')
{
    newImage('wall.jpg');
    console.log("w");
}
if(keyPressed == '84')
{
    newImage('trunk.jpg');
    console.log("t");
}
if(keyPressed == '68')
{
    newImage('dark_green.png');
    console.log("d");
}
if(keyPressed == '76')
{
    newImage('light_green.png');
    console.log("l");
}
if(keyPressed == '71')
{
    newImage('ground.png');
    console.log("g");
}
if(keyPressed == '89')
{
    newImage('yellow_wall.png');
    console.log("y");
}
if(keyPressed == '67')
{
    newImage('cloud.jpg');
    console.log("c");
}
if(keyPressed == '85')
{
    newImage('unique.png');
    console.log("u");
}
if(keyPressed == '82')
{
    newImage('roof.jpg');
    console.log("r");
}
}

function up()
{
    if(playerY >=0)
    {
        playerY = playerY - blockImageHeigth;
        console.log("altura da imagem do bloco = " + blockImageHeigth);
        console.log("Quando a tecla direcional Cima for pressionada, X = " + playerX + ", Y = " + playerY);
        canvas.remove(playerObject);
            playerUpdate();
    }
}

function down()
{
if(playerY <=500)
 {
 playerY = playerY + blockImageHeigth;
 console.log("altura da imagem do bloco =  " + blockImageHeigth);
 console.log("Quando a tecla direcional Baixo for pressionda, X =  " + playerX + " ,  Y = "+playerY);
 canvas.remove(playerObject);
 playerUpdate();
 }
}
function left()
{
 if(playerX >=0)
 {
  playerX = playerX - blockImageWidth;
  console.log("largura da imagem do bloco =  " + blockImageWidth);
  console.log("Quando a trecla direcional Esquerda for pressionada, X =  " + playerX + " , Y = "+playerY);
  canvas.remove(playerObject);
  playerUpdate();
 }
}
function right()
{
 if(playerX <=800)
 {
  playerX = playerX + blockImageWidth;
  console.log("largura da imagem do bloco =  " + blockImageWidth);
  console.log("Quando a trecla direcional Esquerda for pressionada, X =  " + playerX + " , Y = "+playerY);
  canvas.remove(playerObject);
  playerUpdate();
 }
}
