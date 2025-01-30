// use type inference wherever possible
// when you initialize a variable, TS assigns it that type and tracks it automatically
// not usable for function parameters or variables that aren't initialized with a value
let myName = "";

// for async applications, you can use unions to make sure things don't break during runtime
let herName: string | null = null;
herName = "Sally";

// to annotate arrays:
let items: number[] = [];
items = [4, 5, 6, 7, 8];

// if you want a union array that can hold multiple types of values:
let items2: (number | string)[] = [];
items2 = [1, "one"];

// unions are inferred without annotation:
let items3 = [1, "two"];

// Objects
let account = {
  name: "Jerry",
  balance: 400,
};

// this tells TS there is an array of objects
let accounts: {}[];

// interfaces
// ? makes it optional
interface IAccount {
  name: string;
  balance: number;
  status?: string;
  deposit?: (amount: number) => void;
}

let accounts2: IAccount = {
  name: "George",
  balance: 450,
  status: "open",
};


// Classes
class InvestmentAccount implements IAccount {
    constructor (
        public name, public balance
    ) {

    }

    private withdraw() {

    }
}
