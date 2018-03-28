 let str = "урок-3-был слишком легким";

for (let i = 0; i < str.length; i++) {
 str = str.replace("-", " "); 
}

console.log(str);
 
let easy = "легко";

str = str.replace("легким", easy);

console.log(str);
document.write(str);

 arr = [20, 33, 1, "Человек", 2, 3];
 let cube; 
 let sum = 0

 for (let i = 0; i < arr.length; i++) {
 	if ((typeof(arr[i])) === "number") {
 		cube = Math.pow(arr[i], 3);
 		sum += cube;
 	}
 }
 let sqrt = Math.sqrt(sum);

 console.log(sqrt);