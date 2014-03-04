
var toBeFind;
var x,y,z;
var op, op1,op2;
var isFinished=true;
var res,test;
 // element that player has to find

function get_text(a, toBeFind) {
	if(toBeFind==a)
		return "?";
	else
		return a;
}

function display_text(x, op, y, res) {

	ctx.fillText(
		x
		+"  "+
		op
		+"  "+
		y
		+"  =  "+
		res, 130, 230
	);
}

function display_text2(x, op1, y, op2, z, res) {

	switch(test){
		case 0 : ctx.fillText("? "+op1+" "+y+" "+op2+" "+z+" = "+res, 130, 230); break;
		case 1 : ctx.fillText(x+" "+op1+" ? "+op2+" "+z+" = "+res, 130, 230); break;
		case 2 : ctx.fillText(x+" "+op1+" "+y+" "+op2+" ? "+" = "+res, 130, 230); break;
		//case 3 : ctx.fillText(x+" "+op1+" "+y+" "+op2+" "+x+" = ?"+res, 130, 230); break;
	}
}

function corps_a_corps() {
	 op = generate_op();
	if(op=="+" || op=="-") {
		x = generate_int(42);
		y = generate_int(42);
	}
	if(op=="*" || op=="/") {
		x = generate_int(10);
		y = generate_int(10);
		if(op=="/") {
			while(y==0)
				y = generate_int(10); // otherwise x/y won't be defined
		}
	}
	res = evaluate(x, op, y);
	if(op=="/")
		if(res-Math.round(res) != 0) // res is not an integer
			do {
				op = generate_op() ;
				res = evaluate(x, op, y);
			}while(res-Math.round(res) != 0 && op=="/");
	if(res<0){
		var temp=x;
		x=y;
		y=temp;
		res=-res;
	}
	
	isFinished=false;
}

function calculator() {
	// Each expression looks like : x (*ou/) y (+ou-ou*ou/) z. We did it like this to do not waste time
	res=0;
	op1 = generate_op2();
	op2 = generate_op();
	x = generate_int(10);
	y = generate_int(10);
	if(op1=="/")
		while( y==0 || x/y-Math.round(x/y)!=0 )
			y = generate_int(10); // otherwise either x/y won't be defined or x/y won't be an integer
	res = evaluate(x, op1, y);
	/*display_text(x, op1, y, res);
	return ;*/
	
	// Algo de corps_a_corps applique à res et z et op2
	
	if(op2=="+" || op2=="-") {
		// res value is known
		z = generate_int(42);
	}
	if(op2=="*" || op2=="/") {
		if(res<=10)
			;
		else {
			x = generate_int(10);
			y = generate_int(10);
			res =  evaluate(x, op1, y);
		}
		z = generate_int(10);
		if(op2=="/") {
			while( z==0 && res/z-Math.random(res/z)!=0)
				z = generate_int(10); // otherwise either res/z won't be defined or res/z won't be an integer
		}
	}
	temp = res;
	temp = evaluate(temp, op2, z);
	if(op2=="/")
		if(temp-Math.floor(temp) != 0) // res is not an integer
			do {
				op2 = generate_op() ;
				temp = evaluate(res, op2, z);
			}while(temp-Math.floor(temp) != 0);
		
			res=temp;
			if(op2=="-")
				if(res<0) {
					op2 = "+";
					res = evaluate( evaluate(x, op1, y), op2, z);
				}


				test=Math.random()
				test *= 3;
				test = Math.floor(test);
			isFinished=false;

}

function battle() {
	ctx.fillStyle = "white";
	ctx.font = "15pt Calibri,Geneva,Arial";
	if(isFinished){
		if(name=="Attaque")
			corps_a_corps();
		else 
			calculator();
	}
	if(name=="Attaque")
		display_text(x, op, y, "?");
	else
		display_text2(x, op1, y, op2, z, res);


}