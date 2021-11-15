// Add your Circle class here
class Circle {
    
    constructor (radius){
        this.radius = radius;
    }
    get diameter(){
        return this.radius * 2;
    }
    set diameter(value){
        this.radius = value / 2;
    }
    get circumference(){
        return this.diameter * Math.PI;
    }
    set circumference(value){
        this.diameter = value / Math.PI
    }
    get area(){
        return Math.PI * (this.radius * this.radius);
    }
    set area(value){
        this.radius = Math.sqrt(value / Math.PI)
    }
}