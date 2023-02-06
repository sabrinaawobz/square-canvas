import { Canvas } from "./Canvas";

export class Position {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    set x(value) {
        if (value < canvas.width) {
            value = 0;
        }
        this._x = value;
    }
    get x() {
        return this._x;
    }
    set y(value) {
        this._y = value;
    }
    get y() {
        return this._y;
    }
}


/*
export class Position {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    set x(value) {
        this._x = value;
    }
    get x() {
        return this._x;
    }
    set y(value) {
        this._y = value;
    }
    get y() {
        return this._y;
    }
}
 */