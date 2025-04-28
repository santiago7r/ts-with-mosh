interface IProduct {
    name: string,
    price: number
}

class Store<T> {
    protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }

    // keyof operator let the compiler know that the properties that we pass must be 
    // properties of the generic T so 
    // we are not using index signature we are working with actual properties
    findObj(property: keyof T, value: unknown): T | undefined { // if T is IProduct keyof T => 'name' | 'price'; un union is return
        return this._objects.find(obj => obj[property] === value);
    }
}

let storeObj = new Store<IProduct>();
storeObj.add({name: 'a', price: 1})

storeObj.findObj('name', 'a');
storeObj.findObj('price', 1);
// storeObj.findObj('nonExistingProperty', 1);
// We have to use the <T> in the CompresibleStore to let compiler know that the type that is passed to 
// CompressibleStore will be pass to the father class Store.

class CompressibleStore<T> extends Store<T> { // 
    compress() {}
}

// Now here in store we can access the add and the compress properties
let store = new CompressibleStore<IProduct>()


// we can use protected insted of privete so properties can be inherited 

class SearchableStore<T extends { name: string }> extends Store<T> { // we can use extends in the T of generic 
// so we can give a shape object for that type so we can find anything with the name property
    find(name: string): T | undefined {
        return this._objects.find(obj => obj.name === name)
    }
}

// We can fix the generic type parameter by passing 
// to the father class a interface everything will be relate to that interface
class ProductStore extends Store<Product> {
    filterByCategory(category: string): Product[] {
        return [];
    }
}

// Type Mapping

interface IProductTwo {
    name: string;
    price: number;
}

// All the keys of the IProductTwo as well as their type

type ReadOnlyProdut = {
   readonly [k in keyof IProductTwo]: IProductTwo[k] // Dependin on the key it will return its type
}

type ReadOnlyGeneric<T> = {
    readonly [k in keyof T]: T[k]
}

let productNew: ReadOnlyGeneric<IProductTwo> = {
    name: 'a',
    price: 1
}

// productNew.name = 'b'

// We can do the same for optional, nullables and so on!

type Nullable<T> = {
    readonly [k in keyof T]: T[k] | null
}

type Optionals<T> = {
    readonly [k in keyof T]?: T[k]
}

