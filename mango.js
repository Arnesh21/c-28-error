class Mango{
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        };
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
   }
   display(){
    var mangoPos=this.body.position;		

        push()
        translate(mangoPos.x, mangoPos.y);
        rectMode(CENTER)
        //strokeWeight(4);
        fill(128,128,128)
        rect(0,0,this.w, this.h);
        pop()
}
}