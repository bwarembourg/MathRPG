var heroX=50;
var heroY=130;
var posHero="middleu";

var pvHero=25;
var pvMaxHero=25;

var pmHero=20;
var pmMaxHero=20;

var countHero=0;

var imgHero = new Image();
imgHero.src="img/hero.png";
imgHero.onload = function() {
        ctx.drawImage(imgHero, heroX, heroY);
      };

function drawHero(){
	ctx.drawImage(imgHero,heroX,heroY);
}

function animateHero(){
	countHero++;
	if(countHero==8){
		countHero=0;
		if(posHero=="middleu"){
			posHero="up";
			heroY-=5;
		}
		else if(posHero=="middled"){
			posHero="down";
			heroY+=5;
			}
		else if(posHero=="up"){
			posHero="middled";
			heroY-=5;
		}
		else if(posHero=="down"){
			heroY+=5;
			posHero="middleu";
		}
	}
	drawHero();
}