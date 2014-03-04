var input = 0;
var sel_item=1;

var pvbar=70;
var pvbarMax=70;
var pmbar=70;
var pmbarMax=70;

var pvbarMonster=70;
var pvbarMaxMonster=70;

var imgMenu = new Image();
			imgMenu.src="img/menu.png";
			imgMenu.onload = function() {
        		ctx.drawImage(imgMenu, 0, 0);
      		};

function getInput(e) {
		input = window.event ? e.keyCode : e.which;
	}

function menu() {
	window.document.onkeydown = getInput;
	var KEY_DOWN = 40, KEY_UP = 38, KEY_LEFT = 37, KEY_RIGHT = 39;
	var items = new Array(1,2,3,4);
	 // the 1st item is selected by default. Selected items are in yellow and the others are in black

	switch(input) {
		
		case KEY_RIGHT: 
			switch(sel_item){
				case 1:sel_item=2;break;
				case 2:sel_item=1;break;
				case 3:sel_item=4;break;
				case 4:sel_item=3;break;
			}
			break;
		case KEY_LEFT:
			switch(sel_item){
				case 1:sel_item=2;break;
				case 2:sel_item=1;break;
				case 3:sel_item=4;break;
				case 4:sel_item=3;break;
			}
			break;
		case KEY_DOWN:
			switch(sel_item){
				case 1:sel_item=3;break;
				case 2:sel_item=4;break;
				case 3:sel_item=1;break;
				case 4:sel_item=2;break;
			}
			break;
		case KEY_UP:	
			switch(sel_item){
				case 1:sel_item=3;break;
				case 2:sel_item=4;break;
				case 3:sel_item=1;break;
				case 4:sel_item=2;break;
			}
			break;
		}
		if(input==KEY_UP || input==KEY_DOWN || input==KEY_RIGHT || input==KEY_LEFT)
			input=0;

	ctx.fillStyle ="black";
	ctx.fillRect(10,10,480,50);

	ctx.drawImage(imgMenu, 0, 240);

	ctx.fillRect(120,250,125,40);
	ctx.fillRect(120+10+125,250,125,40);
	ctx.fillRect(120,250+40+10,125,40);
	ctx.fillRect(120+10+125,300,125,40);
	
	
	//Stats hero
	ctx.font="16px Arial";
	ctx.fillStyle="white";
	ctx.fillText("Boris",10,264);

	ctx.fillStyle = "black";
	ctx.fillRect(10, 272, 70,5);
	ctx.fillStyle = "green";
	ctx.fillRect(10, 272, pmbar,5);
	ctx.font="10px Arial";
	ctx.fillText(pmHero+"/"+pmMaxHero,82,278)

	ctx.fillStyle = "black";
	ctx.fillRect(10, 265, 70,5);
	ctx.fillStyle = "red";
	ctx.fillRect(10, 265, pvbar,5);
	ctx.font="10px Arial";
	ctx.fillText(pvHero+"/"+pvMaxHero,82,270);


if(tour=='you' && isFinished){
	ctx.fillStyle = "#B21212";
	if(sel_item==1) {
		ctx.fillRect(120,250,125,40);
		ctx.fillStyle="white";
		ctx.font="14px Arial"
		ctx.fillText("Le personnage tape 4 fois en résolvant des calculs simples.",20,40);
	}
	if(sel_item==2) {
		ctx.fillRect(120+10+125,250,125,40);
		ctx.fillStyle="white";
		ctx.font="14px Arial"
		ctx.fillText("Attaque puissante utilisée en résolvant un calcul plus complexe.",20,40);
	}
	if(sel_item==3) {
		ctx.fillRect(120,250+40+10,125,40);
		ctx.fillStyle='white';
		ctx.font="14px Arial"
		ctx.fillText("Permet d'avoir plus de temps pour résoudre les calculs pendant 3 tours.",20,40);
	}
	if(sel_item==4) {
		ctx.fillRect(120+10+125,300,125,40);
		ctx.fillStyle="white";
		ctx.font="14px Arial"
		ctx.fillText("Permet d'avoir des indices pour résoudre les calculs pendant 3 tours.",20,40);
	}
}
	ctx.font="16px Arial";
	ctx.fillStyle="white";
	ctx.fillText("Attaque",125,275);
	ctx.fillText("Calculator",120+10+125+5,275);
	ctx.fillText("Ralentissement",125,275+40+10);
	ctx.fillText("Clairvoyance",120+10+125+5,275+40+10);
	ctx.font="10px Arial";
	ctx.fillText("0 phos",210,288);
	ctx.fillText("2 phos",345,288);
	ctx.fillText("5 phos",210,338);
	ctx.fillText("5 phos",345,338);

	//Stats monstre
	ctx.fillStyle="white";
	ctx.font="16px Arial";
	ctx.fillText("Adam",385,264);

	ctx.fillStyle = "black";
	ctx.fillRect(385, 265, 70,5);
	ctx.fillStyle = "red";
	ctx.fillRect(385, 265, pvbarMonster,5);
	ctx.font="10px Arial";
	ctx.fillText(pvAdam+"/"+pvMaxAdam,457,270);


}