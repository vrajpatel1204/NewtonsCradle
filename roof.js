class Roof {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true,
        'restitution':0,

      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
        
      World.add(world, this.body);
      }
    display(){
      rectMode(CENTER);
  
      fill(152,122,122);
  
      rect(this.body.position.x, this.body.position.y, this.width, this. height);
      }
    }