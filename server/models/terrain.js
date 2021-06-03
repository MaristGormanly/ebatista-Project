class Terrain {
    constructor(name, imageUrl, mileChange){
        this.name = name;
        this.imageUrl = imageUrl;
        this.mileChange = mileChange;
    } 
}
var terrains = [
    new Terrain("Mountains", "images/mountains.png", 0.8 ), 
    new Terrain("Grasslands", "images/grasslands.png", 1), 
    new Terrain("Plains", "images/plains.png", 1), 
    new Terrain("Forest", "images/forest.png", .9)
];


exports.getTerrain = function getTerrain (x){
    return terrains[x];
} 
    