export {Ball};

class Ball {
    constructor(x, y, vx, vy, color, size, box, fps=100) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.fps = fps;
        
        var e = document.createElement("div");
        e.style.width = size + "px";
        e.style.height = size + "px";
        e.style.borderRadius = "50%";
        e.style.backgroundColor = color;
        e.style.position = "absolute";
        e.style.left = x + "px";
        e.style.top = y + "px";
        box.appendChild(e);
        this.obj = e;

        this.processID = 0;   
    }
    
    move() {
        
       var w = window.innerWidth;
       var h = window.innerHeight;
        
       this.x += this.vx;
       var dx = parseInt(this.obj.style.width);
       this.y += this.vy;
       var dy = parseInt(this.obj.style.height);
       
       if (this.x + dx > w) {
           this.x = w - dx;
           this.vx = -this.vx;
       }
       if (this.x < 0) {
           this.x = 0;
           this.vx = -this.vx;
       }
       if (this.y + dy > h) {
           this.y = h - dy;
           this.vy = -this.vy;
       }
       if (this.y < 0) {
           this.y = 0;
           this.vy = -this.vy;
       }
       this.obj.style.left = Math.round(this.x) + "px";
       this.obj.style.top = Math.round(this.y) + "px";
    }
    
    start() {
        if (this.processID === 0) {
            var b = this;
            this.processID = window.setInterval(
                    function(){b.move();}, Math.round(1000/this.fps)
                    );
        }
    }
    
    stop() {
        if (this.processID !== 0) {
            window.clearInterval(this.processID);
            this.processID = 0;
        }
    }
}

