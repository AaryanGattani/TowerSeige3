class BOX{
    constructor(x, y, width, height) {
        var options = {
            'isStatic' : false,
            'restitution' : 0.4,
            'friction' : 1.0,
            'density' : 2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 60;
        this.height = 60;
        World.add(world, this.body);
        this.Visiblity = 225;
      }

      score()
      {
        if(this.Visiblity < 0 && this.Visiblity > -200){
          Score++
        }
      }

      display(){
        var angle = this.body.angle;
        if (this.body.speed > 3)
        {
          World.remove(world,this.body)
          push();
          this.Visiblity = this.Visiblity - 5;
          pop();
        }
        else
        {
          push();
          translate(this.body.position.x, this.body.position.y,this.width, this.height);
          rotate(angle);
          strokeWeight(4);
          stroke("BLACK");
          fill(254,188,200);        
          rectMode(CENTER);
          rect( 0, 0, 60,60);
          pop();
        }

      }
}