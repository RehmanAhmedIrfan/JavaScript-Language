class Human {
    // data members
    age = 30;
    #wt = 80; // weight is now a private property
     ht = 180;
    // creating a constructor:
    constructor(newAge, newWeight, newHeight){
        this.age = newAge;
        this.#wt = newWeight;
        this.ht = newHeight;
    }
    // member methods
    walking(){
        console.log("I am walking");
    }

    running(){
        console.log("I am running")
    }
    // Getters and Setters
    get fetchWt(){
        return this.#wt;
    }
    set modifyWt(value){
        return this.#wt = value;
    }
};
let obj = new Human(50,100,101);
console.log(obj.fetchWt);
// console.log(obj.#wt); not possible 
