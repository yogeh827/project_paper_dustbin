class Paper{
    constructor(){
        var options = {
           'isStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.paper = Matter.Bodies.circle (400,350,15,options,30);
       // this.x = 400;
       // this.y = 350;
        this.radius = 15;
        this.daia = 30;
        World.add(world, this.paper);
    }
    display(){
        Matter.Bodies.circle(this.x,this.y,this.radius);
    }
}