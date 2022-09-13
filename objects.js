console.log("Starting");
// literal syntax
const user = {
  id: 1,
  name: "mohan",
  add: "noida",
};
console.log(`id :${user.id} name :${user.name} add :${user.add}`);
// object
const user1 = new Object();
user1.name = "Pradnya";

const user2 = user; // depp copy :changes original one
user2.name = "new user";
console.log(`id :${user2.id} name :${user2.name} add :${user2.add}`);
console.log(`id :${user.id} name :${user.name} add :${user.add}`);

const user3 = Object.create(user); // shllow copy :only changes new one
user3.name = "user3";
console.log(`id :${user3.id} name :${user3.name} add :${user3.add}`);
console.log(`id :${user.id} name :${user.name} add :${user.add}`);

// multiple objects by using constuctor function

function User(userName, password) {
  // public
  this.userName = userName;
  this.password = password;
  this.shoeDetails = function () {
    console.log(`userName :${this.userName} password :${this.password}`);
  };
}
const User4 = new User("pradnya", "opo");
User4.shoeDetails();
const user5 = new User("nobita", "kedo");
user5.shoeDetails();

// ES6 classes
class Info {
  constructor(info, add) {
    this.info = info;
    this.add = add;
  }
  shoeDetails() {
    console.log(`info :${this.info} add :${this.add}`);
  }
}
const emp = new Info("sujika", "tokiyo");
emp.shoeDetails();
