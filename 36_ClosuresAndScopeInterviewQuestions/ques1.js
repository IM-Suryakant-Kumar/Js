(function immediateA(a) {
  return (function immediateB(b) {
    console.log(a);  // what is logged
  })(1);
})(0);
