class Tree{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic: true});
        World.add(world, this.body);
        this.image = loadImage("sprites/tree.png")
    }

    display(){
        rectMode(CENTER);
        var pos =this.body.position;
        rect(10000,600,1,1);
        image(this.image,400,225,325,475)
    }
}