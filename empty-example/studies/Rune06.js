//---------------Daily Studies:06------------------------

var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  debug: true
})

var backgroundColor = r.rect(0,0,r.width,r.height)
                      .fill(220)
                      .stroke(false);

var posX = 50;
var posY = 50;
var group =r.group(75,80);
var size = 50;

for(var x = 0; x < r.width-100; x+=size) {
for(var y = 0; y < r.height-100; y+=size) {
  var myRectangle = r.rect((x+posX),(y+posY), size, size)
                      .stroke(100)
                      .fill(160)
if((x+size)%4 == 0){
  myRectangle.fill(20,150,0)
      } else if((y+size)%6) {
  myRectangle.fill(0,0,200)
      }
  }
}

r.draw();

//------------Daily Studies:06|12/05/2017----------------