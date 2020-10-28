class Chain{
    constructor(bodyX, bodyY){
        var options = {
            bodyA: bodyX,
            bodyB: bodyY,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options)
        this.bodyX = bodyX
        this.bodyY = bodyY
        World.add(world, this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        //var pointX = this.bodyX.position
        //var pointY = this.bodyY.position
        strokeWeight(6)
        //line(pointX.x, pointX.y, pointY.x, pointY.y)    
        line(pointA.x, pointA.y, pointB.x, pointB.y)    
    }
}