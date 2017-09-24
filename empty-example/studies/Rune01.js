//--------------------Daily Studies:01-------------------
//setup

var r = new Rune({
    container: "#canvas",
    width: 600,
    height: 600
  });
  
  //-------------------------------------------------------
  
  var backgroundColor = r.rect(0,0,r.width,r.height)
  .fill(190)
  .stroke(false);
  
  var gridX = 5;
  var gridY = 5;
  var circleGroup = r.group(80,80);
  var diemeter = 35;
  
  for(var x = 0; x < gridX; x++)
    {
      for(var y = 0; y < gridY; y++)
      {
        var circ = r.circle(x * 110, y * 110, diemeter, circleGroup)
          .fill(Rune.random(30,150))
          .stroke(false);
  
          var circ2 = r.circle(x*110,y*110,diemeter/1.5,circleGroup)
        .fill(Rune.random(30,150))
          .stroke(false);
  
        var circ3 = r.circle(x*110,y*110,diemeter/3,circleGroup)
        .fill(Rune.random(30,150))
        .stroke(false);
      }
    }
    r.draw();