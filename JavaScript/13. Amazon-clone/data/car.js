class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo(){
    const trunkStatus = this.isTrunkOpen ? 'open': 'closed';
    console.log(`${this.#brand}, ${this.#model}, Speed: ${this.speed} km/h, Trunk:${trunkStatus}`);
  }

  go(){
    if (!this.isTrunkOpen){
        this.speed += 5;
        if (this.speed > 200){
            this.speed = 200;
        }
    }
  }

  break(){
    this.speed -=5;
    if (this.speed <0){
        this.speed = 0;
    }
  }

  openTrunk(){
    if (this.speed === 0){
        this.isTrunkOpen = true;
    }
  }

  closeTrunk(){
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car{
    acceleration;

    constructor(carDetails){
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go(){
    if (!this.isTrunkOpen){
        this.speed += this.acceleration;
        if (this.speed > 300){
            this.speed = 300;
            }
        }
    }

    openTrunk() {
        console.log('Race cars do not have a trunk.');
    }

    closeTrunk() {
        console.log('Race cars do not have a trunk.');
    }
}


const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla'
});
const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3'
});

const raceCar1 = new RaceCar({
  brand: 'McLaren',
  model: 'F1', 
  acceleration: 20
});

console.log(car1);
console.log(car2);
console.log(raceCar1);

raceCar1.displayInfo();
raceCar1.go();
raceCar1.go();
raceCar1.break();
raceCar1.openTrunk();
raceCar1.displayInfo();
raceCar1.break();
raceCar1.openTrunk();
raceCar1.displayInfo();