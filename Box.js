class Box extends BaseClass{
  constructor(x, y) {
    super(x,y,50,50);
    this.image=loadImage("sprites/wood1.png")
    }
   
   
    
   // World.add(world, this.box);
  
  display(){
   super.display()
   //image(this.box,0,0,this.width,this.height)
  }
}
