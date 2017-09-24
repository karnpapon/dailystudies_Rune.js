//---------------Daily Studies:13------------------------


var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
   debug: true,
});

var backgroundColor = r.rect(0,0,r.width,r.height).fill(20,20,100).stroke(false);

var grid = r.grid({
	x: 30, y: 30,
	width: r.width-60,
	height: r.height-60,
	gutter: 15,
	columns: 5, rows: 5
})
var colorR = 200;
var colorG = 0;
var colorB = 20;

for(var j=1; j<7;j = j+2) {
for (var i=0;i<10;i++) {
var thick =	r.rect(0+10*i,0,5,grid.state.moduleHeight)
 			 .stroke(false).fill(colorR, colorG, colorB)	
grid.add(thick,1,j)}}

for(var j=2; j<5;j = j+2) {
for (var i=0;i<10;i++) {
var thick =	r.rect(0,0+10*i,grid.state.moduleWidth*2+grid.state.gutter,5)
 			 .stroke(false).fill(colorR, colorG, colorB)	
grid.add(thick,j,5)}}

r.draw();



//------------Daily Studies:13|21/05/2017----------------