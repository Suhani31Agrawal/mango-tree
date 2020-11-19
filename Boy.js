class Boy{
    constructor(x,y,r){
        var options={
            isStactic:true,
            friction:1
        }
        this.x=x
        this.y=y
        this.r=rthis.image=loadImage("images/boy.png")
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)
    }
}