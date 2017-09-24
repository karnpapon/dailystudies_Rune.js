//---------------Daily Studies:12------------------------

var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  //debug: true,
});
var backgroundColor = r.rect(0,0,r.width,r.height).fill(80).stroke(false);


var grid = r.grid({
	x: 30,
	y: 30,
	width: r.width-60,
	height: r.height-60,
	gutter: 0,
	columns: 15,
	rows: 15
})

var g1 = 9;
var g2 = 0.7;
var g3 = 4.8;

console.log(g1);

var centerX = grid.state.moduleWidth;
var centerY = grid.state.moduleHeight;

for(var i=1;i<14;i++){
  for(var posY=1;posY<14;posY++){
     var rgb = hsluv.hsluvToRgb([Math.floor(115+g1+posY),Math.floor(130-g2-i),Math.floor(90-g3)]);
     var PUCS = r.rect(i*centerX,posY*centerY,centerX,centerY)
      .fill(rgb[0]*255,rgb[1]*255,rgb[2]*255)
      .stroke(false)
      .strokeWidth(2)
      grid.add(PUCS,0,0)

      g2 += 2.4;
      g3 += 0.35;
    
     
}
      g1 += 10;
}

var randColors = 250;
var size = 5;

for(var row = 0; row < 15; row++) {
	
var waveX = Math.cos(Rune.radians(45)*5);
var waveY = Math.sin(Rune.radians(45)*5); 

	for(var col = 0; col < 15; col++) {

	var ranNum = Rune.random(0,1);
  var rgb = hsluv.hsluvToRgb([Rune.random(randColors)*col, 60*col, 50]);

	var dot = r.circle(centerX,centerY,(waveX*waveY)*size)
			   .stroke(false)
         .strokeWidth(2)
			   .fill(255)
	grid.add(dot,col,row)

}
size += 0.8;
}

r.draw();


//------------Daily Studies:12|20/05/2017----------------