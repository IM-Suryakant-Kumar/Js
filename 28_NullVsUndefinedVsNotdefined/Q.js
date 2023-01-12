// Dry run

(function (){
    if((-100 && "0") || [] === true || 0){  // true
        console.log(1); //#

        if([] || (0 && false)){   // true
            console.log(2);  //#
        }

        if(Infinity && NaN && "false"){ // false
            console.log(3);
            if(""){
                console.log(4);
            }
        } else {   // true
            console.log(5);  //#
            if(({} || false === "") && !(null && undefined)){  // true
                console.log(6);  //#
            }
        }
    }
})();


// Output
// 1
// 2
// 5
// 6