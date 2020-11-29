class Box2 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
     
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
          push();
          translate(pos.x,pos.y);
          rectMode(CENTER);
          rotate(angle);
          strokeWeight(2);
          fill(
            3, 252, 161
            );
          rect(0,0,this.width,this.height);
          pop();

  }
  };