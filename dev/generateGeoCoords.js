const isSea = require('is-sea');
const fs = require('fs');
var longitude = 360;
var latitude = 180;
var data = "[";

for (var i = 0; i < longitude ; i++) {
	for (var j = -90; j < latitude - 90; j++) {
		if(!isSea(i,j)) {
			console.log("long.: " + i + ", lat.: " + j);
			data = data + i + "," + j + "," + "0.1, ";
		}
	}
}
data = data + "]";
console.log(data);


fs.writeFile("./data1.txt", data, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
