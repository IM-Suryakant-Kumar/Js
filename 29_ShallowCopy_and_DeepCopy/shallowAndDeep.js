// // Spread operator method // shallow copies
// let sports = ["Cricket", "Football", "Swimming", { a: "hockey", b: "tennis" }];

// let copySports = [...sports];

// copySports[1] = "BaseBall";
// copySports[3]['a'] = 'Basketball';
// console.log("Original sports Array", sports);
// console.log("copy sports Array", copySports);


// // Shallow copy from the Array.from() method

// let sports = ["Cricket", "Football", "Swimming", { a: "hockey", b: "tennis" }];

// let copySports = Array.from(sports);

// copySports[1] = "BaseBall";
// copySports[3]['a'] = 'Basketball';
// console.log("Original sports Array", sports);
// console.log("copy sports Array", copySports);


// Shallow copy with slice method
// let sports = ["Cricket", "Football", "Swimming", { a: "hockey", b: "tennis" }];

// let copySports = sports.slice(0);

// copySports[1] = "BaseBall";
// copySports[3]['a'] = 'Basketball';
// console.log("Original sports Array", sports);
// console.log("copy sports Array", copySports);



// Deep copy

let sports = ["Cricket", "Football", "Swimming", { a: "hockey", b: "tennis" }];

let copySports = JSON.parse(JSON.stringify(sports));

copySports[1] = "BaseBall";
copySports[3]['a'] = 'Basketball';
console.log("Original sports Array", sports);
console.log("copy sports Array", copySports);