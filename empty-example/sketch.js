//Daily Studies
//--------------------Daily Studies:01-------------------
//setup

// var r = new Rune({
//   container: "#canvas",
//   width: 600,
//   height: 600
// });

// //-------------------------------------------------------

// var backgroundColor = r.rect(0,0,r.width,r.height)
// .fill(190)
// .stroke(false);

// var gridX = 5;
// var gridY = 5;
// var circleGroup = r.group(80,80);
// var diemeter = 35;

// for(var x = 0; x < gridX; x++)
//   {
//     for(var y = 0; y < gridY; y++)
//     {
//       var circ = r.circle(x * 110, y * 110, diemeter, circleGroup)
//         .fill(Rune.random(30,150))
//         .stroke(false);

//         var circ2 = r.circle(x*110,y*110,diemeter/1.5,circleGroup)
//       .fill(Rune.random(30,150))
//         .stroke(false);

//       var circ3 = r.circle(x*110,y*110,diemeter/3,circleGroup)
//       .fill(Rune.random(30,150))
//       .stroke(false);
//     }
//   }
//   r.draw();
  
//-------------------------------------------------------

/*function drawCircle(x, y, size)
{
  r.circle(x, y, size, circleGroup)
    .fill(Rune.random(30, 200))
    .stroke(false);

  if(size > 10)
  {
    drawCircle(x, y, size-10);
  }
}

var circleFormat = drawCircle(0, 0, 38);
circleFormat;

for(var x =0;x<gridX;x++){
  for(var y=0;y<gridY;y++){
 //draw pattern-circle
circleFormat

  }
}
*/
//------------Daily Studies:01|07/05/2017----------------
//-------------------------------------------------------
//---------------Daily Studies:02------------------------

/*
var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  debug: true
});

var gridX = 5;
var gridY = 5;
var backgroundColor = r.rect(0,0,r.width,r.height)
                        .stroke(false)
                        .fill(200);


var polys = r.polygon(0,0);
var numRand = 50 ;

var group2 = r.group(50,200);


var path = r.path(50, 50)
  .closePath()
  .fill(false)
  .stroke(100);
for(var i=0;i<numRand;i++){
  path.lineTo(Math.random()*500, Math.random()*500)
};

var polys = path.toPolygons({ spacing: 25 });

for(var i = 0; i < polys.length; i++) {

  var poly = polys[i];
  poly.move(0, 0, group2);

  for(var j = 0; j < poly.state.vectors.length; j++) {
    var vec = poly.state.vectors[j];
    vec.x += Rune.random(-3, 3);
    vec.y += Rune.random(-3, 3);
    r.circle(poly.state.x + vec.x, poly.state.y + vec.y, Math.random()*9, Math.random()*9);
  } 
}

r.draw();

//------------Daily Studies:02|08/05/2017----------------
//-------------------------------------------------------
//---------------Daily Studies:03------------------------
/*
var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  debug: true
});

var backgroundColor = r.rect(0,0,r.width,r.height)
                      .fill(222);

var grid = r.grid({
  x: 100,
  y: 100,
  width: r.width - 200,
  height: r.height - 200,
  gutter: 25,
  columns: 3,
  rows: 3
});

var numObject = 100;
var opacit = 1;

//-------------------------------------------------------
var size = 30;

for(var i = 0; i < numObject; i++)
{
  var color = new Rune.Color(Rune.random(0, 255),opacit);
  var x = r.random(size, grid.state.moduleWidth - size);
  var y = r.random(size, grid.state.moduleHeight - size);
  var rectan = r.rect(x, y, 10,10)
                .fill(color)
                .stroke(false);

  var randomCol = Math.round(Rune.random(grid.state.rows));
  grid.add(rectan, randomCol, 3);


}
//-------------------------------------------------------
for(var i = 0; i < numObject; i++)
{
  var color = new Rune.Color(Rune.random(0, 255),opacit);
  var x = r.random(size, grid.state.moduleWidth - size);
  var y = r.random(size, grid.state.moduleHeight - size);
  var circle = r.circle(x, y, 7)
                .fill(color)
                .stroke(false);

  var randomCol = Math.round(Rune.random(grid.state.rows));
  grid.add(circle, randomCol, 2);
}

//-------------------------------------------------------


for(var i = 1; i < numObject; i++)
{
  var color = new Rune.Color(Rune.random(0, 255),opacit);
  var x = r.random(size, grid.state.moduleWidth - size);
  var y = r.random(size, grid.state.moduleWidth - size);
  var triangle = r.triangle(0, 0, 0,20,20,0)
                  .move(x,y)
                  .fill(color)
                  .stroke(false);      
  
  var randomCol = Math.round(Rune.random(grid.state.rows));
  grid.add(triangle, randomCol, 1);
}
//grid.scale(2);
//grid.rotate(45,r.width/2,r.height/2)

r.draw();
*/
//------------Daily Studies:03|09/05/2017----------------
//-------------------------------------------------------
//---------------Daily Studies:04------------------------
/*
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

*/

