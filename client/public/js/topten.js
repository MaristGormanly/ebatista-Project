document.body.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
        window.location.replace("http://localhost:1337/mainmenu");
    }
});
function Score (name, points, date) {
	var score_record = { NAME:name, POINTS:points, DATE:date};
	return score_record;
}

var scores = [];


scores.push(Score("John", 200, "12/2/1993"));
scores.push(Score("Sally", 9999, "3/12/2008"));
scores.push(Score("Bobby", 670, "8/23/2001"));
scores.push(Score("Max", 1000, "4/3/2021"));
scores.push(Score("poop", 1, "12/8/1996"));
scores.push(Score("Larry", 5623, "1/23/2000"));
scores.push(Score("Mary", 5624, "1/23/2000"));
scores.push(Score("BrianGormanly1337", 4242, "4/4/2021"));
scores.push(Score("MarioLover69", 2, "6/8/2012"));
scores.push(Score("LuigiFan27", 3700, "10/31/2005"));
scores.push(Score("Michael B-Berg", 666, "1/1/2002"));
scores.push(Score("Noobmaster69", 158, "3/12/2016"));
scores.push(Score("Squilliam", 809, "7/23/1999"));
scores.push(Score("asdzxcaseqwr", 8008, "5/15/2015"));
scores.push(Score("MyNameJeff", 12, "9/27/2014"));
scores.push(Score("PinkPanther87", 2586, "2/13/2011"));

scores.sort((a, b) => (a.POINTS < b.POINTS) ? 1 : -1);
 
 var i;
 for (i = 0; i < 10; i++) {
	 document.getElementById("name" + i).innerHTML = scores[i].NAME;
	 document.getElementById("points" + i).innerHTML = scores[i].POINTS;
	 document.getElementById("date" + i).innerHTML = scores[i].DATE;
 }

console.log(scores[0].NAME );