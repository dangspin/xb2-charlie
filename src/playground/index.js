// 1. switch

// let gear = 'D';

// switch (gear) {
//     case 'P':
//         console.log("parking");
//         break;
//     case 'R':
//         console.log("Moving backward");
//         break;
//     case 'D':
//         console.log("Driving");
//         break;
//     default:
//         console.log("Error!")
// }

// 2. throw
// const drive = () => {
//     throw new Error('out of gas!');
// };

// drive();

// 3. Tr...Catch...
// const getGasoline = () => {
//     return true;
// }

// const drive = () => {
//     const gasoline = getGasoline();
    
//     if (!gasoline) {
//         throw new Error('没油了');
//     }
    
//     console.log('呜呜～～～～！');
// }

// try {
//     drive();
// } catch (error) {
//     console.log(error.message);
// }


// 4. Class
class Car {
    //engine;

    constructor(engine) {
        this.engine = engine;

        console.log("A new Car!!");
    }

    drive() {
        console.log("呜呜呜～～～～");
    }
}

const c1 = new Car("V18"); 
c1.drive();

console.log(c1);
console.log(c1["engine"]);


class PickupTruck extends Car {

}

const p1 = new PickupTruck('V28')
p1.drive();

console.log(p1);