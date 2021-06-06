class Bomb{
    constructor(x,y) {
        var options = {
            
            'friction':1.0,
            'density':0.04
        }
        this.body = Bodies.rectangle(x, y ,50,50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        pos.y=50;
        pos.x = Math.random(20,780)
       
        push();
        translate(pos.x, pos.y);
        
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
  }