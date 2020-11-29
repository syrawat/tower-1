class Box3 extends BaseClass {
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
          fill(3, 119, 252 );
          rect(0,0,this.width,this.height);
          pop();

  }
};
  