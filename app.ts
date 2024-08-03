// function getTotals(numbers: Array<number>) {
//   return numbers.reduce((acc, item) => {
//     return acc + item;
//   }, 0);
// }

// console.log(getTotals([3, 2, 4]));

// let num1 = 4;

// function calculate(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(calculate(num1, 5));

// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   role: "Professor",
// };

// console.log(user.firstName);

//Topic 1: Type alias
// it is convention to define type start first letter in Uppercase letter for eg below

// type User = {
//   name: string;
//   age: number;
//   address?: string;
// };

// function login(userData: User): User {
//   return userData;
// }

// const user = {
//   name: "John Doe",
//   age: 12,
//   address: "Delhi",
// };

// console.log(login(user));

// type Id = number;

// const userId: Id = 123;

// Topic 2: Interfaces

// interface Transaction {
//   payerAccountNumber: number;
//   payeeAccountNumber: number;
// }
// interface BankAccount {
//   accountNumber: number;
//   accounHolder: string;
//   balance: number;
//   isActive: boolean;
//   transactions: Transaction[];
// }

// const transaction1: Transaction = {
//   payerAccountNumber: 123,
//   payeeAccountNumber: 346,
// };
// const transaction2: Transaction = {
//   payerAccountNumber: 123,
//   payeeAccountNumber: 346,
// };

// const bankAccount: BankAccount = {
//   accountNumber: 23244,
//   accounHolder: "Deepak",
//   balance: 20000,
//   isActive: true,
//   transactions: [transaction1],
// };

// Extend

// interface Book {
//   name: string;
//   price: number;
// }

// interface Ebook extends Book {
//   // name: string;
//   // price: number;
//   fileSize: number;
//   format: string;
// }
// interface Audiobook extends Ebook {
//   // name: string;
//   // price: number;
//   // fileSize: number;
//   // format: string;
//   duration: number;
// }

// const book: Book = {
//   name: "Atomic Habits",
//   price: 1200,
// };

// const ebook: Ebook = {
//   name: "Atomic Habits",
//   price: 1200,
//   fileSize: 200,
//   format: "pdf",
// };
// const audiobook: Audiobook = {
//   name: "Atomic Habits",
//   price: 1200,
//   fileSize: 200,
//   format: "mp3",
//   duration: 34,
// };

interface IPost {
  title: string;
  id: number;
  description: string;
}
interface IUser {
  id: number;
  name: string;
  age: number;
}

// const fetchPostData = async (path: string): Promise<IPost[]> => {
//   const response = await fetch(`http:example.com/${path}`);
//   return response.json();
// };
// const fetchUsersData = async (path: string): Promise<IUser[]> => {
//   const response = await fetch(`http:example.com/${path}`);
//   return response.json();
// };

const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
  const response = await fetch(`http:example.com/${path}`);
  return response.json();
};

(async () => {
  const posts = await fetchData<IPost[]>("/posts");
  posts[0].title;
  const users = await fetchData<IUser[]>("/users");
  users[0].name;
})();
