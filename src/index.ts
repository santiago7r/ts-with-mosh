// let sales: number = 123_432_323;
// let course: string = 'TypeScript';
// let is_publised: boolean = true;


// // Union Type

// let unionType: number | string;


// // Intersection type

// type Draggable = {
//     drag: () => void
// };

// type Resizable = {
//     resize: () => void
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }


// // Literal type 

// type Quantity = 50 | 150;

// let quantity: Quantity = 50;

// type Metrics = 'cm' | 'mm';

// // Type assertion

// let phone = document.getElementById('phone') as HTMLInputElement;

// phone.value

// // unknown 

// function render(document: unknown) {

//     // We can Narrowing to use methods that exist
//     if(typeof document === 'string') {
//         document.toLowerCase();
//     }
// }

// // Index Signatures
//     // We use this to add properties to an object dynamically;

// class SeatAssignment {
//     [seatNumber: string]: string; // it can be number, strings, objects or anything.
// }

// let seats = new SeatAssignment();

// seats.A1 = 'Mosh';
// seats["A2"] = 'John'; // we can access it in multiple ways

// //Static Members

// class Ride {
//     private static _activeRides: number = 0;

//     start() { Ride._activeRides++ };
//     stop() { Ride._activeRides-- };

//     static get activeRides() {
//         return Ride._activeRides
//     }
// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// // Inheritance

// class Person {
//     constructor(public firstName: string, public lastName: string) {}

//     get fullName() {
//         return this.firstName+' '+this.lastName;
//     }

//     walk() {
//         console.log('Walking');
//     }
// }

// class Student extends Person {
//     constructor(public studentId: number, firstName: string, lastName: string) {
//         super(firstName, lastName)
//     }

//     takeTest() {
//         console.log('Taking a test')
//     }
// }

// let student = new Student(1, 'Jhon', 'john@gmail.com');

// //Method Overriding

// class Teacher extends Person {
//     override get fullName() { // We use OVERRIDE to say the compiler we are overiding the method
//         return 'Professor' + super.fullName; // We use the super keyword to access the method fullName from the father class
//     }
// }

// let teacher = new Teacher('Jhon', 'Smith');

// // Polymorphism
// // This means taking different forms

// class Principal extends Person {
//     override get fullName() {
//         return 'Principal' + super.fullName;
//     }
// }

// printNames([
//     new Student(1, 'John', 'Smith'),
//     new Teacher('Mosh', 'Hamedani'),
// ])

// function printNames(people: Person[]) {
//     for( let person of people )
//         console.log(person.firstName);
// }

// // Abstract Classes and Methods

// abstract class Shape {
//     constructor(public color: string) {}

//     abstract render(): void;
// }

// class Circle extends Shape {
//     constructor(public radius: string, color: string) {
//         super(color);
//     }

//     override render(): void {
//         console.log('Rendering a circle')
//     }
// }

// // Exercises

// class Logger {
//     constructor(public fileName: string) {}
// }

// class Persons {
//     constructor(public firstName: string, public lastName: string) {}

//     get fullName() {
//         return this.firstName+' '+this.lastName;
//     }
// }

// class Employee extends Persons {
//     constructor(public salary: string, firsName: string, lastName: string) {
//         super(firsName, lastName)
//     }
// }

// // The difference between private and protected is that protected can be inherited

// interface Iaddress {
//     street: string,
//     city: string,
//     zipCode: number
// }
// interface Iemployee {
//     name: string,
//     salary: number,
//     address: Iaddress
// }

// let employee = {
//     name: 'John Smith',
//     salary: 50_000,
//     address: {
//     street: 'Flinders st',
//     city: 'Melbourne',
//     zipCode: 3144,
//     },
// };

// // Generic classes

// class KeyValuePair<K, V> {
//     constructor(public key: K, public value: V) {}
// }

// let pair = new KeyValuePair(1, 'a');
// const upper = pair.value.toUpperCase();

// // Generic functions
// function wrapInArray<T>(value: T) {
//     return [value]
// }

// let warrNum = wrapInArray(1);
// let warrStr = wrapInArray('a'); // Now depending on the type it will return an array of that type.

// // Generic interfaces

// //http://mywebsite.com/users
// //http://mywebsite.com/products

// interface Result<T> {
//     data: T | null,
//     error: string | null
// }

// function fetch<T>(url: string): Result<T> {
//     return { data: null, error: null };
// }

// interface User {
//     username: string;
// }

// interface Product {
//     title: string;
// }

// const info = fetch<User>('URL'); // Now depending on the interface that we pass we can have specific properties
// info.data

// // Generic constains
// interface IPerson {
//     name: string
// }

// function echoTWo<T extends IPerson>(value: T): T {
//     return value;
// }

// echo({ name: 'a' }) // The generic must fulfill the Interface of the type is extends it would be a class or instance too.