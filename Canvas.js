export class Canvas {
    constructor(id) {
        this.element = document.getElementById(id);
        this.context = this.element.getContext("2d");

    }
}
