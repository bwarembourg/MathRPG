var ogreX=350;
var ogreY=130;
var ogreIncr=10;
var posOgre="middleu";

var pvAdam = 30;
var pvMaxAdam = 30;

var countOgre=0;

var imgOgre = new Image();
imgOgre.src="img/ogre.png";
imgOgre.onload = function() {
        ctx.drawImage(imgOgre, ogreX, ogreY);
      };

function drawOgre(){
	ctx.drawImage(imgOgre,ogreX,ogreY);
}

function animateOgre(){
	countOgre++;
	if(countOgre==12){
		countOgre=0;
		if(posOgre=="middleu"){
			posOgre="up";
			ogreY-=5;
		}
		else if(posOgre=="middled"){
			posOgre="down";
			ogreY+=5;
			}
		else if(posOgre=="up"){
			posOgre="middled";
			ogreY-=5;
		}
		else if(posOgre=="down"){
			ogreY+=5;
			posOgre="middleu";
		}
	}
	drawOgre();
}