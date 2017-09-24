//---------------Daily Studies:05------------------------


var r = new Rune({
container: "#canvas",
width: 600,
height: 600
})

var backgroundColor = r.rect(0,0,r.width,r.height)
                      .fill(142,158,255)
                      .stroke(false);



var size = 100;
var offset = 25;

for(var x = 0; x <= r.width; x += size)
{
  for(var y = 0; y <= r.height; y += size)
  {
    var patternGroup = drawPattern(x-50, y-50, size);
  }
}


function drawPattern(x, y, size)
{
  for(var i = 0; i < 3; i++)
  {
    r.polygon(x, y)
      .lineTo(0, 0)
      .lineTo(0, size)
      .lineTo(size, size)
      .fill(Rune.random(142),250,189,Rune.random(0.2,1))
      .rotate(i * 90, x, y)
      .stroke()
      .strokeWidth(0.2);
  }
  for(var j = 0; j < 1; j++){
      r.polygon(x+offset, y+offset)
      .lineTo(0, 0)
      .lineTo(0, size/2)
      .lineTo(size/2, size/2)
      .lineTo(size/2,0)
      .fill(Rune.random(255),Rune.random(0.2,1))
      .stroke()
      .strokeWidth(0.2);
}
  for(var m = 0; m < 1; m++){
      r.polygon(x-(size/4), y-(size/4))
      .lineTo(0, 0)
      .lineTo(0, size/2)
      .lineTo(size/2, size/2)
      .lineTo(size/2,0)
      .fill(Rune.random(255),Rune.random(0.2,1))
      .stroke()
      .strokeWidth(0.2);
}
}

var frame = r.rect(0,0,r.width,r.height)
            .fill(false)
            .stroke(255)
             .strokeWidth(50);

var frameStroke = r.rect(25,25,550,550)
            .fill(false)
            .stroke()
            .strokeWidth(0.5);

r.draw();

//------------Daily Studies:05|11/05/2017----------------