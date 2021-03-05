class Roof{
    constructor(){
        this.body=Bodies.rectangle(400, 100, 300, 10, {isStatic:true})
        World.add(world, this.body)
    }
    display(){
        fill("yellow")
        rect(this.body.position.x, this.body.position.y, 300, 10)
    }
}