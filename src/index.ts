let sales: number = 123_432_323;
let course: string = 'TypeScript';
let is_publised: boolean = true;


// Union Type

let unionType: number | string;


// Intersection type

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}


// Literal type 

type Quantity = 50 | 150;

let quantity: Quantity = 50;

type Metrics = 'cm' | 'mm';

// Type assertion

let phone = document.getElementById('phone') as HTMLInputElement;

phone.value

// unknown 

function render(document: unknown) {

    // We can Narrowing to use methods that exist
    if(typeof document === 'string') {
        document.toLowerCase();
    }
}

// Index Signatures
    // We use this to add properties to an object dynamically;

class SeatAssignment {
    [seatNumber: string]: string; // it can be number, strings, objects or anything.
}

let seats = new SeatAssignment();

seats.A1 = 'Mosh';
seats["A2"] = 'John'; // we can access it in multiple ways

//Static Members

class Ride {
    private static _activeRides: number = 0;

    start() { Ride._activeRides++ };
    stop() { Ride._activeRides-- };

    static get activeRides() {
        return Ride._activeRides
    }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

// Inheritance

class Person {
    constructor(public firstName: string, public lastName: string) {}

    get fullName() {
        return this.firstName+' '+this.lastName;
    }

    walk() {
        console.log('Walking');
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName)
    }

    takeTest() {
        console.log('Taking a test')
    }
}

let student = new Student(1, 'Jhon', 'john@gmail.com');

//Method Overriding

class Teacher extends Person {
    override get fullName() { // We use OVERRIDE to say the compiler we are overiding the method
        return 'Professor' + super.fullName; // We use the super keyword to access the method fullName from the father class
    }
}

let teacher = new Teacher('Jhon', 'Smith');

// Polymorphism
// This means taking different forms

class Principal extends Person {
    override get fullName() {
        return 'Principal' + super.fullName;
    }
}

printNames([
    new Student(1, 'John', 'Smith'),
    new Teacher('Mosh', 'Hamedani'),
])

function printNames(people: Person[]) {
    for( let person of people )
        console.log(person.firstName);
}

