let Week = ["Понедельник",
			"Вторник",
			"Среда",
			"Четверг",
			"Пятница",
			"Суббота",
			"Воскресенье"
			],
			date = new Date(),
arr = [    "3476538963",
		   "6569218753",
		   "9568435673",
		   "7452895437",
		   "5456344376",
		   "8456345567",
		   "5434678904"];
Week.forEach( function(element, i) {
	if (i == 5 || i == 6) {

			document.write("<b>"+Week[i] + "</b>" + "<br>");

		} else if (i + 1 == date.getDay()){

				document.write("<i>"+Week[i] + "</i>" + "<br>");

				  } else{

			document.write(Week[i]+"<br>");

						}
	
});
for(let i =0; i < arr.length; i++) {
	if( arr[i][0] == "3" || arr[i][0] == "7") {
		
		console.log(arr[i]);
	}
}
console.log(date.getDay());
