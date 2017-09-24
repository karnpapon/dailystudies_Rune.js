//---------------Daily Studies:14------------------------

var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  // debug: true,
})
var backgroundColor = r.rect(0,0,r.width,r.height).fill('hsv',38,60,91).stroke(false);

var group = r.group(30,30)
for(var j = 0; j < r.height; j+=36){
  var HorizontalStroke = r.line(0,0+j,540,0+j,group).fill(false).stroke(120).strokeWidth(2);
  var vertitalStroke = r.line(0+j,0,0+j,540,group).fill(false).stroke(120).strokeWidth(2);
}


var grid = r.grid({
	x: 30,
	y: 30,
	width: r.width-60,
	height: r.height-60,
	gutter: 0,
	columns: 15,
	rows: 15
})

var gridX = grid.state.moduleWidth;
var gridY = grid.state.moduleHeight;


for(var row = 2; row < 16; row++) {
	var color = Math.floor(Rune.random(150,180));
	for(var col = 2; col < 16; col++) {
  var numRandom = Math.floor(Rune.random(0,20))
	if(numRandom < 10) {
    var dot = r.circle(gridX,gridY,10)
			         .stroke(false)
		           .fill(30)
	} else if(numRandom > 10 < 15 ) {
    var dot = r.circle(-gridX,-gridY,10)
			         .stroke(false)
		           .fill(255,255,255)
	}
  grid.add(dot,col,row)
console.log(numRandom)
	}
}


r.draw();

//------------Daily Studies:14|24/05/2017----------------