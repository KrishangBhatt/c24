class CannonBall {
    constructor(x, y) {
      var options =  {
        restitution:0.8,
        friction:1.0,
        density:1.0,
        isStatic: true
      };
      this.ballImage = loadImage("assets/cannonball.png");
      this.r = 40;
      this.body = Bodies.circle(x, y, this.r, options);
      World.add(world, this.body);
    }

    shoot(){
        var velocity = p5.Vector.fromAngle(cannon.angle)
        velocity.mult(20)    
        Matter.Body.setStatic(this.body,false)
         Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})

    }

    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.ballImage, 0, 0, this.r, this.r);
      pop();
    }
  }