//------------Daily Studies:04|10/05/2017----------------
//-------------------------------------------------------
//---------------Daily Studies:05------------------------

/*
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
*/
//------------Daily Studies:05|11/05/2017----------------
//-------------------------------------------------------
//---------------Daily Studies:06------------------------
/*
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
*/
//------------Daily Studies:06|12/05/2017----------------
//-------------------------------------------------------
//---------------Daily Studies:07------------------------

/*
var r = new Rune({

    container: "#canvas",
    width: 600,
    height: 600
})

var backgroundColor = r.rect(0,0,r.width,r.height)
                      .fill(200)


// mountain colors back to front
var colorlist = [
  new Rune.Color("#e9e4d0"), // mountain 1
  new Rune.Color("#fd4d29"), // 2
  new Rune.Color("#082d85"), // 3
];

// setup our perlin noise
var noise = new Rune.Noise().noiseDetail();
var noiseStep = 50;

// need to draw layers back to front
for (var i = 0; i < 3; i++) {
  //noise.noiseSeed(Rune.random(10)); // randomize each layer's seed so the mountains don't look the same

  // define origin point of current mountain
  // this will be the drawn base, which is somewhat below profile of mountain so they overlap well
  var height = r.height/2.0 + 80 * i; // space out terrain
  var mountain = r.polygon(0, height) // origin point - all lineTo commands are relative to this
    .fill(colorlist[i])
    .stroke(false);
  // mountain is drawn in 5 points (+2 base points)
  mountain.lineTo(0,0); // left base

  // lift of the base considerably
  mountain.lineTo(0, -noise.get(noiseStep));  // left border
  noiseStep += 0.5;

  // we are using noise as a subtle variation
  // notice the main component is a static value
  // we want the mountains to more or less follow the basic form
  mountain.lineTo(60 + noise.get(noiseStep)*140, -noise.get(noiseStep*2.0)*60 - 300); // first peak
  noiseStep += 0.1;

  mountain.lineTo(r.width/2-40+noise.get(noiseStep)*80, -120+noise.get(noiseStep*2.0)*30); // trough
  noiseStep += 0.1;

  mountain.lineTo(r.width-40 - noise.get(noiseStep)*120, -400+noise.get(noiseStep)*100); // second peak
  noiseStep += 0.1;

  //mountain.lineTo(r.width, -noise.get(noiseStep)*100 - 120); // right border
  mountain.lineTo(r.width,0); // right base
}

// draw paper tear in front of mountains
// different outlay on noise
var noise = new Rune.Noise().noiseDetail(0);
var tear = r.polygon(0, r.height) // start at bottom of canvas and draw up
  .fill(colorlist[1])
  .stroke(false);
var height = r.height/2-140;
tear.lineTo(0, 0);
tear.lineTo(0, height); // drawing upwards
// draw many jaged line points from left border to right
var step = 2; // horizontal steps per jag
var growth = 0;
for (var i = 0; i <= r.width/step; i += step) {
  var h = -height + noise.get(i*0.4)*8;
  growth += noise.get(i/120.0)*0.6 - 0.2; // just guess and checking on this one
  tear.lineTo(i * step, h-growth);
}
tear.lineTo(r.width, -height); // wrap up right side
tear.lineTo(r.width, 0);

r.draw();
*/
//------------Daily Studies:07|13/05/2017----------------
//-------------------------------------------------------
//---------------Daily Studies:08------------------------
/*
var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800
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
*/


//------------Daily Studies:08|14/05/2017----------------
//-------------------------------------------------------
//---------------Daily Studies:09------------------------
/*
var r = new Rune({

container: "#canvas",
width: 600,
height: 600
})


var group = r.group(60,30);

for(i=0;i<10;i++){
  var rgb = hsluv.hsluvToRgb([22*i, 100, 10*i]);
     r.rect(i*50,50,50,150,group)
      .fill(rgb[0]*255,rgb[1]*255,rgb[2]*255)
      .stroke(false);
}

for(i=0;i<10;i++){
  var rgb = hsluv.hsluvToRgb([100*i, 100, 50]);
     r.rect(i*50,205,50,150,group)
      .fill(rgb[0]*255,rgb[1]*255,rgb[2]*255)
      .stroke(false);
}

for(i=0;i<10;i++){
  var rgb = hsluv.hsluvToRgb([18*i, 100*i, 50]);
     r.rect(i*50,360,50,150,group)
      .fill(rgb[0]*255,rgb[1]*255,rgb[2]*255)
      .stroke(false);
}


r.draw();
*/
//------------Daily Studies:09|15/05/2017----------------
//-------------------------------------------------------
//---------------Daily Studies:10------------------------
/*
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
*/
//------------Daily Studies:10|16/05/2017----------------
//-------------------------------------------------------
//---------------Daily Studies:11------------------------
/*
var r = new Rune({
container: "#canvas",
width: 600,
height: 600

})
var size = 30;
var cols = 10;
var rows = 2;
var colors = [];
var arr = [];

for (var c = 0; c < cols; c++) {
    arr[c] = [];
    for(var r = 0; r < rows; r++) {
      arr[c][r] = Math.random(255);
    }
 }

var backgroundColor = r.rect(0,0,r.width,r.height).fill(200).stroke(false);

for(x=0;x<r.width;x+=size){
  for(y=0;y<r.height;y+=size){
    var grid = r.rect(x,y,size,size)
                .fill(80)
                .stroke(220);

  }
}

r.draw();

colors = arr;
*/

