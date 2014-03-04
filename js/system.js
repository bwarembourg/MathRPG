//can be 'you' or 'adv'
var tour='adv';
var timerSystem=0;
var timeCalc=0;
var damage=0;
var winningTime=0;
var sortSelected=false;
var response="";
var name;
var isEntered=false;
var effect=false,slow=false,see=false;
var counterEffect=0;
var win="";
var ra0,ra1,ra2,ra3;
var resultat=0;
var nbLoseCalc=0, nbWinCalc=0;

var counterAttaque=0;

var widthTimer=150;
var widthMaxTimer=150

function system(){
	if(tour=='you'){	

		if(input==13 && !sortSelected){
			sortSelected=true;
		}

		if(sortSelected){ //OK
			timerSystem++;

			//Message attaque
			
			name="";
			switch(sel_item){
				case 1 : name="Attaque"; break;
				case 2 : name="Calculator"; break;
				case 3 : name="Ralentissement"; break;
				case 4 : name="Clairvoyance"; break;
			}

			if(name=="Ralentissement" || name=="Clairvoyance"){
				if(pmHero>=5){
					effect=true;
				}
			}

			if(name=="Calculator"){
				if(timerSystem==28){
					pmHero -= 2;
				}

				pmbar = pmHero/pmMaxHero*pmbarMax;
			}

			if(effect){
				if(timerSystem==26){
					defineSee();
				}

				if(timerSystem==28){
					pmHero -= 5;
				}
				pmbar=pmHero/pmMaxHero*pmbarMax;
				if(timerSystem<120 && timerSystem>=30){
					ctx.fillStyle = "black";
					ctx.fillRect(10,10,480,50);
					ctx.fillStyle = "white";
					ctx.font= "16px Arial";
					if(name=="Ralentissement"){
						ctx.fillText("Boris dispose de plus de temps pour résoudre les calculs !",20,40);
						slow=true;
					}
					else{
						ctx.fillText("Boris dispose maintenant d'indices pour résoudre les calculs !",20,40);
						see=true;
					}
				}
				if(timerSystem==120){
					effect=false;
					tour="adv";
					timerSystem=0;
					input=0;
					sortSelected=false;
				}
			}

			if(timerSystem<30){
				ctx.fillStyle = "black";
				ctx.fillRect(10,10,480,50);
				ctx.fillStyle = "white";
				ctx.font= "16px Arial";
				ctx.fillText("Boris utilise \""+name+"\"",20,40);
			}
			else if(!isEntered && !effect ){
				maths();
				if(see)
					seeIt();
			}

			if(input >= 48 && input<=57){
				var ch = input-48;
				response+=ch;
				input=0;
			}
			else if(input>=96 && input<=105){
				var ch= input-96;
				response+=ch;
				input=0;
			}

			if(response!=""){
				ctx.fillStyle = "black";
				ctx.fillRect(275,210,105,30);
				ctx.fillStyle = "white";
				ctx.font = "16px Arial";
				ctx.fillText(response,280,230);

				if(input==13){
					if(name=="Calculator"){
						switch(test){
							case 0 : resultat=x; break;
							case 1 : resultat=y; break;
							case 2 : resultat=z; break;
						}

						if(response==resultat){
							isEntered=true;
							isFinished=true;
							win='yes';
							nbWinCalc++;
							winningTime=timerSystem;
							timerSystem=31;
						}
						else{
							isEntered=true;
							isFinished=true;
							win='no';
							nbLoseCalc++;
							timerSystem=31;
						}

					}
					else{	
						if(response==res){
							isEntered=true;
							isFinished=true;
							win='yes';
							nbWinCalc++;
							winningTime=timerSystem;
							timerSystem=31;
						}
						else{
							isEntered=true;
							isFinished=true;
							win='no';
							nbLoseCalc++;
							timerSystem=31;
						}
					}
					response="";
					input=0;
					//isFinished=true;
				}
			}
			
			if(!isFinished){

				ctx.fillStyle="white";
				ctx.fillRect(120,205,widthTimer,5);
				timeCalc;
				if(name=="Attaque")
					timeCalc=250;
				else if(name=="Calculator")
					timeCalc=600;
				if(slow)
					timeCalc+=300;
				var diff = (timeCalc-timerSystem)/timeCalc;
				if(diff>=0)
					widthTimer = diff * widthMaxTimer;
				if(widthTimer==0){
					win="timesup";
					nbLoseCalc++;
					isFinished=true;
					isEntered=true;																																	
				}
			}
			
			if(isEntered || win=="timesup"){
				ctx.fillStyle = "black";
				ctx.fillRect(10,10,480,50);
				ctx.fillStyle = "white";
				ctx.font= "16px Arial";
					if(win=='yes'){
						//ctx.fillText(winningTime,50,50);
						if(winningTime<1/3*timeCalc){
							damage=3;
						}
						else if(winningTime>1/3*timeCalc && winningTime<2/3*timeCalc){
							damage=2;
						}
						else if(winningTime>2/3*timeCalc){
							damage=1;
						}
						if(name=="Calculator"){
							damage +=10;
						}
						
						ctx.fillText("Bravo ! Boris inflige "+damage+" dommage(s)",20,40);	
						if(timerSystem==62 || timerSystem==64 || timerSystem==66){
							heroX += 15;
						}
						if(timerSystem==68 || timerSystem==70 || timerSystem==72){
							heroX -= 15;
						}
						if(timerSystem==120){
							pvAdam -= damage;
							if(pvAdam>=0)
								pvbarMonster = pvAdam/pvMaxAdam * pvbarMaxMonster;
							else{
								pvbarMonster=0;
								pvAdam=0;

							}

						}
						if(pvAdam<=0){
							if(timerSystem==122 || timerSystem==124 || timerSystem== 126 || timerSystem == 128 || timerSystem ==130 || timerSystem==132){
								ogreY+=20;
							}
							if(timerSystem==133){
								localStorage['lose']=nbLoseCalc;
								localStorage['win']=nbWinCalc;
								//alert(nbLoseCalc+"-"+nbWinCalc);
							}

							if(timerSystem==134){
								
								location.replace("winscreen.html");
							}
						}

						if(timerSystem==180){
							if(name=='Attaque' && counterAttaque<3){
								counterAttaque++;
								tour='you';
							}
							else{
								sortSelected=false;
								counterAttaque=0;
								tour='adv';
							}
							isEntered=false;
							win="";
							response="";
							timerSystem=0;
						}
					}	
					else if(win=='no'){		
						ctx.fillText("Faux ! Boris manque son coup..",20,40);
						if(timerSystem==92){
						if(name=='Attaque' && counterAttaque<3){
								counterAttaque++;
								tour='you';
							}
							else{
								sortSelected=false;
								counterAttaque=0;
								tour='adv';
							}
							isEntered=false;
							win="";
							response="";
							timerSystem=0;
						}
					}
					else if(win=='timesup'){
						ctx.fillText("Plus de temps !",20,40);
						if(name=='Attaque' && counterAttaque<3){
								counterAttaque++;
								tour='you';
							}
							else{
								sortSelected=false;
								counterAttaque=0;
								tour='adv';
							}
						isEntered=false;
						win="";
						response="";
						input=0;
						timerSystem=0;
					}
				//isEntered=false;
				}

		}
	}
	else{
		ctx.fillStyle="white";
		ctx.font= "16px Arial";
		ctx.fillText("C'est au tour d'Adam !",20,40);
		timerSystem++;

		if(counterEffect>=3){
			see=false;
			slow=false;
			counterEffect=0;
		}

		if(timerSystem>=60){
			ctx.fillStyle = "black";
			ctx.fillRect(10,10,480,50);
			ctx.font= "16px Arial";
			ctx.fillStyle = "white";
			ctx.fillText("Adam utilise \"Vengeance d'Eve\"",20,40);

			if(timerSystem==62 || timerSystem==64 || timerSystem==66){
				ogreX -= 15;
			}
			if(timerSystem==68 || timerSystem==70 || timerSystem==72){
				ogreX += 15;
			}
			if(timerSystem==120){
				damage= Math.floor((Math.random()*3)+2);
				pvHero -= damage;
				pvbar = pvHero/pvMaxHero * pvbarMax;
			}

			if(timerSystem>120){
				ctx.fillStyle = "black";
				ctx.fillRect(10,10,480,50);
				ctx.fillStyle = "white";
				ctx.fillText("Adam vous inflige "+damage+" dommage(s)",20,40);
			}

			
		}
		if(timerSystem==180){
			tour='you';
			timerSystem=0;
			if(slow || see){
				counterEffect++;
			}


		}
	}

}

function die(){

}

function seeIt(){
	ctx.fillStyle="black";
	ctx.fillRect(120,175,260,30);
	ctx.fillStyle="white";
	ctx.font="16px Arial";
	if(name=="Attaque"){
		
		ctx.fillText("Clairvoyance : "+ra0+" - "+ra1+" - "+ra2+" - "+res,125,190);
	}
	else{
		switch(test){
			case 0 : resultat=x; break;
			case 1 : resultat=y; break;
			case 2 : resultat=z; break;
			case 3 : resultat=res; break;
		}
		ctx.fillText("Clairvoyance : "+ra0+" - "+ra1+" - "+ra2+" - "+resultat
		,125,190);	
	}
}


function defineSee(){
	ra0 = Math.random()*42;
	ra0 = Math.floor(ra0);

	ra1 = Math.random()*42;
	ra1 = Math.floor(ra1);

	ra2 = Math.random()*42;
	ra2 = Math.floor(ra2);
}