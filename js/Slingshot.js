class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

fly(){

    this.chain.bodyA = null;
}

attach(body){
    this.chain.bodyA=body;
    Matter.Body.setPosition(body,{x:160,y:300});
    Matter.Body.setVelocity(body,{x:0,y:0});
}

    display(){
      if(this.chain.bodyA != null){ 
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}