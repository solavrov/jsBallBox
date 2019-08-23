export {Ball};

class Ball {
    constructor(id, x, y, vx, vy, color, size, box) {
        this.vx = vx;
        this.vy = vy;
        this.boxWidth = parseInt(box.style.width);
        this.boxHeight = parseInt(box.style.height);
        
        var e = document.createElement("div");
        e.id = id;
        e.style.width = size + "pt";
        e.style.height = size + "pt";
        e.style.backgroundColor = color;
        e.style.position = "absolute";
        e.style.left = x + "pt";
        e.style.top = y + "pt";
        box.appendChild(e);
        this.obj = e;

        this.processID = 0;   
    }
    
    move() {
       var x = Math.round(parseInt(this.obj.style.left) + this.vx);
       var dx = parseInt(this.obj.style.width);
       var y = Math.round(parseInt(this.obj.style.top) + this.vy);
       var dy = parseInt(this.obj.style.height);
       
       if (x + dx > this.boxWidth) {
           x = this.boxWidth - dx;
           this.vx = -this.vx;
       }
       if (x < 0) {
           x = 0;
           this.vx = -this.vx;
       }
       if (y + dy > this.boxHeight) {
           y = this.boxHeight - dy;
           this.vy = -this.vy;
       }
       if (y < 0) {
           y = 0;
           this.vy = -this.vy;
       }
       this.obj.style.left = x + "pt";
       this.obj.style.top = y + "pt";
    }
    
    start() {
        if (this.processID === 0) {
            var b = this;
            this.processID = window.setInterval(function(){b.move();}, 20);
        }
    }
    
    stop() {
        if (this.processID !== 0) {
            window.clearInterval(this.processID);
            this.processID = 0;
        }
    }
}

