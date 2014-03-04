function generate_int(max) {
	var x = Math.random();
	x *= max;
	return Math.round(x);
}

function generate_op2() {
	var a = generate_int(2);
	if(a==0)
		return "+" ;
	if(a==1)
		return "-" ;
	if(a==2)
		return "*" ;
}

function generate_op() {
	var a = generate_int(3);
	if(a==0)
		return "+" ;
	if(a==1)
		return "-" ;
	if(a==2)
		return "*" ;
	if(a==3)
		return "/" ;
}

function generate_op2() {
	var a = generate_int(1);
	if(a==0)
		return "*" ;
	if(a==1)
		return "/" ;
}

function evaluate(a, op, b) {
	if(op=="+")
		return a+b;
	if(op=="-")
		return a-b;
	if(op=="*")
		return a*b;
	if(op=="/")
		return a/b;
}

function maths() {
	//window.document.onkeydown = getInput;
	ctx.fillStyle = "black";
	ctx.fillRect(120,210,150,30);

	battle() ;

}