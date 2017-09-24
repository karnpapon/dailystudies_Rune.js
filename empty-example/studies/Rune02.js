//---------------Daily Studies:02------------------------


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