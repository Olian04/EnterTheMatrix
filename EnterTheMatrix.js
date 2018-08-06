var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.style.display = 'none';
var intervalId;
window.EnterTheMatrix = function () {
    canvas.style.display = 'none';
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight;
    let p = Array(256).join(1).split('');
    var ctx = canvas.getContext("2d");
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(function () {
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(0,255,0,1)";
        p = p.map(function (v, i) {
            ctx.fillText(String.fromCharCode(Math.floor(2720 + Math.random() * 33)), i * 10, v);
            v += 10;
            if (v > 768 + Math.random() * 10000) {
                v = 0;
            }
            return v;
        })
    }, 33);
    window.addEventListener('resize', resize);
    function resize() {
        if (document.isFullScreen 
          || document.mozRequestIsFullScreen 
          || document.webkitIsFullScreen 
          || document.msIsFullscreen) {
          canvas.style.display = 'inline';
        } else {
          if (intervalId) {
           clearInterval(intervalId);
          }
          canvas.style.display = 'none';
        }
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight;
        p = Array(256).join(1).split('');
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
    } else if (canvas.mozRequestFullScreen) { /* Firefox */
        canvas.mozRequestFullScreen();
    } else if (canvas.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        canvas.webkitRequestFullscreen();
    } else if (canvas.msRequestFullscreen) { /* IE/Edge */
        canvas.msRequestFullscreen();
    }
}
