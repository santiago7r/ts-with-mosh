"use strict";
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    findObj(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
}
let storeObj = new Store();
storeObj.add({ name: 'a', price: 1 });
storeObj.findObj('name', 'a');
storeObj.findObj('price', 1);
class CompressibleStore extends Store {
    compress() { }
}
let store = new CompressibleStore();
class SearchableStore extends Store {
    find(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        return [];
    }
}
let productNew = {
    name: 'a',
    price: 1
};
function echo(arg) { return arg; }
function printName(obj) {
    console.log(obj.name);
}
//# sourceMappingURL=generics.js.map