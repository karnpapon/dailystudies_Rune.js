//---------------Daily Studies:11------------------------

var r = new Rune({
    container: "#canvas",
    width: 600,
    height: 600
});


var background = r.rect(0,0,r.width,r.height).stroke(false).fill('hsv', 0, 30, 100);
var line = r.path(150,150).fill(false).stroke(70);

for(var theta = 0; theta<1000; theta+=0.12) {
    var xt = Math.cos(theta*2)*theta ; 
    var yt = Math.sin(theta*2)*theta ; 
    var nthet = xt/70 + yt/200;
    var othet = xt/70 - yt/200;
    var yp = yt+Math.sin(nthet)*10;
    var xp = xt+Math.cos(nthet)*20;
    
    if(theta == 0) {
        line.lineTo(xt,yt);
    } else {
        line.lineTo(xp,yt)
    }
}


r.draw();


//------------Daily Studies:11|17/05/2017----------------