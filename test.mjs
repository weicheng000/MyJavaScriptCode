import { createInterface } from 'readline';
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    };
    show(){
        console.log(this.x,this.y);
    };
}

class myMap {
    constructor(...Point){
        this.Point = [...Point]
    }
    distanceBetweenPoints(s,e) {
        const dx = this.Point[s].x - this.Point[e].x;
        const dy = this.Point[s].y - this.Point[e].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        console.clear();
        console.log(`Distance Between Point ${s} & ${e} is ${distance}`);
        return distance;
    }
    showList(){
        console.clear();
        this.Point.forEach((point, index)=>{
            console.log(`Point ${index}: x=${point.x}, y=${point.y}`);
        })
    }
    addPoint(point) {
        this.Point.push(point);
        console.clear();
        console.log("Adition Point Success!");
    }
    deletePoint(index) {
        console.clear();
        if (index >= 0 && index < this.Point.length) {
            this.Point.splice(index, 1);
            console.log("Delete success.")
        } else {
            console.log(`Index ${index} is out of bounds.`);
        }
    }
}
const point1 = new Point(1, 2);
const point2 = new Point(3, 4);
const myMapInstance = new myMap(point1, point2);

function displayMenu() {
    console.log("\nMenu:");
    console.log("1. Show Point List");
    console.log("2. Add Point");
    console.log("3. Delete Point");
    console.log("4. Calculate Distance");
    console.log("5. Quit");
}

function startApp() {
    displayMenu();
    rl.question("Select an option: ", (choice) => {
        switch (choice) {
            case '1':
                myMapInstance.showList();

                rl.question("Pass any key to Return Menu...", (response) => {
                    if (response.toLowerCase() === 'y') {
                        console.clear();
                        console.log("Closs List.");
                        startApp(myMapInstance); // Continue the app loop
                    } else {
                        console.clear();
                        console.log("Closs List.");
                        startApp(myMapInstance);
                    }
                });
                break;
            case '2':
                console.clear();
                rl.question("Enter x coordinate: ", (xInput) => {
                    const x = parseFloat(xInput);
                    rl.question("Enter y coordinate: ", (yInput) => {
                        const y = parseFloat(yInput);
                        const newPoint = new Point(x, y);
                        myMapInstance.addPoint(newPoint);
                        startApp(myMapInstance);
                    });
                });
                break;
            case '3':
                console.clear();
                myMapInstance.showList();
                rl.question("Enter the index of the point to delete: ", (indexInput) => {
                    const index = parseInt(indexInput);
                    myMapInstance.deletePoint(index);
                    startApp(myMapInstance);
                });
                break;
            case '4':
                console.clear();
                myMapInstance.showList();
                rl.question("Enter the index of the start point: ", (startInput) => {
                    const start = parseInt(startInput);
                    rl.question("Enter the index of the end point: ", (endInput) => {
                        const end = parseInt(endInput);
                        myMapInstance.distanceBetweenPoints(start, end);
                        startApp(myMapInstance); // Continue the app loop
                    });
                });
                break;
            case '5':
                console.clear();
                console.log("Thanks for use!");
                rl.close();
                return;
            default:
                console.clear();
                console.log("Invalid choice. Please select a valid option.");
                startApp(myMapInstance);
                break;
        }
        // startApp(); // Continue the app loop
    });
}

function prompt(question) {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}
console.clear();
startApp();
//node --experimental-modules test.mjs