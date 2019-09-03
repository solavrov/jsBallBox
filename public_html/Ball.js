export {Ball};

class Ball {
    constructor(id, x, y, vx, vy, color, size, box) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.boxWidth = parseInt(box.style.width);
        this.boxHeight = parseInt(box.style.height);
        
        var e = document.createElement("div");
        e.id = id;
        e.style.width = size + "pt";
        e.style.height = size + "pt";
        e.style.borderRadius = "50%";
        e.style.backgroundColor = color;
        e.style.position = "absolute";
        e.style.left = x + "pt";
        e.style.top = y + "pt";
        box.appendChild(e);
        this.obj = e;

        this.processID = 0;   
    }
    
    move() {
       this.x += this.vx;
       var dx = parseInt(this.obj.style.width);
       this.y += this.vy;
       var dy = parseInt(this.obj.style.height);
       
       if (this.x + dx > this.boxWidth) {
           this.x = this.boxWidth - dx;
           this.vx = -this.vx;
       }
       if (this.x < 0) {
           this.x = 0;
           this.vx = -this.vx;
       }
       if (this.y + dy > this.boxHeight) {
           this.y = this.boxHeight - dy;
           this.vy = -this.vy;
       }
       if (this.y < 0) {
           this.y = 0;
           this.vy = -this.vy;
       }
       this.obj.style.left = Math.round(this.x) + "pt";
       this.obj.style.top = Math.round(this.y) + "pt";
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

