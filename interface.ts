// Point as a TYPE ALIAS
// type Point = {
//     x: number,
//     y: number
// }

// const pt: Point = {x: 213, y:12}

// Point using an INTERFACE:
interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 1234 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  // sayHi: () => string;
  sayHi(): string;
}

const thomas: Person = {
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  id: 21837,
  sayHi: () => {
    return "Hello!";
  },
};

thomas.first = "kasjdh";
// thomas.id = 238974;

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));

// Re-opening an interface:
/* ------------------------------- 인터페이스 다시 열기 ------------------------------ */
interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Shepherd",
  bark() {
    return "WOOF WOOF!";
  },
};

// Extending an interface:
/* -------------------------------- 인터페이스 확장 -------------------------------- */
interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "Lab",
  bark() {
    return "Bark!";
  },
  job: "guide dog",
};

interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

// Extending multiple interfaces
/* ------------------------------- 인터페이스 다중 상속 ------------------------------ */
interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  id: 123897,
  email: "pierre@gmail.com",
  level: "senior",
  languages: ["JS", "Python"],
};

/* ----------------------------- 인터페이스 vs 타입 별칭 ----------------------------- */
/*
인터페이스 =>
    객체만 사용 가능
        interface a {}
    추가 가능
        interface c {c1:string}
        interface c {c2:string}
    확장 가능(직관적임)
        interface e {name:string}
        interface e2 extends e{age:string}
        const tmpe:e2={
            name:'name',
            age:'age'
        }
*/
/*
타입 =>
    리터럴도 사용 가능
        type b = 'a'|'b'
        type b2={}
    추가 불가
    확장 가능
        type d = {name:string}
        type d2 = d & {
            age:string
        }
        const tmpd:d2={
            name:'name',
            age:'age'
        }
*/
