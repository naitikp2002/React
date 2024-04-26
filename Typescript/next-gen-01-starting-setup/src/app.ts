// Code goes here!

type Employee = {
    name: string;
    age: number;
}

type Office={
    name: string;
    address: string
}

type Person = Employee & Office;
type UnknownType = Employee | Office
const e1 :Person= {
name: 'John',
age: 40,
address: 'sdfsdfsf'
}

// Generic types

const sum = <T extends number | string | boolean>(a: T, b: T): T => {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b as T;
    } else if (typeof a === 'string' && typeof b === 'string') {
      return a + b as T;
    } else if (typeof a === 'boolean' && typeof b === 'boolean') {
      return a || b as T;
    } else {
      throw new Error('Unsupported types for sum operation.');
    }
  };
  
  const ans1 = sum(5, 6); // T is inferred as number
  console.log(ans1); // Output: 11
  
  const ans2 = sum('hello', ' world'); // T is inferred as string
  console.log(ans2); // Output: 'hello world'
  
  const ans3 = sum(true, false); // T is inferred as boolean
  console.log(ans3); // Output: true