class Particles{
    constructor(x,y,radius){
    var options = {
        isStatic: false,
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    this.color = color(random(0, 255), random(0,255), random(0,255));
    World.add(world, this.body);
    }
    
    display(){
    push();
    var pos = this.body.position;
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(pos.x, pos.y, this.radius, this.radius);
    pop();
    }
    }