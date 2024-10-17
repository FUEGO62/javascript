let product = 1;
let number = 5;
for(let count = number ; count>0;count --){

	product*=count;
	
	if(product>1000)break;

}

console.log(product)

let counter = 50;

while(counter>=0){

	console.log(counter);
	counter-=5


}

let string = "hello world"
let vowelCount = 0;

for(let count = 0; count < string.length; count++){

	if(string.charAt(count)=='a'||string.charAt(count)=='e'||string.charAt(count)=='i'||string.charAt(count)=='o'||string.charAt(count)=='u')vowelCount++;

}

console.log(vowelCount);

let list = [1,2,3];

function sum (list){

	let sum = 0;

	for(let count = 0; count < list.length;count++){

		sum+=list[count];

	}

	return sum;

}

console.log(sum(list));

function calculateArea(width,height){

	return width * height;

}

