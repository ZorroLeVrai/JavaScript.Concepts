class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }

  getPerimeter = () => 2 * (this.length + this.width);

  displayThis = () => console.log(this);
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()); // 50

const square = new Square(5);
console.log(square.getArea()); // 25
console.log(square.getPerimeter()); // 20
square.displayThis();

console.log(square instanceof Square); // true
console.log(square instanceof Rectangle); // true
console.log(rectangle instanceof Square); // false


{
  ...
  "type": "module",
  ...
}
 