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