//-------------------------------------------------------
/*
var r = new Rune({
    container: "#canvas",
    width: 600,
    height: 600
});

//Adapt from Matthias Wandel's Shingles
r.rect(0,0,600,800).stroke(false).fill('hsv', 0, 30, 100);
var line = r.path(150,150).fill(false).stroke(70);

for(var theta = 20; theta<250; theta+=0.12) {
  var xt = Math.cos(theta*0.5)*theta ; 
  var yt = Math.sin(theta*0.5)*theta ; 
  var nthet = xt/70 + yt/70;
  var othet = xt/70 - yt/70;
  var yp = yt+Math.sin(nthet)*15;
  var xp = xt+Math.cos(nthet)*15;

  if(theta == 0) {
    line.moveTo(xt,yt);
  } else {
    line.lineTo(xp,yp)
  }
}


r.draw();
*/

//------------Daily Studies:11|17/05/2017----------------
//-------------------------------------------------------
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
//-------------------------------------------------------
//---------------Daily Studies:13------------------------

/*
var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
   debug: true,
});

var grid = r.grid({
	x: 30, y: 30,
	width: r.width-60,
	height: r.height-60,
	gutter: 15,
	columns: 5, rows: 5
})
var color = 30;

for(var j=1; j<7;j = j+2) {
for (var i=0;i<10;i++) {
var thick =	r.rect(0+10*i,0,5,grid.state.moduleHeight)
 			 .stroke(false).fill(color)	
grid.add(thick,1,j)}}

for(var j=2; j<5;j = j+2) {
for (var i=0;i<10;i++) {
var thick =	r.rect(0,0+10*i,grid.state.moduleWidth*2+grid.state.gutter,5)
 			 .stroke(false).fill(color)	
grid.add(thick,j,5)}}
*/

// for (var i=0;i<10;i++) {
// var thick =	r.rect(0+10*i,0,5,grid.state.moduleHeight*3+(grid.state.gutter*2))
//  			 .stroke(false).fill(color)	
// grid.add(thick,3,1)}

// for (var i=0;i<10;i++) {
// var thick =	r.rect(0,0+10*i,grid.state.moduleWidth*2+grid.state.gutter,5)
//  			 .stroke(false).fill(color)	
// grid.add(thick,4,3)}

// for (var i=0;i<10;i++) {
// var thick =	r.rect(grid.state.moduleWidth/2,0+10*i,grid.state.moduleWidth,5)
//  			 .stroke(false).fill(color)	
// grid.add(thick,1,2)}

// for(var j=1; j<6;j++){
// for (var i=0;i<10;i++) {
// 	var thick =	r.rect(0+10*i,0,5,grid.state.moduleHeight)
// 	 			 .stroke(false).fill(color)	
// 	grid.add(thick,j,4)}}

// for(var j=4;j<6;j++) {
// for (var i=0;i<11;i++) {
// 	var thick =	r.rect(0,0+10*i,grid.state.moduleWidth,5)
//      			 .stroke(false).fill(color)	
// 	grid.add(thick,j,1)}}


// r.draw();



//------------Daily Studies:13|21/05/2017----------------
//-------------------------------------------------------
//---------------Daily Studies:14------------------------
/*
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
*/
//------------Daily Studies:14|24/05/2017----------------
//-------------------------------------------------------
//---------------Daily Studies:15------------------------

/*
var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  // debug: true,
});

var noise = new Rune.Noise();
var noiseStep = 0;
var sinPath;
noise.noiseDetail(3); 

r.rect(0,0,600,800).fill(30).stroke(false);

function drawPath(x,y,radius,noiseMult) {
	sinPath = r.path(x,y)
	.fill(false)
	.stroke(255,0.8)

for(var j=0; j<40; j++) {
	for(var i=0; i<300; i++) {
		var x = 2*i
		var y = Math.sin(Rune.radians(i)) * radius 
				+ noise.get(noiseStep)*noiseMult;

		if(x==0) {
			sinPath.moveTo(x,y);
		} else {
			sinPath.lineTo(x,y);
		}
		noiseStep += 0.001;
	}
}}

drawPath(0,-200,20,800);



r.draw();
*/


//------------Daily Studies:15|28/05/2017----------------
//-------------------------------------------------------
//---------------Daily Studies:16------------------------



// var r = new Rune({
//   container: "#canvas",
//   width: 600,
//   height: 600,
// });


// var backgroundColor = r.rect(0,0,r.width,r.height);

// backgroundColor.fill(200);

// var circleChao = r.circle(r.width/2,r.height/2,300,300);


// r.draw();


//------------Daily Studies:15|28/05/2017----------------
//-------------------------------------------------------
//---------------Daily Studies:16------------------------