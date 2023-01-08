function add() {
  let a = 4;

  function addChild() {
    console.log(a + 5);
  }
 
  return addChild;
}

let catchAdd = add();

console.log(catchAdd);

catchAdd();
