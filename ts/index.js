console.log("hii this is typescript");
const arr = [];
arr.push({
    first: "this",
    last: "dd",
});
const arrora = [1, "3", true];
class UserAccount {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new UserAccount("ahmad", "randomuuidtext");
console.log(user.id);
console.log(user.name);
