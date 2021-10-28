class Ball {
    x;
    y;
    color;
    radius;
    // speed;

    constructor(x, y, color, radius, ) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
        // this.speed = speed;
    }
    //
    //  ball1(x ,y) {
    //     let pen = document.getElementById("mycanvas").getContext("2d");
    //      pen.beginPath();
    //     pen.arc( this.x, this.y, this.radius, 0, 2*Math.PI);
    //     pen.fillStyle = this.color;
    //     pen.fill();
    //     pen.closePath();
    // }

    createBall(){
        let ctx = document.getElementById("mycanvas").getContext("2d");
        let ball= new Ball(200, 300, );
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    createBall();

}
