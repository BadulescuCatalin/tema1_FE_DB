class Vehicle {
    static gasPrice = 7.2;
    constructor(currentSpeed=0, maxSpeed=200, tank=50, lps=1, kmps=1, gasConsumed=10, kmDrove=200, expenses=100, money=1000) {
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
        this.tank = tank;
        this.lps = lps;
        this.kmps = kmps;
        this.gasConsumed = gasConsumed;
        this.kmDrove = kmDrove;
        this.expenses = expenses;
        this.money = money;
    }

    drive() {
        let interval = setInterval(() => {
            if ( this.tank - this.gasConsumed > this.lps) {
                this.gasConsumed += this.lps;
                this.kmDrove += this.kmps;
                let remainingFuel = this.tank - this.gasConsumed;
                console.log(`Am condus ${this.kmDrove}km! Mai am ${remainingFuel} litrii de benzina!`);
            } else {
                console.log("Nu mai am benzina!");
                console.log("Incerc sa fac plinul!");
                let canFillGassTank = this.putGas();
                if( canFillGassTank === false) {
                    clearInterval(interval);
                }
            }
             
        }, 1000);
    }

    putGas() {
        let priceToPay =  this.gasConsumed * Vehicle.gasPrice;
        if (this.money >= priceToPay) {
            this.pay(priceToPay);
            return true;
        } else {
            console.log("Nu am suficienti bani!");
            return false;
        }
    }

    pay(price) {
        this.expenses += price;
        this.money -= price;
        this.gasConsumed = 0;
        console.log(`Am platit ${price} pentru benzina! Mai am ${this.money} bani in cont!`);

    }
}

class Motorcycle extends Vehicle {
    constructor(currentSpeed, gasConsumed, kmDrove, expenses, money) {
        super(currentSpeed, 120, 30, 0.3, 1.5, gasConsumed, kmDrove, expenses, money);
        this.currentSpeed = currentSpeed;
        this.gasConsumed = gasConsumed;
        this.kmDrove = kmDrove;
        this.expenses = expenses;
        this.money = money;
    }
}


class Car extends Vehicle {
    constructor(currentSpeed, gasConsumed, kmDrove, expenses, money) {
        super(currentSpeed, 200, 50, 0.5, 2, gasConsumed, kmDrove, expenses, money);
        this.currentSpeed = currentSpeed;
        this.gasConsumed = gasConsumed;
        this.kmDrove = kmDrove;
        this.expenses = expenses;
        this.money = money;
    }
}


class Truck extends Vehicle {
    constructor(currentSpeed, gasConsumed, kmDrove, expenses, money) {
        super(currentSpeed, 100, 100, 1, 0.9, gasConsumed, kmDrove, expenses, money);
        this.currentSpeed = currentSpeed;
        this.gasConsumed = gasConsumed;
        this.kmDrove = kmDrove;
        this.expenses = expenses;
        this.money = money;
    }
}

const car = new Car(100, 40, 200, 20, 500);
car.drive();

// merg si celelalte, dar nu se mai intelege nimic din loguri daca pornesc toate 3

// const motor = new Motorcycle(100, 20, 100, 10, 400);
// motor.drive();
// const truck = new Truck(90, 90, 200, 2000, 2000);
// truck.drive();