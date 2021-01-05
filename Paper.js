class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restituion:0.3,
            density:0.2,
            friction:0.3
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}

