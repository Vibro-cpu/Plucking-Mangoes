class Stone{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }

        this.body = Bodies.circle(x,y,radius , options);
        
        this.image = loadImage("sprites/stone.png")

        World.add(world, this.body);
    }

    display(){
        image(this.image,this.body.position.x-20,this.body.position.y-20,30,30)
    }
}