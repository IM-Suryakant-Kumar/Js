function add(a, b) {
  console.log(a + b);
}

// let addWit2 = add.bind(this, 2)
// let addWit2 = add.bind(this)
let addWit2 = add.bind(this, 2, 5);

// addWit2(4)
// addWit2(2, 4)
addWit2();
