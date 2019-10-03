const isSea = require('is-sea');
const fs = require('fs');
var data = "[[\"1990\",[";
var lo = 180;
var la = 90;
var count = 0;

for (var longitude = (-la+1); longitude < la - 1 ; longitude = longitude + 1) {
	for (var latitude = (-lo+1); latitude < lo - 1; latitude = latitude + 1) {
		if(!isSea(longitude, latitude)) {
			console.log("long.: " + longitude + ", lat.: " + latitude);
			data = data + longitude + "," + latitude + "," + 0.3*Math.random() + ", ";
			count++;
		}
	}
}
data = data + "0,0,0 ]]]";
console.log(data);
console.log(count);


fs.writeFile("./data1.json", data, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
