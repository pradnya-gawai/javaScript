let comments = ["good", "keep it up ", "grate"];
for (let i = 0; i < comments.length; i++) {
  const comment = comments[i];
  console.log(comment);
}

 // shllow copy 

 const shallowCopy = [...comments]
 // deep copy 
 const deep = comments
// array as list or collection
let users = [
  { id: 1, name: "pradnya" },
  { id: 2, name: "pradnya" },
  { id: 3, name: "pradnya" },
];
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  console.log(` Id :${user.id}  Name :${user.name}`);
}
// for Each loop
users.forEach(function (user) {
  console.log(` Id :${user.id}  Name :${user.name}`);
});

// mapping 
users.map((user, index) => {
  console.log(` Id :${user.id}  Name :${user.name}`);
});


let user = [
    [{ id: 1, name: "pradnya" },
    { id: 2, name: "ram" },
    { id: 3, name: "sham" },],
    [{ id: 4, name: "neha" },
    { id: 5, name: "lucky" },
    { id: 6, name: "node" },],

];
  