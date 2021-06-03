class Pace {
        constructor(name, mileChange, healthChange){
            this.name = name;
            this.mileChange = mileChange;
            this.healthChange = healthChange;
        }
}
const paces = [
    new Pace ("Steady", 20, 0),
    new Pace ("Strenuous", 30, -3),
    new Pace ("Grueling", 35, -8),
    new Pace ("Resting", 0, 5),
];


exports.getPace = function getPace (x) {
    return paces[x];
}

