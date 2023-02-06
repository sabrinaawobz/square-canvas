export class Position {
  constructor(x, y, canvas) {
    this._x = x;
    this._y = y;
    this.canvas = canvas;
  }
  set x(value) {console.log(canvas.width)
    if (value === this.canvas.width) {
      this._x = 0;
    } else {
      this._x = value;
    }
  }
  get x() {
    return this._x;
  }
  set y(value) {
    if (value === this.canvas.height) {
      this._y = 0;
    } else {
      this._y = value;
    }
    }
    get y() {
      return this._y;
  }
}