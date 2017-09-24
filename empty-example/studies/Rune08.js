//---------------Daily Studies:08------------------------

var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600
});

// Create colors
// -------------------------------------

var colors = [
  [ new Rune.Color('hsv', 0, 85, 22), new Rune.Color('hsv', 0, 80, 77, 0.8) ],  // reds
  [ new Rune.Color('hsv', 85, 84, 20), new Rune.Color('hsv', 85, 79, 38, 0.8) ], // greens
  [ new Rune.Color('hsv', 205, 28, 48), new Rune.Color('hsv', 205, 18, 59, 0.8) ], // blues
  [ new Rune.Color('hsv', 43, 94, 59), new Rune.Color('hsv', 43, 91, 89, 0.8) ], // yellows
];

// Find random points for the gray line
// -------------------------------------

var noise = new Rune.Noise();
var linePoints = [];

var x = 300;
var y = 100;


while (x < 1000) {
  // increment x with a random amount
  x += Rune.random(160, 350);
  // use noise to find a y value from 500 to 600.
  y = 500 + (noise.get(x / 500) * 500);
  // push this point into the array
  linePoints.push(new Rune.Vector(x, y));
}


var cur = 0;
var curLine = 0;
var backgroundColor = r.rect(0,0,r.width,r.height)
                        .fill(200)
                        .stroke(false)

r.on('update', function(){
  

  for(var i=0; i<linePoints.length-1; i++) 
  {
      var bottomLeft = linePoints[i];
      var bottomRight = linePoints[i+1];

      var ranHeightY = Rune.random(150,350);
      var ranHeightX = Rune.random(150,350);

      var shape = [{fromVec: new Rune.Vector(bottomLeft.x, bottomLeft.y), toVec: new Rune.Vector(ranHeightX, ranHeightY)}];

      // console.log(shape)

      var pos = shape[curLine].fromVec.lerp(shape[curLine].toVec, cur)

      // console.log(pos);

      var colorset = colors[Math.floor(Rune.random(colors.length))];
      // console.log(colorset);

      r.rect(pos.x, pos.y, 5, 5)
       .fill(colorset[1])
       .stroke(false);
       
       // .closePath(); r.path(pos.x, pos.y)
       // .curveTo(pos.x+5,pos.y+5,pos.x, pos.y)
       // .fill("5a72a0")
     

      // r.path(pos.x, pos.y)
      //   .lineTo(0,pos.x)
      //   .curveTo(pos.x,pos.x+100,pos.y+100,pos.x+300,pos.y)
      //   .stroke("5a72a0")
      //   .fill("5a72a0")
      //   .closePath();

      cur += 0.001;

      if(cur > 1) {
      curLine++;
      cur = 0;
    }

   if(!shape[curLine]) r.pause()
  } 
  

});


r.play();

//window.addEventListener('load', init());



//------------Daily Studies:08|14/05/2017----------------