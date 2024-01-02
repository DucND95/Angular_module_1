
// Bai1
function tinhTong(arr: number[]): number {
    return arr.reduce((acc, current) => acc + current, 0);
  }
  const mangSoNguyen: number[] = [1, 2, 3, 4, 5];
  const tong: number = tinhTong(mangSoNguyen);
  console.log(`Tổng của mảng là: ${tong}`);
//Bai2
// Define the interface
interface Person {
    name: string;
    age: number;
    email: string;
  }
  
  // Function that takes an object of type Person and prints the information
  function printPersonInfo(person: Person): void {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Email: ${person.email}`);
  }
  
  // Example of using the function
  const person: Person = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  };
  
  printPersonInfo(person);
//Bai3
// A generic function that takes an array and returns its first element
function getFirstElement<T>(arr: T[]): T | undefined {
    // Check if the array is not empty, then return the first element; otherwise, return undefined
    return arr.length > 0 ? arr[0] : undefined;
  }
  
  // Using the function with an array of integers
  const integers: number[] = [1, 2, 3, 4, 5];
  const firstInteger: number | undefined = getFirstElement(integers);
  console.log(`First Integer: ${firstInteger}`);
  
  // Using the function with an array of strings
  const strings: string[] = ["apple", "banana", "cherry"];
  const firstString: string | undefined = getFirstElement(strings);
  console.log(`First String: ${firstString}`);

//Bai4
// Define an enum named Color with values RED, GREEN, and BLUE
enum Color {
    RED = "RED",
    GREEN = "GREEN",
    BLUE = "BLUE",
  }
  
  /**
   * Function that takes a value from the Color enum and prints its name.
   * @param color - The color value from the Color enum.
   */
  function printColorName(color: Color): void {
    switch (color) {
      case Color.RED:
        console.log("Color: Red");
        break;
      case Color.GREEN:
        console.log("Color: Green");
        break;
      case Color.BLUE:
        console.log("Color: Blue");
        break;
      default:
        console.log("Unknown Color");
    }
  }
  
  // Example usage of the function with a color from the Color enum
  const selectedColor: Color = Color.GREEN;
  printColorName(selectedColor);
//Bai5
class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  acreage() {
    return this.width * this.height;
  }
}

let a = new Rectangle(5, 5);
console.log("acreage", a.acreage());
//Bai6
function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      console.log(`Calling method ${key} with arguments: ${JSON.stringify(args)}`);
      const result = originalMethod.apply(this, args);
      console.log(`Method ${key} returned: ${JSON.stringify(result)}`);
      return result;
    };
  
    return descriptor;
  }
  
  class ExampleClass {
    @logMethod
    add(a: number, b: number): number {
      return a + b;
    }
  
    @logMethod
    multiply(a: number, b: number): number {
      return a * b;
    }
  }
  
  const exampleInstance = new ExampleClass();
  
  console.log(exampleInstance.add(2, 3)); // Output will be logged for the 'add' method
  console.log(exampleInstance.multiply(4, 5)); // Output will be logged for the 'multiply' method
//Bai7

const data = async () => {
  try {
    const res = await fetch("http://localhost:3000/data");
    const data = await res.json();
    console.log("data", data);
  } catch (error) {
    console.log("error");
  }
};
data();

//Bai9
type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
  
  const productsList: Product[] = [
    {
      id: 1,
      name: "Product 1",
      price: 50,
      quantity: 20,
    },
    {
      id: 2,
      name: "Product 2",
      price: 100,
      quantity: 40,
    },
    {
      id: 3,
      name: "Product 3",
      price: 200,
      quantity: 60,
    },
    {
      id: 4,
      name: "Product 4",
      price: 300,
      quantity: 80,
    },
    {
      id: 5,
      name: "Product 5",
      price: 400,
      quantity: 100,
    },
  ];
  
  const productsValue = (products: Product[]) => {
    return products.reduce(
      (acc: number, curr: Product) => acc + curr.price * curr.quantity,
      0
    );
  };
  
  const filterProducts = (products: Product[]) => {
    return products.filter((p: Product) => p.price > 100);
  };
  
  const productsDescription = (products: Product[]) => {
    return products.map(
      (p: Product) =>
        `Sản phẩm ${p.name} có giá ${p.price} đồng và còn ${p.quantity} sản phẩm.`
    );
  };
  
  const filterProductsPrice = (products: Product[]) => {
    return products.reduce(
      (acc: number, curr: Product) => acc + (curr.price > 100 ? curr.price : 0),
      0
    );
  };
  
  const getDiscountedProducts = (products: Product[], discount: number) => {
    return products.map((p: Product) => ({
      ...p,
      price: p.price - p.price * (discount / 100),
    }));
  };
  
  console.log(productsValue(productsList));
  console.log(filterProducts(productsList));
  console.log(productsDescription(productsList));
  console.log(filterProductsPrice(productsList));
  console.log(getDiscountedProducts(productsList, 50));