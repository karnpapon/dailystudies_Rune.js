//---------------Daily Studies:15------------------------


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



//------------Daily Studies:15|28/05/2017----------------