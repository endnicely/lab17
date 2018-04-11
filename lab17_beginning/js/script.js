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

//var Animal = {
//    walk: function () {},
//    run: function () {},
//    sleep: function () {},
//    jump: function () {},
//    
//};
//var Cat = Object.create(Animal, {
//     meow: {value:"Meow"}
//        
//});
//        
//           
// var  Dog = Object.create(Animal, {
//    bark: function(){
//        window.alert("Hi");
//
//    }
//        
//});
//window.console.log(Cat.meow);
//window.console.log(Dog.bark);

var Jukebox = function () {
    "use strict";
    var albums = [], self;
    self = {
        addAlbum: function (album) {
            albums.push(album);
            
        },
        favoriteAlbum: function () {
            var max = 0, fav, i;
            for(i=0;i<albums.length;i +=1){
                if(albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
    
};

var Album = function (artist, album) {
    "use strict";
    var self = {
        played: 0,
        play: function () {
            this.played += 1;
        },
        display: function () {
//            return artist + " \"" + album + "hasbeen played " + this.palyed + " times.";
            return artist + " \"" + album + "hasbeen played " + this.palyed + " times.";
        }
        
    };
    return self;
    
};
var junkebox = new Jukebox();
var album1 = new Album("Shakira","Knock on my Door");
var album2 = new Album("Tribe Called Quesst", "The Low End Theory");
var album3 = new Album("Imagine Dragons", "Hell and Silence");

junkebox.addAlbum(album1);
junkebox.addAlbum(album2);
junkebox.addAlbum(album3);

//PLay Albums
album1.play();
album1.play();
album1.play();
album2.play();
album3.play();
album1.play();
album3.play();

window.console.log("Your favorite album is " + junkebox.favoriteAlbum());