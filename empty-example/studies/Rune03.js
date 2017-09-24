//---------------Daily Studies:03------------------------

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

//------------Daily Studies:03|09/05/2017----------------