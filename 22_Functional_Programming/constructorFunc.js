function car(brand, model, color) {
    this.brand = brand
    this.model = model
    this.color = color

    this.drive = function(){
        console.log("I'm drivig", this.model);
    }
}

const car1 = new car("BMW", "XS", "white")  //  this - {}
const car2 = new car("Mercedes", "$ class", "red")  //  this - {}

// car1.brand = "jaguar"
// console.log(car1);
// console.log(car2);


car1.drive()
car2.drive()
