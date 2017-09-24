//---------------Daily Studies:09------------------------

var r = new Rune({

container: "#canvas",
width: 600,
height: 600
})

var background = r.rect(0,0,r.width,r.height)
                    .fill(240)
                    .stroke(false)
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

//------------Daily Studies:09|15/05/2017----------------