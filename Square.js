export class Square {
    constructor(pos, size, color) {
        this.pos = pos;
        this.size = size;
        this.color = color;
    }
    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.pos.x, this.pos.y, this.size, this.size);
    }
}