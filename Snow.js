class Snow{
    constructor(x, y, width, height){
        var options={
            'frictionAir': 0.005,
            'density': 1,
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 10;
        this.height = 10;
        this.body.velocityY = 3;
        this.image = loadImage('snow4.webp');
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position
        rectMode(CENTER);
        imageMode(CENTER);
        this.image(snow_image, random(5, 695), 0, this.width, this.height);
    }
}