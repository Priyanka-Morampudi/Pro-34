class Fly {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.01,
      length: 10,
    };

    this.pointB = pointB;
    this.attach = Constraint.create(options);
    World.add(world, this.attach);
  }

  fly() {
    this.attach.bodyA = null;
  }

  Launch(bodyA){
    this.attach.bodyA = bodyA;
  }

  display() {
    
    }
  }
