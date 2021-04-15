class Stone{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }; 
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("stone.png");
        World.add(world, this.body);

    }
    display(){
        var stonePos=this.body.position;		

			push()
			translate(stonePos.x, stonePos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
    }
}