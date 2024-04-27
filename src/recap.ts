const myName = 'Diego'
myName.toLowerCase();
const myNumber = 1;
myNumber.toString();
const suma = (a: number, b:number) => {
  return a + b
};
suma(1,2
)

class Person {

  constructor(private age: number, private name: string){
    this.age = age;
    this.name = name;
  }

  getName() {
    return `My name is ${this.name}`
  }
}
