class Block {
    constructor(x, y, color) {
      var options = {
          'restitution':0,
          'friction':1,
          'density':2
      }
      this.body = Bodies.rectangle(x, y, 20, 50, options);
      this.width = 20;
      this.height = 50;
      this.color = color;
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
          stroke("orange");
          fill(this.color);
        rect(0, 0, this.width, this.height);
        pop();
      } else{
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility - 5;
        tint(255,this.visibility);
        rect(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      }
    }
    
  };
  