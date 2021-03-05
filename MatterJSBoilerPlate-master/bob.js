class Bob{
    constructor(x, y){
        var options={
           // isStatic: true,
            density:1.2,
            friction:0.3,
            restitution:1
        }
        // this.r=20;
        // this.x=x;
        // this.y=y;
        //this.angle=angle;
        this.body=Bodies.circle(x, y, 25, options)
        World.add(world, this.body)

    }
    display(){
        // push();
        // translate(this.bod.position.x, this.bod.position.y)
       // rotate(angle)
        fill("orange")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x, this.body.position.y, 25, 25)
       // pop ();
    }
}
