/*eslint-env browser*/

//var Car  = function (vin, make, model) {
//    "use strict";
//    /*this.vin = vin;
//    this.make = make;
//    this.model = model;*/
//    var vin = vin;
//    var make = make;
//    var model = model;
//    
//    var showMake = function () {
//        window.console.log("You own a " + make + " " + model);
//    };
//    this.displayCarInfo = function () {
//        showMake();
//    }
//};
///*Car.prototype.start = function () {
//    "use strict";
//    window.console.log("The " + this.make + " " + this.model + " has started!");
//};
//*/
//var camero = new Car("54344o440595", "Chevy", "Camero"); 
//var corvette = new Car("54344o440795", "Chevy", "Corvette");
////window.console.log("You just create a new" + camero.make + " " + camero.model);
//camero.displayCarInfo();
//corvette.displayCarInfo();
////camero.start();
////corvette.start();

//var Car = {
//    make: "Chevy",
//    displayCarInfo: function(year, model) {
//        "use strict";
//        return "You own a " + year + " " + this.make + " " + model + ".It is a " + this.type + " car.";
//    }
//};
//Car.type = "Sport";
//Car.make = "Ford";
//window.console.log(Car.displayCarInfo(2015,"Mustang");
//                   window.console.log(Car.make);
////window.console.log(camero);

var Animal = {
    walk: function () {},
    run: function () {},
    sleep: function () {},
    jump: function () {},
    
};
var Cat = Object.create(Animal, {
     meow: {value:"Meow"}
        
});
        
           
 var  Dog = Object.create(Animal, {
    bark: function(){
        window.alert("Hi");

    }
        
});
window.console.log(Cat.meow);
window.console.log(Dog.bark);