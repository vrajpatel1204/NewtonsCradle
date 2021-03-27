class Bob {
    constructor(x,y,r){
        var options={
            isStatic:false,
            friction:0.4,
            density:3,
           restitution:1.2,
        }
        this.x=x;
        this.y=y;
        this.r=r;

        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate (this.body.angle)
        if(keyCode === 32){
          fill(8,0,230);
        }
        if(keyCode === 75){
            fill(230,207,0);
        }
        if(keyCode === 65){
            fill(0,255,51);
        }

        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r)
        pop ()
    }
}