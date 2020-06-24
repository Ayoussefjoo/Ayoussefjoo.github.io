const applesArray = [];
class Apple {
    constructor() {
        this.x = canvas.width;
        this.y = (Math.random() * canvas.height);
        this.speedY = (Math.random() * 1) + 0.5;
        this.width = 30;
        this.height = 30;
        this.color = 'red';
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.drawImage(appleobj, this.x, this.y, this.width, this.height);

    }
    update() {
        this.x -= gamespeed;
        //this.y += this.speedY;
        if ((this.x + this.width) < bird.x) {
            applesArray.pop(this)
        }
       /*  for (let i = 0; i < obstaclesArray.length; i++) {
            if (this.x < obstaclesArray[i].x + obstaclesArray[i].width &&
                this.x + this.width > obstaclesArray[i].x &&
                ((this.y < 0 + obstaclesArray[i].top && this.y + this.height > 0) ||
                    (this.y > canvas.height - obstaclesArray[i].bottom &&
                        this.y + this.height < canvas.height))) {
                applesArray.pop(this);
            }

        } */
        this.draw();
    }
}
function handleapples() {
    if (frame % 50 === 0) {
        applesArray.unshift(new Apple());
    }
    for (let i = 0; i < applesArray.length; i++) {
        applesArray[i].update();
    }
    if (applesArray.length > 20) {
        applesArray.pop(applesArray[0])
    }
}

const appleobj = new Image();
appleobj.src = 'Apple.png';