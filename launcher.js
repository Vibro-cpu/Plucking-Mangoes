class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.08,
            length:30
        }
        this.launcher = Constraint.create(options)
        World.add(world, this.launcher)
        this.pointB = pointB
    }

    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position
            var pointB = this.pointB
            push ()
        stroke(255,255,255)
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop ()
        }
    }
    
}