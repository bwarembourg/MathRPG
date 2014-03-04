
			var squareX=0;
			var squareY=0;
			var incrementY=10;
			
			function animateSquare(){
				squareY+=incrementY;
				drawSquare();
			}
			
			function drawSquare(){
				ctx.fillStyle="#0000FF";
				ctx.fillRect(squareX,squareY,50,50);
			}
			