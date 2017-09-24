//---------------Daily Studies:10------------------------

var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,

});

// var backgroundColor = r.rect(0,0,r.width,r.height).fill('hsv',200,120,50).stroke(false);
var backgroundColor = r.rect(0,0,r.width,r.height).fill(245).stroke(false);

var patternBlock = function(numX,numY,stepX,moveX,moveY,randLine,strokeWd,rotateX){

for(var y=numX; y<numY; y = y+stepX) {

	for(var x=numX; x<numY; x = x+stepX) {
	var randomX = Rune.random(-5,5);
	var randomYup = Rune.random(-2,10);
	var randomYdown = Rune.random(-5,5);
	r.line(x,y+randLine,x+randomX,y+5,group1)
	 .fill(false)
	 .stroke(0,0,Rune.random(100,255))
	 .strokeWidth(strokeWd)
	 .strokeCap("ROUND")
   .move(moveX,moveY,true)
   .rotate(rotateX)
	}
}
}

// for(i=0;i<25;i++){
//   var rgb = hsluv.hsluvToRgb([22*i, 100, 7*i]);
//      r.rect(0,i*60,r.width,r.height)
//       .fill(rgb[0]*255,rgb[1]*255,rgb[2]*255)
//       .stroke(false);
// }

var group1 = r.group(50,50);
var block1 = patternBlock(30,250,8,0,0,5,1.5);
var block2 = patternBlock(30,250,8,230,0,2,1);
var block3 = patternBlock(30,250,8,0,230,3,1);
var block4 = patternBlock(30,250,8,230,230,4,1.5);


r.draw();

//------------Daily Studies:10|16/05/2017----------------