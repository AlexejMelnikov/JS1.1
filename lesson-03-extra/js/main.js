let str = "урок-3-был слишком легким";
console.log(str);
let strFirst =str[0].toUpperCase() + str.substr(1);
console.log(strFirst);

let strSecond = strFirst.substr(0, 4) + " " +strFirst[5] + " " + strFirst.substr(7);
console.log(strSecond);

let strThird = strSecond.substr(0, 18);
console.log(strThird);

let strFourth = strThird.replace("ом", "оо");
console.log(strFourth);
document.write(strFourth);

let arr = [20, 33, 1, "Человек", 2, 3];
function sumArray(arr) {
	let sqrt = 0;
for(let i =  0; arr.length > i; i++) {
	if(typeof(arr[i]) != "string") {
		sqrt += Math.pow(arr[i], 3);
	}
}
return sqrt;
};
console.log(Math.sqrt(sumArray(arr)));
function oneArgument(string) {
	let stringEnd, 
		stringFirst,
		stringSecond,
		stringThird;
	if(typeof(string) != "string"){
		alert("Вы передали в функцию не строку")
	} else {
			stringFirst = string.trim();
			if(string.length >= 50) {
				stringSecond = stringFirst.substr(0, 50);
				// добавление символов ... в конец строки
				stringEnd ="...";

				stringThird = stringSecond + stringEnd;
				console.log(stringThird);
			}

		}
			return stringThird;
	}
console.log(oneArgument("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"));

 
