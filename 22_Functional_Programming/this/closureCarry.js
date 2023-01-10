function add(x){
    return function(y){
        console.log(x+y);
    }
}

let addWit2 = add(2)

addWit2(5)
