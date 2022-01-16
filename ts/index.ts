console.log("hii this is typescript");

interface Person {
  first: string;
  last: string;
  [key: string]: any;
}

const arr: Person[] = [];

arr.push({
  first: "this",
  last: "dd",
});

type MyList = [number, string, boolean];

const arrora: MyList = [1, "3", true];

interface User {
  name: string;
  id: string;
}

class UserAccount {
  name: string;
  id: string;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("ahmad", "randomuuidtext");
console.log(user.id);
console.log(user.name);
