const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "releasing_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }
];

console.log("myMusic", myMusic);
let newAlbum = {};
console.log("newAlbum", newAlbum);

console.log('--------------------------------------------');
for(let i = 0; i < myMusic.length; i++){
    for(let key in myMusic[i]){
        newAlbum[key] = myMusic[i][key];
    }
}
console.log("newAlbum", newAlbum);
myMusic.push(newAlbum);
console.log("myMusic", myMusic);