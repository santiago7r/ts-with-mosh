"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Component(options) {
    return (constructor) => {
        console.log('Component decorator called');
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.options = options;
        constructor.prototype.inserInDOM = () => {
            console.log('Inserting the component in the DOM');
        };
    };
}
function Pipe(constructor) {
    console.log('Pipe decorator called');
    constructor.prototype.pipe = true;
}
let ProfileComponet = class ProfileComponet {
};
ProfileComponet = __decorate([
    Component({ selector: '#my-profile' }),
    Pipe
], ProfileComponet);
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log('Before');
        original.call(this, ...args);
        console.log('After');
    };
}
class PersonTwo {
    say(message) {
        console.log('Person say ' + message);
    }
}
__decorate([
    Log
], PersonTwo.prototype, "say", null);
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original === null || original === void 0 ? void 0 : original.call(this);
        if (typeof result === 'string')
            return result.toUpperCase();
        return result;
    };
}
class PersonThree {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], PersonThree.prototype, "fullName", null);
let personThree = new PersonThree('eddy', 'rhenals');
console.log(personThree.fullName);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() { return value; },
            set(newValue) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} min length must be equal or higer than ${length}`);
                value = newValue;
            }
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class User {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], User.prototype, "password", void 0);
let user = new User('1234');
console.log(user.password);
const watchedParameters = [];
function Watch(target, methodName, parameterIndex) {
    watchedParameters.push({
        methodName,
        parameterIndex
    });
}
class Vehicle {
    move(speed) { }
}
__decorate([
    __param(0, Watch)
], Vehicle.prototype, "move", null);
console.log(watchedParameters);
function Sauce(sauce) {
    return (constructor) => {
        constructor.prototype.sauce = sauce;
        console.log("This is the sauce: " + sauce);
    };
}
let Pizza = class Pizza {
    constructor(test) {
        this.test = test;
    }
};
Pizza = __decorate([
    Sauce('pesto')
], Pizza);
const pizza = new Pizza('TEST');
console.log(pizza.test);
//# sourceMappingURL=decorators.js.map