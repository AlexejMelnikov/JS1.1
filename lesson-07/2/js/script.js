function startTime()
{
     let tm = new Date();
     let h = tm.getHours();
     let m = tm.getMinutes();
     let s = tm.getSeconds();
     h = checkTime(h);
     m = checkTime(m);
     s = checkTime(s);
let timeNow = document.getElementById('time'); 
timeNow.textContent = h + " : " + m + " : " + s;
t = setTimeout(startTime, 1000);
}
		function checkTime(i)
		{
	if ( i < 10 ) {
		i= "0" + i;
		}
		 return i;
		}
console.log(startTime());
startTime();