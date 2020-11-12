class Rope{

    constructor(body1, body2){
        var options = {
            bodyA:body1,
            bodyB:body2,
            length:10,
            stiffness:1.0
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope)
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}