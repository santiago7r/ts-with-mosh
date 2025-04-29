

type ComponentOptions = {
    selector: string
}


// Decorator factory
function Component(options: ComponentOptions) {
    return (constructor: Function) => {
        console.log('Component decorator called');
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.options = options;
        constructor.prototype.inserInDOM = () => {
            console.log('Inserting the component in the DOM');
        }
    }
}

function Pipe(constructor: Function) {
    console.log('Pipe decorator called');
    constructor.prototype.pipe = true;
}


@Component({ selector: '#my-profile' })
@Pipe
// so first is called Pipe and later Coponent decorator.

class ProfileComponet {

}


// Method Decorator

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value as Function;
    descriptor.value = function(...args: any) {
        console.log('Before');
        original.call(this, ...args);
        console.log('After');
    }
}

class PersonTwo {
    @Log
    say(message: string) {
        console.log('Person say ' + message);
    }
}

// Accessor Decorators

function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;
    descriptor.get = function() {
        const result = original?.call(this);
        if( typeof result === 'string')
            return result.toUpperCase();
        return result;
    }
}

class PersonThree {
    constructor(public firstName: string, public lastName: string) {}

    @Capitalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let personThree = new PersonThree('eddy', 'rhenals');
console.log(personThree.fullName);

// Property decorator
function MinLength(length: number) {
    return (target: any, propertyName: string) => {
        let value: string;

        const descriptor: PropertyDescriptor = {
            get() { return value; },
            set(newValue: string) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} min length must be equal or higer than ${length}`);
                value = newValue;
            }
        }

        Object.defineProperty(target, propertyName, descriptor);
    }
}


class User {
    @MinLength(4)
    password: string;

    constructor(password: string) {
        this.password = password;
    }
}

let user = new User('1234');
console.log(user.password)

//Parmeter Decorators

type WatchedParameter = {
    methodName: string,
    parameterIndex: number
};

const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
    watchedParameters.push({
        methodName,
        parameterIndex
    });
}

class Vehicle {
    move(@Watch speed: number) {}
}

console.log(watchedParameters)

//Create a decorator for adding a sauce to Pizza instances:

function Sauce(sauce: string) {
    return (constructor: Function) => {
        constructor.prototype.sauce = sauce;
        console.log("This is the sauce: " + sauce);
    }
}

@Sauce('pesto')

class Pizza {
 constructor(public test: string) {}
}

const pizza = new Pizza('TEST');

console.log(pizza.test);