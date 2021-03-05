class Chain{
    constructor(bodyA, bodyB, xoff){
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:xoff, y:0}
           // xOffset: xOffset
        }
      //  this.x1=x1;
       // this.x2=x2;
        this.chain=Constraint.create(options)
        this.xoff=xoff;
        World.add(world, this.chain)
    }
    display(){
var pA=this.chain.bodyA.position;
var pB=this.chain.bodyB.position;
stroke("white")
strokeWeight(4)
line(pA.x, pA.y, pB.x+this.xoff, pB.y)
    }
}