console.log("in origin");
type StringArray = Array<string>;

const sarr: StringArray = [];

sarr.push("11");
sarr.push("11");

interface Backpack<Type> {
  add: (obj?: Type) => void;
  get: () => Type;
}

let gestured: Backpack<string>;

const obj = gestured.get();

gestured.add("2");
