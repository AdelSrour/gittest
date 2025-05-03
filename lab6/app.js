class Engine {

    static #count = 0;

    constructor(source) {
        if (new.target.name == "Engine") {
            throw new Error("Engine is abstract class");
        }
        this.source = source;
    }

}



class Car extends Engine {

    constructor(top, left, source) {
        super(source);
        this.ptop = top;
        this.pleft = left;

        this.myCar = document.createElement("img");
        this.myCar.src = this.source;
        this.myCar.style.position = "absolute";
        this.myCar.style.top = `${this.ptop}px`;
        this.myCar.style.left = `${this.pleft}px`;
        document.body.appendChild(this.myCar);
    }

    set top(value) {
        this.ptop = value;
        this.myCar.style.top = `${this.ptop}px`;
    }

    set left(value) {
        this.pleft = value;
        this.myCar.style.left = `${this.pleft}px`;
    }

    get top() {
        return this.ptop;
    }

    get left() {
        return this.pleft;
    }

    moveL() {
        this.left -= 10;
        if (this.left < 0) {
            this.left = 0;
        }
        this.myCar.style.left = `${this.left}px`;
    }

    moveR() {
        this.left += 10;
        let pageSize = window.innerWidth;
        let carSize = this.myCar.offsetWidth;
        if (this.left + carSize > pageSize) {
            this.left = pageSize - carSize;
        }
        this.myCar.style.left = `${this.left}px`;
    }

    changeCss(css) {
        for (const prop in css) {
            this.myCar.style[prop] = css[prop];
        }
    }

    moveCar(direction) {
        let moveFunction = null;
        direction = direction.toLowerCase();

        if (direction === "left") {
            moveFunction = this.moveL.bind(this);
        } else {
            moveFunction = this.moveR.bind(this);
        }

        clearInterval(this.mover);
        this.mover = setInterval(() => {
            this.manageMovement(direction, moveFunction);
        }, 20);
    }

    manageMovement(direction, moveFunction) {
        if (direction === "left" && this.left <= 0) {
            this.changeCss({ transform: "scaleX(1)", transition: "transform 0.3s" });
            clearInterval(this.mover);
        } else if (direction === "right" && this.left + this.myCar.offsetWidth >= window.innerWidth) {
            this.changeCss({ transform: "scaleX(-1)", transition: "transform 0.3s" });
            clearInterval(this.mover);
        } else {
            moveFunction();
        }
    }

}

let adelsCar = new Car(200, 0, "./car.jpg");
adelsCar.moveCar("right");