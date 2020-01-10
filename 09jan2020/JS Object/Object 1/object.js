var obj = {
   "first name": "Adam",
   "last name": "Edwards",
    age: "22",
    profession: "Accountant",
    isSleeping: true,
    favoriteColors: ["blue", "gray", "aqua"],
    favoriteSongs: {
        name: "The Road Goes Ever On",
        artist: "Bilbo Baggins",
    },
    haveRetirementPlan: true,
    consoleName: function() {
        console.log(this["first name"]);
    },
    getFullName: function() {
        return this["first name"] + " " + this["last name"];
    }
};
// objects are made with curvy brackets{}

console.log(obj.age);
// dot notation

console.log(obj["first name"]);
// Bracket Notation, mostly only use when your key has as space in it (key must be defined in quotations)

console.log(obj.favoriteColors[2]);

console.log(obj.favoriteSongs.artist);

for(var i = 0; i < obj.favoriteColors.length; i++) {
    console.log(obj.favoriteColors[i]);
}