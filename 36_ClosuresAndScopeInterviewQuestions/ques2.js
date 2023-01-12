let count = 0;
(function immediate(){
    if(count === 0){
        let count = 1;
        console.log(count); // what is logged
    }
    console.log(count);  // what is logged
})();