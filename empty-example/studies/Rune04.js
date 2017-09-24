//---------------Daily Studies:04------------------------

var r = new Rune({
container: "#canvas",
width: 600,
height: 600,
//debug: true
})

var background = r.rect(0,0,r.width,r.height)
                  .fill(200)
                  .stroke(false);

var grid = r.grid({
  x: 0,
  y: 0,
  width: r.width ,
  height: r.height ,
  gutter: 25,
  columns: 3,
  rows: 3
});

r.circle(r.width/2, r.height/2, 50);

var ra = 30;
var group = r.group(r.width/2,r.height/2);
var offset = 0;
var numColors = 35;
var angle = 360 / numColors;
var accelR = 0.5;
var circles = [];


for(var i=0;i<2;i++){
  var x = Rune.random(r.width);
  var y = Rune.random(r.height);
  var circle = r.circle(x,y, 40,group)
    .fill(false)
    .stroke()
    .strokeWidth(0.25);
circles.push(circle);

} 

r.on("update", function(){ 
  for(i=0;i<circles.length;i++){
var colAngle = i*numColors; 
var x = Math.cos(Rune.radians(ra)+offset) * 200;
var y = Math.sin(Rune.radians(ra)+offset) * 200;
circles[i].move(x,y)
          .fill("hsv",colAngle,60,80);
offset += 0.015;
  }
  ra += 0.025 ;
})

r.play();



//------------Daily Studies:04|10/05/2017----------------