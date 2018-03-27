var week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
var str = '';
var today = 'вторник';

for (let i = 0; i < 7; i++) {
	if (i > 4) {
		str = str + '<br \/>' + week[i].bold();
	} else if (week[i] == today) {
		str = str + '<br \/>' + week[i].italics();
} else {
	str = str + '<br \/>'  + week[i];
 }
}

document.write(str);


var arr = ['52', '345', '532', '7532', '77', '34', '53'];
 let c = arr[1].charAt(0);
 console.log(c);

 for (let i = 0; i < 7; i++) {
 	let c = arr[i].charAt(0);
 	if (c == "3" || c == "7") {
 		console.log(arr[i]);
 	}
 }