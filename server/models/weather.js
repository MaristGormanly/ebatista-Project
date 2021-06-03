class Weather{
    constructor(id, type, healthChange, mileChange, probability){
        this.id = id;
        this.type = type;
        this.healthChange = healthChange;
        this.mileChange = mileChange;
        this.probability = probability;
    }
}

var veryHot = new Weather(0, "very Hot", -8, .7, .1);
var hot = new Weather(1, "Hot", -3, .9, .1);
var warm = new Weather(2, "warm", 1, 1, .2);
var cool = new Weather(3, "Cool", 1, .95, .1);
var cold = new Weather(4, "Cold", -5, .6, .1);
var veryCold = new Weather(5, "Very Cold", -12, .7, .1);
var rain = new Weather(6, "Rain", -4, .6, .1);
var heavyRain = new Weather(7, "Heavy Rain", -8, .4, .05);
var snow = new Weather(8, "Snow", -15, .3, .05);
var blizzard = new Weather(9, "Blizzard", -30, .1, .05);
var heavyFog = new Weather(10, "Heavy Fog", -3, .5, .05);

const weathers = [
    veryHot,
    veryHot,
    hot,
    hot,
    warm,
    warm,
    warm,
    warm,
    cool,
    cool,
    cold,
    veryCold,
    veryCold,
    rain,
    rain,
    heavyRain,
    snow,
    blizzard,
    heavyFog
];



exports.getWeather = function getWeather(x){
    return weathers[x];
}

