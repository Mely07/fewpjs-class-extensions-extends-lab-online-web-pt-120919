// Your code here

class Polygon {
    constructor(sides) {
        this.sides= sides;console.log(sides)
    }
    
    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((a, b) => a + b, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if ((this.sides[0] + this.sides[1] <= this.sides[2]) || (this.sides[1] + this.sides[2] <= this.sides[0]) || (this.sides[2] + this.sides[0] <= this.sides[1]))  {
            return false 
        }
        else return true
    }
}

class Square extends Polygon {
    get isValid(){
        if (this.perimeter % 4 == 0){
            return true
        }
        return false
    }

    get area() {
        return (this.perimeter / 4) ** 2
    }
}